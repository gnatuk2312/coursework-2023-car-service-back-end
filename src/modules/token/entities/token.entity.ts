import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IToken } from '../interfaces/token.interface';
import { IAdmin } from 'src/modules/admin/interfaces/admin.interface';
import { Admin } from 'src/modules/admin/entities/admin.entity';

@Entity()
export class Token implements IToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @OneToOne(() => Admin, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  user: IAdmin;
}
