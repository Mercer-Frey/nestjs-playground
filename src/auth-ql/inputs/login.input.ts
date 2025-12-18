import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { JwtAccessToken } from '@root/auth/interfaces/jwt.interface';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginRequestInput {
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

export class LoginResponseInput implements JwtAccessToken {
  @Field(() => String)
  accessToken: string;
}
