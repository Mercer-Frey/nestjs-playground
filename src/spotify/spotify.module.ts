import { DynamicModule, Module } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { HttpModule } from '@nestjs/axios';
import {
  SpotifyAsyncOptions,
  SpotifyOptions,
  SpotifyOptionsToken,
} from '@root/spotify/tokens/spotify-options.token';

@Module({
  imports: [HttpModule.register({})],
  providers: [SpotifyService],
  exports: [SpotifyService],
})
export class SpotifyModule {
  static forRoot(options: SpotifyOptions): DynamicModule {
    return {
      module: SpotifyModule,
      imports: [HttpModule],
      providers: [
        SpotifyService,
        { provide: SpotifyOptionsToken, useValue: options },
      ],
      exports: [SpotifyService],
      global: true,
    };
  }

  static forRootAsync({ imports, inject, useFactory }: SpotifyAsyncOptions) {
    return {
      module: SpotifyModule,
      imports: [HttpModule, ...(imports ?? [])],
      providers: [
        SpotifyService,
        {
          provide: SpotifyOptionsToken,
          inject: inject ?? [],
          useFactory,
        },
      ],
      exports: [SpotifyService],
      global: true,
    };
  }
}
