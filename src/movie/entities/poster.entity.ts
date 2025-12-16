import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MovieEntity } from '@root/movie/entities/movie.entity';

@Entity({ name: 'movie_posters' })
export class PosterEntity {
  @ApiProperty({
    description: 'Unique poster identifier',
    example: '8fae9817-43ff-4d15-b760-9895d3ba26eb',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Poster image URL',
    example:
      'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
    maxLength: 255,
  })
  @Column({
    type: 'varchar',
    length: 255,
  })
  imageUrl: string;

  @ApiProperty({
    description: 'Movie associated with this poster',
    type: () => MovieEntity,
  })
  @OneToOne(() => MovieEntity, (movie) => movie.poster)
  @JoinColumn({ name: 'movie_id' })
  movie: MovieEntity;

  @ApiProperty({
    description: 'Poster creation timestamp',
    example: '2024-05-12T10:15:30.000Z',
    type: String,
    format: 'date-time',
  })
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;
}
