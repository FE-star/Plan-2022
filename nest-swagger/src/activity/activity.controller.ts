import { Controller, Get, Param, applyDecorators, Type } from '@nestjs/common';
import { ApiTags, ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { ActivityService } from './activity.service';
import { Offer, Paginated, SericeError } from './interfaces/activity.interface';


export const ApiPaginatedResponse = <TModel extends Type<any>>(
        model: TModel,
    ) => {
        return applyDecorators(
            ApiOkResponse({
                schema: {
                    allOf: [
                        { $ref: getSchemaPath(Paginated) },
                        {
                            properties: {
                                results: {
                                    type: 'array',
                                    items: { $ref: getSchemaPath(model) },
                                },
                            },
                        },
                    ],
                },
            }),
        );
    };


@ApiTags('activity')
@Controller('activity')
@ApiExtraModels(Paginated)
@ApiExtraModels(Offer)
@ApiExtraModels(SericeError)
export class ActivityController {
    constructor(private readonly activityService: ActivityService) {}

    @Get(':id')
    @ApiPaginatedResponse(Offer)
    findOne(@Param('id') id: string): Paginated<Offer> {
        return new Paginated(this.activityService.findOne(id), 0, 10)
    }
}
