import { Module } from '@nestjs/common';
import { ItemModule } from './models/item/item.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [typeorm] }),
    ItemModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
