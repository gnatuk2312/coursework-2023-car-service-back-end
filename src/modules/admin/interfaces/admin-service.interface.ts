import { IAdmin } from './admin.interface';
import { CreateAdminDTO } from '../dto/create-admin.dto';

export interface IAdminService {
  create(dto: CreateAdminDTO): Promise<IAdmin>;
  getById(id: string): Promise<IAdmin>;
  getByEmail(email: string): Promise<IAdmin>;
}
