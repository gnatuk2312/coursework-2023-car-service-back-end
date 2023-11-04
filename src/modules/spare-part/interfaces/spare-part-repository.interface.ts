import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { ISparePart } from './spare-part.interface';
import { GetAllSparePartsQueryParamsDTO } from '../dto/get-all-spare-parts-query-params.dto';

export interface ISparePartRepository {
  create(entity: ISparePart): Promise<ISparePart>;
  getById(id: string): Promise<ISparePart>;
  getAll(
    queryParams: GetAllSparePartsQueryParamsDTO,
  ): Promise<PaginatedData<ISparePart>>;
}
