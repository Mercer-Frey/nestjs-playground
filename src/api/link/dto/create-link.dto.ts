import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkRequestDto {
  @ApiProperty({
    example: 'https://www.example.com',
    description: 'Link description',
  })
  @IsString()
  @IsUrl()
  originalUrl: string;
}

export class CreateLinkResponseDto {
  @ApiProperty({
    example: 'https://www.example.com',
    description: 'Link description',
  })
  @IsString()
  @IsUrl()
  url: string;
}
