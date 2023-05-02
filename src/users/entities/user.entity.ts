import { PrimaryGeneratedColumn, Column, PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  userName: string;

  @Column()
  userPassword: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;

}