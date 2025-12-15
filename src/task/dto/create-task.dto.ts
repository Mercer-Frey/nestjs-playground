import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { StartsWith } from '@shared/decorators/starts-with.decorator';

enum ETaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}
export class CreateTaskDto {
  @ApiProperty({ example: 'My task title' })
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

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  priority: number;

  @ApiProperty()
  @IsArray()
  @IsEnum(ETaskTag, { each: true })
  @IsOptional()
  tags: string[];
  //
  // @ApiProperty()
  // @IsString()
  // @MinLength(6)
  // @Matches(/^(?=.*[A-Z])(?=.*\d).+$/)
  // password: string;
  //
  // @ApiProperty()
  // @IsString()
  // @IsUrl({
  //   protocols: ['https', 'wss'],
  //   host_whitelist: ['google.com'],
  //   host_blacklist: ['yandex.ru'],
  // })
  // websiteUrl: string;
  //
  // @ApiProperty()
  // @IsString()
  // @IsUUID('4')
  // userId: string;
}
