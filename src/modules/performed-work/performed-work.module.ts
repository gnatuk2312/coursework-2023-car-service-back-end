import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PerformedWorkService } from './performed-work.service';
import { PerformedWorkController } from './performed-work.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PerformedWorkRepository } from './performed-work.repository';
import { VehicleModule } from '../vehicle/vehicle.module';
import { PerformedWork } from './entities/performed-work.entity';
import { SparePartModule } from '../spare-part/spare-part.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerformedWork]),
    VehicleModule,
    SparePartModule,
    AuthModule,
  ],
  providers: [PerformedWorkService, PerformedWorkRepository],
  controllers: [PerformedWorkController],
  exports: [PerformedWorkService],
})
export class PerformedWorkModule {}
