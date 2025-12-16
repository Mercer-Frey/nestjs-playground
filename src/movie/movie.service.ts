import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@root/prisma/prisma.service';
import { Movie } from '@root/generated/prisma/client';
import { MovieDto } from '@root/movie/dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Partial<Movie>[]> {
    return this.prismaService.movie.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
      select: {
        id: true,
        title: true,
        releaseYear: true,
        actors: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Movie> {
    const movie = await this.prismaService.movie.findUnique({
      where: { id },
      include: {
        actors: true,
        poster: true,
        reviews: true,
      },
    });

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }

    if (!movie.isAvailable) {
      throw new NotFoundException(`Movie with id ${id} not available`);
    }

    return movie;
  }

  async create(dto: MovieDto): Promise<Movie> {
    const { title, actorIds, releaseYear, imageUrl } = dto;
    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: actorIds },
      },
    });

    if (!actors.length) {
      throw new NotFoundException(`Actor/s not found`);
    }

    const movie = this.prismaService.movie.create({
      data: {
        title,
        releaseYear,
        actors: { connect: actors.map((actor) => ({ id: actor.id })) },
        poster: imageUrl ? { create: { imageUrl } } : undefined,
      },
    });

    return movie;
  }

  async update(id: string, dto: MovieDto): Promise<Movie> {
    const { title, releaseYear } = dto;
    const movie = await this.findById(id);
    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: dto.actorIds },
      },
    });

    if (!actors.length) {
      throw new NotFoundException(`Actor/s not found`);
    }

    return this.prismaService.movie.update({
      where: { id: movie.id },
      data: {
        title,
        releaseYear,
        actors: { connect: actors.map((actor) => ({ id: actor.id })) },
        poster: dto.imageUrl
          ? { create: { imageUrl: dto.imageUrl } }
          : undefined,
      },
    });
  }

  async delete(id: string): Promise<string> {
    const movie = await this.prismaService.movie.delete({ where: { id } });

    return Promise.resolve(movie.id);
  }
}
