import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientRepository } from './client.repository';
import { AuthModule } from 'src/auth/auth.module';
import { Client } from './entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), AuthModule],
  providers: [ClientService, ClientRepository],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule {}
