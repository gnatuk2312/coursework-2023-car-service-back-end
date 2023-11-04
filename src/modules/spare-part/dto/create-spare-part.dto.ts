import { Currency } from 'src/common/enums/enums.common';

export class CreateSparePartDTO {
  title: string;
  brand: string;
  price: number;
  currency: Currency;
}
