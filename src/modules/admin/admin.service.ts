import { Inject, Injectable } from '@nestjs/common';

import { AdminRepository } from './admin.repository';
import { IAdminService } from './interfaces/admin-service.interface';
import { IAdminRepository } from './interfaces/admin-repository.interface';
import { IAdmin } from './interfaces/admin.interface';

@Injectable()
export class AdminService implements IAdminService {
  constructor(
    @Inject(AdminRepository)
    private readonly adminRepository: IAdminRepository,
  ) {}

  public async getAll(): Promise<IAdmin[]> {
    return await this.adminRepository.getAll();
  }
}
