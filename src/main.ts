import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import * as devenv from 'dotenv';

devenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
