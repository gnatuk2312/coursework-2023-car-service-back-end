import { Controller, Inject } from '@nestjs/common';

import { AdminService } from './admin.service';
import { IAdminService } from './interfaces/admin-service.interface';

@Controller('admin')
export class AdminController {
  constructor(
    @Inject(AdminService)
    private readonly adminService: IAdminService,
  ) {}
}
