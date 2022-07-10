import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityController } from './activity/activity.controller';
import { ActivityService } from './activity/activity.service';

@Module({
  imports: [],
  controllers: [AppController, ActivityController],
  providers: [AppService, ActivityService],
})
export class AppModule {}
