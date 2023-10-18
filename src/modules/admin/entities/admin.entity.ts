import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IAdmin } from '../interfaces/admin.interface';

@Entity()
export class Admin implements IAdmin {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
