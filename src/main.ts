import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { LoggerMiddleware } from '@root/common/middlewares/logger.middleware';
import { ResponseInterceptor } from '@root/common/interceptors/response.interceptor';
import { AllExceptionFilter } from '@root/common/filters/all-exception.filter';
import { AuthGuard } from '@root/common/guards/auth.guard';
import { SwaggerConfig } from '@root/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(LoggerMiddleware);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionFilter());

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  SwaggerConfig(app);
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line
bootstrap();
