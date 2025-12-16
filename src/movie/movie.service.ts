import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MovieEntity } from '@root/movie/entities/movie.entity';
import { MovieDto } from '@root/movie/dto/movie.dto';
import { ActorEntity } from '@root/actor/entities/actor.entity';
import { PosterEntity } from '@root/movie/entities/poster.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
    @InjectRepository(PosterEntity)
    private readonly posterRepository: Repository<PosterEntity>,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: {
        isAvailable: false,
      },
      order: {
        createdAt: 'desc',
      },
      take: 2,
      select: {
        id: true,
        title: true,
        releaseYear: true,
      },
    });
  }

  async findOne(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: { id },
      relations: ['actors'],
    });

    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }

    return await this.movieRepository.save(movie);
  }

  async createMovie(dto: MovieDto): Promise<MovieEntity> {
    const { title, actorIds, releaseYear, imageUrl } = dto;
    const actors = await this.actorRepository.find({
      where: {
        id: In(actorIds),
      },
    });

    if (!actors.length) {
      throw new NotFoundException(`Actor/s not found`);
    }

    let poster: PosterEntity | null = null;
    if (imageUrl) {
      poster = this.posterRepository.create({ imageUrl });
      await this.posterRepository.save(poster);
    }
    const movie = this.movieRepository.create({
      title,
      releaseYear,
      actors,
      poster,
    });

    return await this.movieRepository.save(movie);
  }

  async updateMovie(id: string, dto: MovieDto): Promise<MovieEntity> {
    const movie = await this.findOne(id);

    Object.assign(movie, dto);

    return await this.movieRepository.save(movie);
  }

  async deleteMovie(id: string): Promise<string> {
    const movie = await this.findOne(id);

    await this.movieRepository.remove(movie);

    return Promise.resolve(movie.id);
  }
}
