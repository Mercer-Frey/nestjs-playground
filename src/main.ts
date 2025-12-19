import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerConfig } from '@root/config/swagger.config';
import cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  SwaggerConfig(app);
  app.enableCors({
    credentials: true,
    origin: config.getOrThrow<string>('ALLOWED_ORIGINS').split(','),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposeHeaders: ['Set-Cookie', 'HttpOnly'],
    allowedHeaders: ['Authorization', 'X-Requested-With'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
