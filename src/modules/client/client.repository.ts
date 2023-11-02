import { Injectable } from '@nestjs/common';

import { IClientRepository } from './interfaces/client-repository.interface';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { GetAllClientsQueryParamsDTO } from './dto/get-all-clients-query-params.dto';
import { IClient } from './interfaces/client.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { SortDirection } from 'src/common/enums/enums.common';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<IClient>,
  ) {}

  public async create(entity: IClient): Promise<IClient> {
    return await this.clientRepository.save(entity);
  }

  public async update(entity: IClient): Promise<IClient> {
    return await this.clientRepository.save(entity);
  }

  public async getById(id: string): Promise<IClient> {
    return await this.clientRepository.findOne({ where: { id } });
  }

  public async getAll(
    queryParams: GetAllClientsQueryParamsDTO,
  ): Promise<PaginatedData<IClient>> {
    const {
      skip = 0,
      take = 30,
      sortBy = 'createdAt',
      sortDirection = SortDirection.DESC,
      search = '',
    } = queryParams;

    const [data, count] = await this.clientRepository
      .createQueryBuilder('client')
      .where((queryBuilder) => {
        if (Boolean(search)) {
          queryBuilder.where(
            "CONCAT(client.firstName, ' ', client.lastName) ILIKE :search",
            { search: `%${search}%` },
          );
        }
      })
      .orderBy(`client.${sortBy}`, sortDirection)
      .skip(skip)
      .take(take)
      .getManyAndCount();

    return { data, totalFiltered: data.length, total: count };
  }
}
