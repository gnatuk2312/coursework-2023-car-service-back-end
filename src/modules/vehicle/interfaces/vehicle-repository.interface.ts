import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { IVehicle } from './vehicle.interface';
import { GetAllVehiclesQueryParamsDTO } from '../dto/get-all-vehicles-query-params.dto';

export interface IVehicleRepository {
  create(entity: IVehicle): Promise<IVehicle>;
  update(entity: IVehicle): Promise<IVehicle>;
  getById(id: string): Promise<IVehicle>;
  getByOwnerId(ownerId: string): Promise<IVehicle[]>;
  getAll(
    queryParams: GetAllVehiclesQueryParamsDTO,
  ): Promise<PaginatedData<IVehicle>>;
}
