import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { Item } from './item';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemResolver, ItemService, Item],
})
export class ItemModule {}
