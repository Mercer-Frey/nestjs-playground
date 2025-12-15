import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

export class MovieDto {
  @ApiProperty({ example: 'Horror' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  genre: string;

  @ApiProperty({ example: 2010 })
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  year: number;
}
