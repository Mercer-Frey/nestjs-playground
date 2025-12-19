import { ISpotifyArtistImage } from '@root/spotify/interfaces/spotify-artist-image.interface';

export interface ISpotifyArtistResponse {
  external_urls: {
    spotify: string;
  };

  followers: {
    href: string | null;
    total: number;
  };

  genres: string[];

  href: string;
  id: string;

  images: ISpotifyArtistImage[];

  name: string;
  popularity: number;

  type: 'artist';
  uri: string;
}
