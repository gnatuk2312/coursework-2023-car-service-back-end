import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VisitService } from './visit.service';
import { VisitController } from './visit.controller';
import { VisitRepository } from './visit.repository';
import { AuthModule } from 'src/auth/auth.module';
import { ClientModule } from '../client/client.module';
import { Visit } from './entities/visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Visit]), ClientModule, AuthModule],
  providers: [VisitService, VisitRepository],
  controllers: [VisitController],
  exports: [VisitService],
})
export class VisitModule {}
