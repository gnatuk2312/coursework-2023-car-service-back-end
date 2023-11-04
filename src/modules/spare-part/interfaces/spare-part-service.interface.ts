import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { ISparePart } from './spare-part.interface';
import { CreateSparePartDTO } from '../dto/create-spare-part.dto';
import { GetAllSparePartsQueryParamsDTO } from '../dto/get-all-spare-parts-query-params.dto';

export interface ISparePartService {
  create(dto: CreateSparePartDTO): Promise<ISparePart>;
  getById(id: string): Promise<ISparePart>;
  getByIds(ids: string[]): Promise<ISparePart[]>;
  getAll(
    queryParams: GetAllSparePartsQueryParamsDTO,
  ): Promise<PaginatedData<ISparePart>>;
}
