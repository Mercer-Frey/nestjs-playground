import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';

export class ReviewDto {
  @ApiProperty({
    description: 'Review text',
    example: 'Good movie',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  text: string;

  @ApiProperty({
    description: 'Movie rating from 0 to 10',
    example: 8.3,
    minimum: 0,
    maximum: 10,
    type: Number,
    format: 'float',
  })
  @IsNumber(
    { maxDecimalPlaces: 1 },
    { message: 'Rating must have at most 1 decimal place' },
  )
  @Min(0)
  @Max(10)
  rating: number;

  @ApiProperty({
    description: 'ID of the movie being reviewed',
    example: '8fae9817-43ff-4d15-b760-9895d3ba26eb',
    format: 'uuid',
  })
  @IsUUID('4')
  @IsNotEmpty()
  movieId: string;
}
