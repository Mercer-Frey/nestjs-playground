import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { JwtAccessToken } from '@root/common/interfaces';

export class RegisterRequestDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'User full name',
    minLength: 2,
    maxLength: 50,
  })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, {
    message: 'Name must be at least 2 characters long',
  })
  @MaxLength(50, {
    message: 'Name must be at most 50 characters long',
  })
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'User email address',
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({
    example: 'StrongP@ssw0rd',
    description: 'User password',
    minLength: 8,
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}

export class RegisterResponseDto implements JwtAccessToken {
  @ApiProperty({
    description: 'JWT access token used for authenticated API requests',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YzQ4YzNkYi04ZWRmLTQ5YmEtYmFiNy04ZjA4MmRjOTNjM2IiLCJpYXQiOjE2OTAwMDAwMDAsImV4cCI6MTY5MDAwMDMwMH0.signature',
  })
  accessToken: string;
}
