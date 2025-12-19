import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '@root/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): string {
    return this.appService.hello();
  }

  @Get('spotify-artists/:id')
  async getArtist(@Param('id') id: string) {
    return this.appService.getArtist(id);
  }
  @Get('spotify-albums/:id')
  async getAlbum(@Param('id') id: string) {
    return this.appService.getAlbum(id);
  }
}
