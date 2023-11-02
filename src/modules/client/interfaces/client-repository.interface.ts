import { IClient } from './client.interface';
import { GetAllClientsQueryParamsDTO } from '../dto/get-all-clients-query-params.dto';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';

export interface IClientRepository {
  create(entity: IClient): Promise<IClient>;
  update(entity: IClient): Promise<IClient>;
  getById(id: string): Promise<IClient>;
  getAll(
    queryParams: GetAllClientsQueryParamsDTO,
  ): Promise<PaginatedData<IClient>>;
}
