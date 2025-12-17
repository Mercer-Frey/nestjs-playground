import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { StartsWith } from '@shared/decorators/starts-with.decorator';

export class CreateTaskResDto {
  @ApiProperty({ example: 111, description: 'My task id', type: 'number' })
  @IsInt()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example: 'Task: My task title',
    description: 'My task description',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @StartsWith('Task:')
  @Length(3, 20)
  title: string;

  @ApiProperty({ example: 'My task description' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 200)
  @IsOptional()
  description: string;
}
