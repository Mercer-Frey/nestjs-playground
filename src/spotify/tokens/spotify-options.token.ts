import { FactoryProvider, ModuleMetadata } from '@nestjs/common';

export const SpotifyOptionsToken = Symbol('SPOTIFY_OPTIONS_TOKEN');

export interface SpotifyOptions {
  clientId: string;
  clientSecret: string;
}

export type SpotifyAsyncOptions = Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider<SpotifyOptions>, 'useFactory' | 'inject'>;
