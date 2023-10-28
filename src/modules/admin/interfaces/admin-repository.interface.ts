import { IAdmin } from './admin.interface';

export interface IAdminRepository {
  create(entity: IAdmin): Promise<IAdmin>;
  getById(id: string): Promise<IAdmin>;
  getByEmail(email: string): Promise<IAdmin>;
}
