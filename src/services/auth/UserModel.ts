import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { BaseEntity, CreateDateColumn, Unique, UpdateDateColumn } from 'typeorm/index';
import bcrypt from 'bcryptjs';

interface UserDto {
  email: string;
  password: string;
}

@Entity()
@Unique(['email'])
export default class User extends BaseEntity {
  constructor(body: UserDto) {
    super();
    if (body) {
      this.email = body.email;
      this.password = body.password;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @Column()
  password!: string;

  @Column()
  salt!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
