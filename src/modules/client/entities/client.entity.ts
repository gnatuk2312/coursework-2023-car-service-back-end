import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IClient } from '../interfaces/client.interface';

@Entity()
export class Client implements IClient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  about: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;
}
