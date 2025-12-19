import { Injectable, NotFoundException } from '@nestjs/common';
import { ArtistDto } from './dto/create-artist.dto';
import { PrismaService } from '@root/prisma/prisma.service';
import { Artist } from '@root/generated/prisma/client';

@Injectable({ version: 2 })
export class ArtistService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(artistDto: ArtistDto): Promise<Artist> {
    const { name, genre } = artistDto;
    const artist = this.prismaService.artist.create({ data: { name, genre } });
    return artist;
  }

  async findAll(): Promise<Artist[]> {
    return await this.prismaService.artist.findMany();
  }

  async findOne(id: string): Promise<Artist> {
    const artist = await this.prismaService.artist.findUnique({
      where: { id },
    });
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }
}
