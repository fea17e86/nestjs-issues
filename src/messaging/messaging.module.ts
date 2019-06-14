import { DynamicModule, Module } from '@nestjs/common';

import { MessagingConnectionModule } from './messaging.connection.module';
import { MessagingReceiverModule } from './messaging.receiver.module';

const DEFAULT_CONNECTION = 'DEFAULT_CONNECTION';
const DEFAULT_RECEIVER = 'DEFAULT_RECEIVER';

@Module({})
export class MessagingModule {
  static forConnection(url: string): DynamicModule {
    return {
      module: MessagingModule,
      imports: [MessagingConnectionModule.create(url, DEFAULT_CONNECTION)],
    };
  }

  static forReceiver(topic: string): DynamicModule {
    const provider = MessagingReceiverModule.createProvider(
      topic,
      DEFAULT_RECEIVER,
      DEFAULT_CONNECTION,
    );

    return {
      module: MessagingModule,
      providers: [provider],
      exports: [provider],
    };
  }
}
