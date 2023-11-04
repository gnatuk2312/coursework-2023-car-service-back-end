import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IPerformedWork } from '../interfaces/performed-work.interface';
import { Currency } from 'src/common/enums/enums.common';
import { IVehicle } from 'src/modules/vehicle/interfaces/vehicle.interface';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import { ISparePart } from 'src/modules/spare-part/interfaces/spare-part.interface';
import { SparePart } from 'src/modules/spare-part/entities/spare-part.entity';

@Entity()
export class PerformedWork implements IPerformedWork {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'enum', enum: Currency, default: Currency.UAH })
  currency: Currency;

  @ManyToOne(() => Vehicle, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  vehicle: IVehicle;

  @ManyToMany(() => SparePart)
  @JoinTable()
  spareParts: ISparePart[];
}
