import { Controller, Get, Param, Inject } from '@nestjs/common';
import {
  ClientGrpc,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ActivityRequest {
	id: string
}

interface ActivityResponse {
	offer: Offer[]
}

interface Offer {
	nid: string
	title: string
	pict_url: string
	icons: Icon[]
}

interface Icon {
	type: string
	bg_color: string
	border_color: string
	font_color: string
	text: string
	source: string
}

interface ActivityService {
  Call(req: ActivityRequest): Observable<ActivityResponse>
}

@Controller('activity')
export class AppController {
  private service: ActivityService;

  constructor(@Inject('activity-service') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.service = this.client.getService<ActivityService>('ActivityService');
  }

  @Get(':id')
  get(@Param('id') id: string): Observable<ActivityResponse> {
    const res = this.service.Call({ id });
    res.subscribe(v => {
      console.log(v)
    })
    return res
  }
}
