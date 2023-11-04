import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { PerformedWorkService } from './performed-work.service';
import { IPerformedWorkService } from './interfaces/performed-work-service.inteface';
import { CreatePerformedWorkDTO } from './dto/create-performed-work.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('performed-works')
export class PerformedWorkController {
  constructor(
    @Inject(PerformedWorkService)
    private readonly performedWorkService: IPerformedWorkService,
  ) {}

  @Post()
  public async create(@Body() dto: CreatePerformedWorkDTO) {
    return await this.performedWorkService.create(dto);
  }

  @Get('/vehicle/:vehicleId')
  public async getByVehicleId(@Param('vehicleId') vehicleId: string) {
    return await this.performedWorkService.getByVehicleId(vehicleId);
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return await this.performedWorkService.getById(id);
  }
}
