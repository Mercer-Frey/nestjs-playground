/* =========================
 Common
 ========================= */

export interface SpotifyExternalUrls {
  spotify: string;
}

export interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SpotifyRestrictions {
  reason: string;
}

/* =========================
 Artist (simplified)
 ========================= */

export interface SpotifyArtist {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

/* =========================
 Track
 ========================= */

export interface SpotifyTrack {
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: SpotifyLinkedTrack;
  restrictions?: SpotifyRestrictions;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  uri: string;
  is_local: boolean;
}

export interface SpotifyLinkedTrack {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  type: 'track';
  uri: string;
}

/* =========================
 Paging
 ========================= */

export interface SpotifyPaging<T> {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
}

/* =========================
 Album
 ========================= */

export interface ISpotifyAlbumResponse {
  album_type: 'album' | 'single' | 'compilation';
  total_tracks: number;
  available_markets: string[];

  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;

  images: SpotifyImage[];

  name: string;
  release_date: string;
  release_date_precision: 'year' | 'month' | 'day';

  restrictions?: SpotifyRestrictions;

  type: 'album';
  uri: string;

  artists: SpotifyArtist[];

  tracks: SpotifyPaging<SpotifyTrack>;

  copyrights: SpotifyCopyright[];

  external_ids: SpotifyExternalIds;

  genres: string[];
  label: string;
  popularity: number;
}

/* =========================
 Extra
 ========================= */

export interface SpotifyCopyright {
  text: string;
  type: 'C' | 'P';
}

export interface SpotifyExternalIds {
  isrc?: string;
  ean?: string;
  upc?: string;
}
