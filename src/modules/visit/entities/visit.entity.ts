import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IVisit } from '../interfaces/visit.interface';
import { IClient } from 'src/modules/client/interfaces/client.interface';
import { Client } from 'src/modules/client/entities/client.entity';

@Entity()
export class Visit implements IVisit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column()
  time: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  phone: string;

  @ManyToOne(() => Client)
  @JoinColumn()
  client: IClient;
}
