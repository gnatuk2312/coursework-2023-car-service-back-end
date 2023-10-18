import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Admin } from './entities/admin.entity';
import { AdminService } from './admin.service';
import { AdminRepository } from './admin.repository';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminService, AdminRepository],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
