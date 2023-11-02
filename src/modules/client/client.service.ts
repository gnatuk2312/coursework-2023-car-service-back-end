import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { IClientService } from './interfaces/client-service.interface';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { CreateClientDTO } from './dto/create-client.dto';
import { GetAllClientsQueryParamsDTO } from './dto/get-all-clients-query-params.dto';
import { IClient } from './interfaces/client.interface';
import { Client } from './entities/client.entity';
import { ClientRepository } from './client.repository';
import { IClientRepository } from './interfaces/client-repository.interface';
import { UpdateClientDTO } from './dto/update-client.dto';

@Injectable()
export class ClientService implements IClientService {
  constructor(
    @Inject(ClientRepository)
    private readonly clientRepository: IClientRepository,
  ) {}

  public async create(dto: CreateClientDTO): Promise<IClient> {
    const { firstName, lastName, about, email, phone } = dto;

    const client = new Client();

    client.firstName = firstName;
    client.lastName = lastName;
    client.about = about;
    client.email = email;
    client.phone = phone;

    return await this.clientRepository.create(client);
  }

  public async update(id: string, dto: UpdateClientDTO): Promise<IClient> {
    const { firstName, lastName, about, email, phone } = dto;

    const client = await this.clientRepository.getById(id);

    client.firstName = firstName;
    client.lastName = lastName;
    client.about = about;
    client.email = email;
    client.phone = phone;

    return await this.clientRepository.update(client);
  }

  public async getById(id: string): Promise<IClient> {
    const client = await this.clientRepository.getById(id);

    if (!client) {
      throw new BadRequestException({
        message: 'There is no client with this id',
      });
    }

    return client;
  }

  public async getAll(
    queryParams: GetAllClientsQueryParamsDTO,
  ): Promise<PaginatedData<IClient>> {
    return await this.clientRepository.getAll(queryParams);
  }
}
