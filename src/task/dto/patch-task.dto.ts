import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class PatchTaskDto {
  @ApiProperty({ example: 'My task title' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  title: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsNotEmpty()
  isCompleted: boolean;
}
