import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm/index';
import User from '../auth/UserModel';

@Entity()
export default class Entry extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @ManyToOne(type => User, user => user.entries, { eager: false })
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
