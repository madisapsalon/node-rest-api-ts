import {
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { BaseEntity, CreateDateColumn, Entity, OneToMany, Unique, UpdateDateColumn } from 'typeorm/index';
import bcrypt from 'bcryptjs';
import Entry from '../entry/EntryModel';

interface UserDto {
  email: string;
  password: string;
}

export interface JwtPayload {
  email: string;
  id: string;
  iat: number,
  exp: number;
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

  @OneToMany(type => Entry, entry => entry.user, { eager: true })
  entries!: Entry[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
