import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin } from './entities/admin.entity';
import { IAdmin } from './interfaces/admin.interface';
import { IAdminRepository } from './interfaces/admin-repository.interface';

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  public async getAll(): Promise<IAdmin[]> {
    return await this.adminRepository.find();
  }
}
