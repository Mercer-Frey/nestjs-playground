import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TaskModule } from '@root/task/task.module';
import { MovieDto } from '@root/movie/dto/movie.dto';
import { INestApplication } from '@nestjs/common';

export function SwaggerConfig(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nestjs-playground API')
    .setDescription('API documentation')
    .setVersion('1.0.0')
    .setContact('Name', 'Url', 'mail')
    .setLicense('MIT', 'github.com')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      include: [TaskModule],
      // deepScanRoutes: true,
      extraModels: [MovieDto],
      operationIdFactory: (controllerKey, methodKey) =>
        `${controllerKey}_${methodKey}`,
    });

  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: '/swagger.json',
    yamlDocumentUrl: '/swagger.yaml',
    customSiteTitle: 'Nestjs-playground API',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
