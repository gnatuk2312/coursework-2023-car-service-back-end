import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IPerformedWorkRepository } from './interfaces/performed-work-repository.inteface';
import { IPerformedWork } from './interfaces/performed-work.interface';
import { PerformedWork } from './entities/performed-work.entity';

@Injectable()
export class PerformedWorkRepository implements IPerformedWorkRepository {
  constructor(
    @InjectRepository(PerformedWork)
    private readonly performedWorkRepository: Repository<IPerformedWork>,
  ) {}

  public async create(entity: IPerformedWork): Promise<IPerformedWork> {
    return await this.performedWorkRepository.save(entity);
  }

  public async getById(id: string): Promise<IPerformedWork> {
    return await this.performedWorkRepository.findOne({
      where: { id },
      relations: ['vehicle', 'spareParts'],
    });
  }

  public async getByVehicleId(vehicleId: string): Promise<IPerformedWork[]> {
    return await this.performedWorkRepository.find({
      where: { vehicle: { id: vehicleId } },
    });
  }
}
