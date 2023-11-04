import { CreatePerformedWorkDTO } from '../dto/create-performed-work.dto';
import { IPerformedWork } from './performed-work.interface';

export interface IPerformedWorkService {
  create(dto: CreatePerformedWorkDTO): Promise<IPerformedWork>;
  getById(id: string): Promise<IPerformedWork>;
  getByVehicleId(vehicleId: string): Promise<IPerformedWork[]>;
}
