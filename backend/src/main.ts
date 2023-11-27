import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { ResponseInterceptor } from './common/interceptors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(4000);
}
bootstrap();

