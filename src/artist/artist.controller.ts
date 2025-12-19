import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistDto } from '@root/artist/dto/create-artist.dto';

@Controller({ path: 'artists', version: '2' })
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() dto: ArtistDto) {
    return this.artistService.create(dto);
  }

  @Get('all')
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistService.findOne(id);
  }
}
