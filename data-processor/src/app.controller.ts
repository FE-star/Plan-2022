import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  ClientGrpc,
} from '@nestjs/microservices';
import { Observable, merge, of } from 'rxjs';
import { reduce, catchError } from 'rxjs/operators';
import { ActivityResponse, ActivityService, MultiActivity } from './interface/activity.interface'

interface ResponseError {
  code: number;
  message: string;
  // Activity ID
  id: string;
}

class GRPCResponseError implements ResponseError {
  constructor (public code: number, public message: string, public id: string) {}
}

interface MultiActivityResponse {
  errors: ResponseError[];
  data: MultiActivityData | ResponseError;
}

interface MultiActivityData {
  [any: string]: ActivityResponse;
}

@Controller('activity')
export class AppController {
  private service: ActivityService;

  constructor(@Inject('activity-service') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.service = this.client.getService<ActivityService>('ActivityService');
  }

  @Get('query')
  query(@Query() query: MultiActivity): Observable<MultiActivityResponse> {
    const { activitys } = query
    const obsList = activitys.map(id => {
      let ret: Observable<ActivityResponse | ResponseError> = this.service.Call({ id })
        .pipe(catchError(err => {
          return of(new GRPCResponseError(5000, `GRPC Service Error when request activity ${id}`, id))
        }))
      return ret
    })
    const obs = merge(...obsList)

    const res = {
      errors: [],
      data: {}
    }

    return obs.pipe(reduce((acc, item, i) => { 
      acc.data[item.id] = item
      return acc
    }, res))
  }
}
