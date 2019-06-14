import { Global, Module } from '@nestjs/common';

import { MessagingModule } from '../messaging/messaging.module';

@Global()
@Module({
  imports: [MessagingModule.forReceiver('tweets-queue')],
})
export class TweetsModule {}
