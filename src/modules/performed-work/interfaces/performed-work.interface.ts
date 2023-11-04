import { Currency } from 'src/common/enums/enums.common';
import { ISparePart } from 'src/modules/spare-part/interfaces/spare-part.interface';
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
  spareParts: ISparePart[];
}
