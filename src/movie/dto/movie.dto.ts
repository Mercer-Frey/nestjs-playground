import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUrl,
  IsUUID,
  Length,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class MovieDto {
  @ApiProperty({
    description: 'Movie title',
    example: 'Pulp Fiction',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  title: string;

  @ApiProperty({
    description: 'Year the movie was released',
    example: 2020,
    minimum: 1888,
    maximum: new Date().getFullYear(),
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;

  @ApiProperty({
    description: 'Poster image URL',
    example:
      'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
    maxLength: 255,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsUrl({
    protocols: ['http', 'https'],
    require_protocol: true,
    allow_underscores: true,
  })
  imageUrl: string;

  @ApiProperty({
    description: 'Array of actor UUIDs associated with the movie',
    type: 'array',
    items: {
      type: 'string',
      format: 'uuid',
      example: '550e8400-e29b-41d4-a716-446655440000',
    },
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    ],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  actorIds: string[];
}
