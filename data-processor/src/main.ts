import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

// {
//   transport: Transport.GRPC,
//     options: {
//       package: 'activity-service',
//       protoPath: join(__dirname, './activity-service.proto'),
//     }
// }
