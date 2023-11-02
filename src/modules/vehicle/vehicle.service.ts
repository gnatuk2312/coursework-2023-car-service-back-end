import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { IVehicleService } from './interfaces/vehicle-service.interface';
import { VehicleRepository } from './vehicle.repository';
import { IVehicleRepository } from './interfaces/vehicle-repository.interface';
import { ClientService } from '../client/client.service';
import { IClientService } from '../client/interfaces/client-service.interface';
import { CreateVehicleDTO } from './dto/create-vehicle.dto';
import { IVehicle } from './interfaces/vehicle.interface';
import { Vehicle } from './entities/vehicle.entity';
import { UpdateVehicleDTO } from './dto/update-vehicle.dto';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { GetAllVehiclesQueryParamsDTO } from './dto/get-all-vehicles-query-params.dto';

@Injectable()
export class VehicleService implements IVehicleService {
  constructor(
    @Inject(VehicleRepository)
    private readonly vehicleRepository: IVehicleRepository,
    @Inject(ClientService) private readonly clientService: IClientService,
  ) {}

  public async create(dto: CreateVehicleDTO): Promise<IVehicle> {
    const {
      brand,
      model,
      year,
      additionalInfo,
      licensePlate,
      engine,
      ownerId,
    } = dto;

    const owner = await this.clientService.getById(ownerId);

    const vehicle = new Vehicle();

    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.year = year;
    vehicle.additionalInfo = additionalInfo;
    vehicle.licensePlate = licensePlate;
    vehicle.engine = engine;
    vehicle.owner = owner;

    return await this.vehicleRepository.create(vehicle);
  }

  public async update(id: string, dto: UpdateVehicleDTO): Promise<IVehicle> {
    const {
      brand,
      model,
      year,
      additionalInfo,
      licensePlate,
      engine,
      ownerId,
    } = dto;

    const vehicle = await this.getById(id);

    const owner = await this.clientService.getById(ownerId);

    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.year = year;
    vehicle.additionalInfo = additionalInfo;
    vehicle.licensePlate = licensePlate;
    vehicle.engine = engine;
    vehicle.owner = owner;

    return await this.vehicleRepository.update(vehicle);
  }

  public async getById(id: string): Promise<IVehicle> {
    const vehicle = await this.vehicleRepository.getById(id);

    if (!vehicle) {
      throw new NotFoundException({
        message: 'There is no vehicle with this id',
      });
    }

    return vehicle;
  }

  public async getByOwnerId(ownerId: string): Promise<IVehicle[]> {
    return await this.vehicleRepository.getByOwnerId(ownerId);
  }

  public async getAll(
    queryParams: GetAllVehiclesQueryParamsDTO,
  ): Promise<PaginatedData<IVehicle>> {
    return await this.vehicleRepository.getAll(queryParams);
  }
}
