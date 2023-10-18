import { Controller, Get, Inject } from '@nestjs/common';

import { AdminService } from './admin.service';
import { IAdminService } from './interfaces/admin-service.interface';
import { IAdmin } from './interfaces/admin.interface';

@Controller('admin')
export class AdminController {
  constructor(
    @Inject(AdminService)
    private readonly adminService: IAdminService,
  ) {}

  @Get()
  public async getAll(): Promise<IAdmin[]> {
    return await this.adminService.getAll();
  }
}
