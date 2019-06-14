import { Module } from '@nestjs/common';

import { MessagingModule } from './messaging/messaging.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [MessagingModule.forConnection('localhost:5672'), TweetsModule],
})
export class AppModule {}
