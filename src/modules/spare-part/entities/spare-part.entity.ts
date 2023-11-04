import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ISparePart } from '../interfaces/spare-part.interface';
import { Currency } from 'src/common/enums/enums.common';

@Entity()
export class SparePart implements ISparePart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Column()
  title: string;

  @Column()
  brand: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'enum', enum: Currency, default: Currency.UAH })
  currency: Currency;
}
