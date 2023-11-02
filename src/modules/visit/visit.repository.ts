import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IVisitRepository } from './interfaces/visit-repository.interface';
import { Visit } from './entities/visit.entity';
import { IVisit } from './interfaces/visit.interface';

@Injectable()
export class VisitRepository implements IVisitRepository {
  constructor(
    @InjectRepository(Visit)
    private readonly visitRepository: Repository<IVisit>,
  ) {}

  public async create(entity: IVisit): Promise<IVisit> {
    return await this.visitRepository.save(entity);
  }

  public async getAll(): Promise<IVisit[]> {
    return await this.visitRepository.find({ relations: ['client'] });
  }
}
