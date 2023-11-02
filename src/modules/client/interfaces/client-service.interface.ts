import { IClient } from './client.interface';
import { CreateClientDTO } from '../dto/create-client.dto';
import { GetAllClientsQueryParamsDTO } from '../dto/get-all-clients-query-params.dto';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { UpdateClientDTO } from '../dto/update-client.dto';

export interface IClientService {
  create(dto: CreateClientDTO): Promise<IClient>;
  update(id: string, dto: UpdateClientDTO): Promise<IClient>;
  getById(id: string): Promise<IClient>;
  getAll(
    queryParams: GetAllClientsQueryParamsDTO,
  ): Promise<PaginatedData<IClient>>;
}
