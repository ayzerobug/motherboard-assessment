import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import { VersioningType } from '@nestjs/common/enums';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerInterceptor, ResponseInterceptor } from './common/interceptors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  });
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalInterceptors(new LoggerInterceptor());
  const config = new DocumentBuilder()
    .setTitle('Forra API')
    .setDescription('This is the Swagger API UI for Forra Finance')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();

