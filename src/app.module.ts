import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { AppController } from './app/app.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductsModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
