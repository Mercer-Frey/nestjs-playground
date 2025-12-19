import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerConfig } from '@root/config/swagger.config';
import cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.use(cookieParser());

  app.enableCors({
    credentials: true,
    origin: config.getOrThrow<string>('ALLOWED_ORIGINS').split(','),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposeHeaders: ['Set-Cookie', 'HttpOnly'],
    allowedHeaders: ['Authorization', 'X-Requested-With'],
  });
  // app.use(LoggerMiddleware);

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new AuthGuard());
  // app.useGlobalInterceptors(new ResponseInterceptor());
  // app.useGlobalFilters(new AllExceptionFilter());

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  SwaggerConfig(app);

  // app.enableVersioning({
  //   type: VersioningType.HEADER,
  //   header: 'X-API-Version',
  //   defaultVersion: '1',
  // });

  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line
bootstrap();
