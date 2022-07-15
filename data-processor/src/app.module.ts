import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc-client.options'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'activity-service',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
