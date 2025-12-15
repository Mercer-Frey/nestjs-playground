import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({ example: 'Pulp Fiction' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  title: string;
}
