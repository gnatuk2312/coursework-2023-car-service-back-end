import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';

import { AdminService } from './admin.service';
import { IAdminService } from './interfaces/admin-service.interface';
import { CreateAdminDTO } from './dto/create-admin.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('admin')
export class AdminController {
  constructor(
    @Inject(AdminService)
    private readonly adminService: IAdminService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  public async create(@Body() dto: CreateAdminDTO) {
    return await this.adminService.create(dto);
  }
}
