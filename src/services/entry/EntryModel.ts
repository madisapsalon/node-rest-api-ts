import {
  BaseEntity, Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm/index';
import User from '../auth/UserModel';
import { IsNotEmpty } from 'class-validator';

interface EntryDto {
  name: string;
}

@Entity()
export default class Entry extends BaseEntity {
  constructor(body: EntryDto) {
    super();
    if (body) {
      this.name = body.name;
    }
  }
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @IsNotEmpty()
  @Column()
  name!: string;

  @ManyToOne(type => User, user => user.entries, { eager: false })
  user!: User;

  @Column()
  userId!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
