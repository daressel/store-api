import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { Datasource } from './datasource/datasource';
import { DataSource } from './data-source/data-source';

@Module({
  imports: [ItemModule],
  controllers: [AppController],
  providers: [AppService, Datasource, DataSource],
})
export class AppModule {}
