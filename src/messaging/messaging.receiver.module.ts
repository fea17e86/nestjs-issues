import { DynamicModule, Module } from '@nestjs/common';

import { Connection } from './lib/Connection';
import { Receiver } from './lib/Receiver';

@Module({})
export class MessagingReceiverModule {
  static createProvider(
    topic: string,
    receiverName: string,
    connectionName: string,
  ) {
    return {
      provide: receiverName,
      useFactory: (connection: Connection): Receiver => {
        return connection.openReceiver(topic);
      },
      inject: [connectionName],
    };
  }

  static create(
    topic: string,
    receiverName: string,
    connectioName: string,
  ): DynamicModule {
    const provider = MessagingReceiverModule.createProvider(
      topic,
      receiverName,
      connectioName,
    );

    return {
      module: MessagingReceiverModule,
      providers: [provider],
      exports: [provider],
    };
  }
}
