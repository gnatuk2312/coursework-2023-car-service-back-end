import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { AdminRepository } from './admin.repository';
import { IAdminService } from './interfaces/admin-service.interface';
import { IAdminRepository } from './interfaces/admin-repository.interface';
import { IAdmin } from './interfaces/admin.interface';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService implements IAdminService {
  constructor(
    @Inject(AdminRepository)
    private readonly adminRepository: IAdminRepository,
  ) {}

  public async create(dto: CreateAdminDTO): Promise<IAdmin> {
    const { email, password } = dto;

    if (await this.getByEmail(email)) {
      throw new BadRequestException({ message: 'Email is already in use' });
    }

    const admin = new Admin();

    admin.email = email;
    admin.password = await bcrypt.hash(password, 5);

    return await this.adminRepository.create(admin);
  }

  public async getById(id: string): Promise<IAdmin> {
    return await this.adminRepository.getById(id);
  }

  public async getByEmail(email: string): Promise<IAdmin> {
    return await this.adminRepository.getByEmail(email);
  }
}
