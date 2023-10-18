import { IAdmin } from './admin.interface';

export interface IAdminService {
  getAll(): Promise<IAdmin[]>;
}
