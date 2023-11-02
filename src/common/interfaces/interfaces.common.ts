export interface PaginatedData<T> {
  data: T[];
  totalFiltered: number;
  total: number;
}
