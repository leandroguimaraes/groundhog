import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Groundhog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
