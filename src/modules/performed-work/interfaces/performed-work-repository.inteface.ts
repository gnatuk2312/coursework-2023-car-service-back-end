import { IPerformedWork } from './performed-work.interface';

export interface IPerformedWorkRepository {
  create(entity: IPerformedWork): Promise<IPerformedWork>;
  getById(id: string): Promise<IPerformedWork>;
  getByVehicleId(vehicleId: string): Promise<IPerformedWork[]>;
}
