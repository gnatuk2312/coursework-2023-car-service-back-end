import { SortDirection } from 'src/common/enums/enums.common';

export class GetAllVehiclesQueryParamsDTO {
  skip: number;
  take: number;
  sortBy: string;
  sortDirection: SortDirection;
  search: string;
}
