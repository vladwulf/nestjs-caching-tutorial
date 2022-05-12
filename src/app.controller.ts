import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { getCats, getDogs } from './utils';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(10)
  @CacheKey('all-dogs')
  @Get('dogs')
  getDogs() {
    return getDogs();
  }

  @Get('cats')
  async getCats() {
    const cachedCats = await this.cacheManager.get('all-cats');
    if (cachedCats) return cachedCats;

    const cats = await getCats();
    this.cacheManager.set('all-cats', cats, {
      ttl: 10,
    });

    return cats;
  }
}
