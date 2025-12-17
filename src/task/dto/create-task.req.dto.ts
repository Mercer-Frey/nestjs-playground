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

export enum ETaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}
export class CreateTaskReqDto {
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

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsPositive()
  @IsOptional()
  priority: number;

  @ApiProperty({
    enum: ETaskTag,
    example: ETaskTag.HOME,
  })
  @IsArray()
  @IsEnum(ETaskTag, { each: true })
  @IsOptional()
  tags: ETaskTag[];
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
