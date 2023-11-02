import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IVehicleRepository } from './interfaces/vehicle-repository.interface';
import { Vehicle } from './entities/vehicle.entity';
import { IVehicle } from './interfaces/vehicle.interface';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { GetAllVehiclesQueryParamsDTO } from './dto/get-all-vehicles-query-params.dto';
import { SortDirection } from 'src/common/enums/enums.common';

@Injectable()
export class VehicleRepository implements IVehicleRepository {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<IVehicle>,
  ) {}

  public async create(entity: IVehicle): Promise<IVehicle> {
    return await this.vehicleRepository.save(entity);
  }

  public async update(entity: IVehicle): Promise<IVehicle> {
    return await this.vehicleRepository.save(entity);
  }

  public async getById(id: string): Promise<IVehicle> {
    return await this.vehicleRepository.findOne({
      where: { id },
      relations: ['owner'],
    });
  }

  public async getByOwnerId(ownerId: string): Promise<IVehicle[]> {
    return await this.vehicleRepository.find({
      where: { owner: { id: ownerId } },
    });
  }

  public async getAll(
    queryParams: GetAllVehiclesQueryParamsDTO,
  ): Promise<PaginatedData<IVehicle>> {
    const {
      skip = 0,
      take = 30,
      sortBy = 'createdAt',
      sortDirection = SortDirection.DESC,
      search = '',
    } = queryParams;

    const [data, count] = await this.vehicleRepository
      .createQueryBuilder('vehicle')
      .where((queryBuilder) => {
        if (Boolean(search)) {
          queryBuilder.where(
            "CONCAT(vehicle.brand, ' ', vehicle.model, ' ', vehicle.year) ILIKE :search",
            { search: `%${search}%` },
          );
        }
      })
      .orderBy(`vehicle.${sortBy}`, sortDirection)
      .skip(skip)
      .take(take)
      .getManyAndCount();

    return { data, totalFiltered: data.length, total: count };
  }
}
