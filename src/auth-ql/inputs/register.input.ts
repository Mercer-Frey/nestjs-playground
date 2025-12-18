import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { JwtAccessToken } from '@root/auth/interfaces/jwt.interface';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterRequestInput {
  @Field(() => String)
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, {
    message: 'Name must be at least 2 characters long',
  })
  @MaxLength(50, {
    message: 'Name must be at most 50 characters long',
  })
  name: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @Field(() => String)
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;
}

export class RegisterResponseInput implements JwtAccessToken {
  @Field(() => String)
  accessToken: string;
}
