import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReviewEntity } from '@root/review/entities/review.entity';
import { ActorEntity } from '@root/actor/entities/actor.entity';
import { ApiProperty } from '@nestjs/swagger';
import { PosterEntity } from '@root/movie/entities/poster.entity';

export enum EGenre {
  ACTION = 'action',
  DRAMA = 'drama',
  HORROR = 'horror',
  COMEDY = 'comedy',
}

@Entity({ name: 'movies' })
export class MovieEntity {
  @ApiProperty({
    description: 'Unique movie identifier',
    example: '8fae9817-43ff-4d15-b760-9895d3ba26eb',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Movie title',
    example: 'Pulp Fiction',
    maxLength: 128,
  })
  @Column({
    type: 'varchar',
    length: 128,
  })
  title: string;

  @ApiProperty({
    description: 'Movie description',
    example: 'A story about crime and redemption',
    maxLength: 255,
    nullable: true,
  })
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  description: string;

  @ApiProperty({
    description: 'Movie genre',
    enum: EGenre,
    example: EGenre.ACTION,
  })
  @Column({
    type: 'enum',
    enum: EGenre,
    default: EGenre.ACTION,
  })
  genre: EGenre;

  @ApiProperty({
    description: 'Year the movie was released',
    example: 1994,
    minimum: 1888,
  })
  @Column({
    name: 'release_year',
    type: 'int',
    unsigned: true,
  })
  releaseYear: number;

  @ApiProperty({
    description: 'Average movie rating',
    example: 8.9,
    minimum: 0,
    maximum: 10,
    type: Number,
    format: 'float',
  })
  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @ApiProperty({
    description: 'Is the movie currently available',
    example: true,
  })
  @Column({
    name: 'is_available',
    type: 'boolean',
    default: false,
  })
  isAvailable: boolean;

  @Column({ name: 'poster_id', type: 'uuid', nullable: true })
  posterId: string;

  @ApiProperty({
    description: 'Poster associated with the movie',
    type: () => PosterEntity,
    nullable: true,
  })
  @OneToOne(() => PosterEntity, (poster) => poster.movie, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'poster_id' })
  poster: PosterEntity | null;

  @ApiProperty({
    description: 'List of reviews for the movie',
    type: () => ReviewEntity,
    isArray: true,
  })
  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @ApiProperty({
    description: 'Actors involved in the movie',
    type: () => ActorEntity,
    isArray: true,
  })
  @ManyToMany(() => ActorEntity, (actor) => actor.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: ActorEntity[];

  @ApiProperty({
    description: 'Movie creation timestamp',
    example: '2024-05-12T10:15:30.000Z',
    type: String,
    format: 'date-time',
  })
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-05-13T09:42:11.000Z',
    type: String,
    format: 'date-time',
  })
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
