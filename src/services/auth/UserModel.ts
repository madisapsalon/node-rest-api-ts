import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { BaseEntity, CreateDateColumn, Unique, UpdateDateColumn } from 'typeorm/index';

@Entity()
@Unique(['email'])
export default class User extends BaseEntity {
  constructor(body: any) {
    super();
    if (body) {
      this.email = body.email;
      this.password = body.password;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Column()
  password: string;

  @Column()
  salt: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}