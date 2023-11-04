import { Currency } from 'src/common/enums/enums.common';
import { IVehicle } from 'src/modules/vehicle/interfaces/vehicle.interface';

export interface IPerformedWork {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  price: number;
  currency: Currency;
  vehicle: IVehicle;
}
