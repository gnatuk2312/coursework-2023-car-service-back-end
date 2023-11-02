import { Inject, Injectable } from '@nestjs/common';

import { IVisitService } from './interfaces/visit-service.interface';
import { VisitRepository } from './visit.repository';
import { IVisitRepository } from './interfaces/visit-repository.interface';
import { CreateVisitDTO } from './dto/create-visit.dto';
import { IVisit } from './interfaces/visit.interface';
import { ClientService } from '../client/client.service';
import { IClientService } from '../client/interfaces/client-service.interface';
import { Visit } from './entities/visit.entity';
import { IClient } from '../client/interfaces/client.interface';

@Injectable()
export class VisitService implements IVisitService {
  constructor(
    @Inject(VisitRepository) private readonly visitRepository: IVisitRepository,
    @Inject(ClientService) private readonly clientService: IClientService,
  ) {}

  public async create(dto: CreateVisitDTO): Promise<IVisit> {
    const { date, time, description, phone, clientId } = dto;

    let client: IClient = null;
    if (clientId) client = await this.clientService.getById(clientId);

    const visit = new Visit();

    visit.date = date;
    visit.time = time;
    visit.description = description;
    visit.phone = phone;
    visit.client = client;

    return await this.visitRepository.create(visit);
  }

  public async getAll(): Promise<IVisit[]> {
    return await this.visitRepository.getAll();
  }
}
