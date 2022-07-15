import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';


export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'activityservice',
        url: '0.0.0.0:8001',
        protoPath: join(process.cwd(), './activity-service.proto'),
    }
}