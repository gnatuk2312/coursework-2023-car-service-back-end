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

  public async create(entity: IAdmin): Promise<IAdmin> {
    return await this.adminRepository.save(entity);
  }

  public async getById(id: string): Promise<IAdmin> {
    return await this.adminRepository.findOne({ where: { id } });
  }

  public async getByEmail(email: string): Promise<IAdmin> {
    return await this.adminRepository.findOne({ where: { email } });
  }
}
