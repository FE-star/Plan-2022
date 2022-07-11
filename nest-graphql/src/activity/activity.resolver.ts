import { Args, Query, Resolver } from '@nestjs/graphql';
import { Offer } from './models/activity.model';
import { ActivityService } from './activity.service';

@Resolver('Activity')
export class ActivityResolver {
    constructor(private readonly activityService: ActivityService) {}

    @Query(returns => [Offer])
    activity(@Args('id') id: string): Offer[] {
        return this.activityService.findOne(id)
    }

    @Query(returns => [[Offer]])
    activitys(@Args({ name: 'ids', type: () => [String] }) ids: string[]): Array<Offer[]> {
        return ids.map(v => this.activityService.findOne(v))
    }
}
