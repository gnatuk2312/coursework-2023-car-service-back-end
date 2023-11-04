import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SparePartService } from './spare-part.service';
import { SparePartController } from './spare-part.controller';
import { AuthModule } from 'src/auth/auth.module';
import { SparePartRepository } from './spare-part.repository';
import { SparePart } from './entities/spare-part.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SparePart]), AuthModule],
  providers: [SparePartService, SparePartRepository],
  controllers: [SparePartController],
  exports: [SparePartService],
})
export class SparePartModule {}
