/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'character varying',
    nullable: false,
    default: '',
    name: 'car_name',
  })
  name: string;

  @Column({
    type: 'character varying',
    nullable: false,
    default: '',
  })
  gear: string;

  @Column({
    type: 'double precision',
    nullable: false,
  })
  engine: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  places: number;

  @Column({
    type: 'character varying',
    nullable: false,
    default: '',
  })
  image: string;

  @Column({
    type: 'integer',
    nullable: false,
    default: 1,
    name: 'category_id',
  })
  categoryId: number;
}
