import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { IPerformedWorkService } from './interfaces/performed-work-service.inteface';
import { CreatePerformedWorkDTO } from './dto/create-performed-work.dto';
import { IPerformedWork } from './interfaces/performed-work.interface';
import { PerformedWorkRepository } from './performed-work.repository';
import { IPerformedWorkRepository } from './interfaces/performed-work-repository.inteface';
import { VehicleService } from '../vehicle/vehicle.service';
import { IVehicleService } from '../vehicle/interfaces/vehicle-service.interface';
import { PerformedWork } from './entities/performed-work.entity';
import { SparePartService } from '../spare-part/spare-part.service';
import { ISparePartService } from '../spare-part/interfaces/spare-part-service.interface';

@Injectable()
export class PerformedWorkService implements IPerformedWorkService {
  constructor(
    @Inject(PerformedWorkRepository)
    private readonly performedWorkRepository: IPerformedWorkRepository,
    @Inject(VehicleService)
    private readonly vehicleService: IVehicleService,
    @Inject(SparePartService)
    private readonly sparePartService: ISparePartService,
  ) {}

  public async create(dto: CreatePerformedWorkDTO): Promise<IPerformedWork> {
    const { title, description, price, currency, vehicleId, sparePartIds } =
      dto;

    const vehicle = await this.vehicleService.getById(vehicleId);
    const spareParts = await this.sparePartService.getByIds(sparePartIds);

    const performedWork = new PerformedWork();

    performedWork.title = title;
    performedWork.description = description;
    performedWork.price = price;
    performedWork.currency = currency;
    performedWork.vehicle = vehicle;
    performedWork.spareParts = spareParts;

    return await this.performedWorkRepository.create(performedWork);
  }

  public async getById(id: string): Promise<IPerformedWork> {
    const performedWork = await this.performedWorkRepository.getById(id);

    if (!performedWork) {
      throw new NotFoundException({
        message: 'There is no performed work with this id',
      });
    }

    return performedWork;
  }

  public async getByVehicleId(vehicleId: string): Promise<IPerformedWork[]> {
    return await this.performedWorkRepository.getByVehicleId(vehicleId);
  }
}
