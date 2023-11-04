import { Currency } from 'src/common/enums/enums.common';

export interface ISparePart {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  brand: string;
  price: number;
  currency: Currency;
}
