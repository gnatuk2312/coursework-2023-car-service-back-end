import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IVehicle } from '../interfaces/vehicle.interface';
import { IClient } from 'src/modules/client/interfaces/client.interface';
import { Client } from 'src/modules/client/entities/client.entity';

@Entity()
export class Vehicle implements IVehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({ type: 'smallint' })
  year: number;

  @Column({ nullable: true })
  additionalInfo: string;

  @Column()
  licensePlate: string;

  @Column()
  engine: string;

  @ManyToOne(() => Client)
  @JoinColumn()
  owner: IClient;
}
