import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { FileModule } from '@root/file/file.module';

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
      include: [FileModule],
      // deepScanRoutes: true,
      // extraModels: [MovieDto],
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
