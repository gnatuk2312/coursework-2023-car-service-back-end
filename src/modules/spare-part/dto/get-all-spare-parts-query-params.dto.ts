import { SortDirection } from 'src/common/enums/enums.common';

export class GetAllSparePartsQueryParamsDTO {
  skip: number;
  take: number;
  sortBy: string;
  sortDirection: SortDirection;
  search: string;
}
