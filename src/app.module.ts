import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';

import { AppController } from './app.controller';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      url: 'redis://localhost:6379',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
