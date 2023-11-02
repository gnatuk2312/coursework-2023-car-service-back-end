import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { IVehicle } from './vehicle.interface';
import { CreateVehicleDTO } from '../dto/create-vehicle.dto';
import { UpdateVehicleDTO } from '../dto/update-vehicle.dto';
import { GetAllVehiclesQueryParamsDTO } from '../dto/get-all-vehicles-query-params.dto';

export interface IVehicleService {
  create(dto: CreateVehicleDTO): Promise<IVehicle>;
  update(id: string, dto: UpdateVehicleDTO): Promise<IVehicle>;
  getById(id: string): Promise<IVehicle>;
  getByOwnerId(ownerId: string): Promise<IVehicle[]>;
  getAll(
    queryParams: GetAllVehiclesQueryParamsDTO,
  ): Promise<PaginatedData<IVehicle>>;
}
