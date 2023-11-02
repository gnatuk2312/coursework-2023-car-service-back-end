import { IClient } from 'src/modules/client/interfaces/client.interface';

export interface IVisit {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date;
  time: string;
  description: string;
  phone: string | null;
  client: IClient | null;
}
