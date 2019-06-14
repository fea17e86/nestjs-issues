import { DynamicModule, Module } from '@nestjs/common';

import { Connection } from './lib/Connection';

@Module({})
export class MessagingConnectionModule {
  static create(url: string, connectioName: string): DynamicModule {
    const connection: Connection = new Connection(url);

    const connectionProvider = {
      provide: connectioName,
      useValue: connection,
    };

    return {
      module: MessagingConnectionModule,
      providers: [connectionProvider],
      exports: [connectionProvider],
    };
  }
}
