import { ArtistGenre } from '@root/generated/prisma/enums';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class ArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ArtistGenre)
  @IsNotEmpty()
  genre: ArtistGenre;
}
