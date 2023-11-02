import { SortDirection } from 'src/common/enums/enums.common';

export class GetAllClientsQueryParamsDTO {
  skip: number;
  take: number;
  sortBy: string;
  sortDirection: SortDirection;
  search: string;
}
