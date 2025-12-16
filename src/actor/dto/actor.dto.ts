import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ActorDto {
  @ApiProperty({ example: 'Johnny  Depp' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  name: string;
}
