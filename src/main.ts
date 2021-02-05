import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as devenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs'

devenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/partials'))
  app.setViewEngine('hbs');
  app.set('view options', {
    layout: 'layouts/index'
  });

  await app.listen(process.env.PORT);
}
bootstrap();
