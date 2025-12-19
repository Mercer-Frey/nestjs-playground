import { Injectable } from '@nestjs/common';
import { SpotifyService } from '@root/spotify/spotify.service';

@Injectable()
export class AppService {
  constructor(private readonly sotifyService: SpotifyService) {}

  async getArtist(id: string) {
    const artist = await this.sotifyService.getArtist(id);

    return artist;
  }

  async getAlbum(id: string) {
    const album = await this.sotifyService.getAlbum(id);

    return album;
  }

  hello() {
    return 'Hello World!';
  }
}
