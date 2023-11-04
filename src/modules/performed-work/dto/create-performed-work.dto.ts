import { Currency } from 'src/common/enums/enums.common';

export class CreatePerformedWorkDTO {
  title: string;
  description: string;
  price: number;
  currency: Currency;
  vehicleId: string;
}
