import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { AuthModule } from 'src/auth/auth.module';
import { ClientModule } from '../client/client.module';
import { VehicleRepository } from './vehicle.repository';
import { Vehicle } from './entities/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]), ClientModule, AuthModule],
  providers: [VehicleService, VehicleRepository],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}
