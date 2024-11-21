import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const baseUrl = configService.get<string>('BASE_URL');
  const swaggerUrl = configService.get<string>('SWAGGER_URL');
  const port = configService.get<number>('APP_PORT') || 3000;

  const config = new DocumentBuilder()
    .setTitle('Ponto Eletrônico API')
    .setDescription('API para gerenciamento de ponto eletrônico')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  logger.log(`Application is running on: ${baseUrl}:${port}`);
  logger.log(`Swagger is available at: ${swaggerUrl}`);
}
bootstrap();
