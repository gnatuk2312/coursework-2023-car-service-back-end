import { IClient } from 'src/modules/client/interfaces/client.interface';

export interface IVehicle {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  brand: string;
  model: string;
  year: number;
  additionalInfo: string | null;
  licensePlate: string;
  engine: string;
  owner: IClient;
}
