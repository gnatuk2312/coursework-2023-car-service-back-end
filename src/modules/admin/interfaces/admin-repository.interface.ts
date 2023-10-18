import { IAdmin } from './admin.interface';

export interface IAdminRepository {
  getAll(): Promise<IAdmin[]>;
}
