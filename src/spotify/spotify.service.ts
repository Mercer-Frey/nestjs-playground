import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ISpotifyAuthResponse } from '@root/spotify/interfaces/spotify-auth-response.interface';
import { ISpotifyArtistResponse } from '@root/spotify/interfaces/spotify-artist-response.interface';
import { ISpotifyAlbumResponse } from '@root/spotify/interfaces/spotify-album-response.interface';

@Injectable()
export class SpotifyService {
  private accessToken: string | null;
  private tokenExpire: number = 0;
  private readonly SPOTIFY_CLIENT_ID: string;
  private readonly SPOTIFY_CLIENT_SECRET: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.SPOTIFY_CLIENT_ID = configService.getOrThrow('SPOTIFY_CLIENT_ID');
    this.SPOTIFY_CLIENT_SECRET = configService.getOrThrow(
      'SPOTIFY_CLIENT_SECRET',
    );
  }

  public async getArtist(id: string): Promise<ISpotifyArtistResponse> {
    await this.authenticate();
    const response = await firstValueFrom(
      this.httpService.get<ISpotifyArtistResponse>(
        `https://api.spotify.com/v1/artists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        },
      ),
    );
    return response.data;
  }

  public async getAlbum(id: string): Promise<ISpotifyAlbumResponse> {
    await this.authenticate();
    const response = await firstValueFrom(
      this.httpService.get<ISpotifyAlbumResponse>(
        `https://api.spotify.com/v1/albums/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        },
      ),
    );
    return response.data;
  }

  private async authenticate(): Promise<void> {
    if (!this.accessToken && Date.now() < this.tokenExpire) {
      return;
    }
    const credentials = Buffer.from(
      `${this.SPOTIFY_CLIENT_ID}:${this.SPOTIFY_CLIENT_SECRET}`,
    ).toString('base64');
    const response = await firstValueFrom(
      this.httpService.post<ISpotifyAuthResponse>(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      ),
    );

    this.accessToken = response.data.access_token;
    this.tokenExpire = response.data.expires_in * 1000 + Date.now();
  }
}
