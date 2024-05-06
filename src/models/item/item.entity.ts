import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.typeorm';

@Entity()
export class ItemEntity extends BaseEntity {
  @Column()
  title: string;
}
