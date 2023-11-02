import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { VehicleService } from './vehicle.service';
import { IVehicleService } from './interfaces/vehicle-service.interface';
import { CreateVehicleDTO } from './dto/create-vehicle.dto';
import { UpdateVehicleDTO } from './dto/update-vehicle.dto';
import { GetAllVehiclesQueryParamsDTO } from './dto/get-all-vehicles-query-params.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('vehicles')
export class VehicleController {
  constructor(
    @Inject(VehicleService) private readonly vehicleService: IVehicleService,
  ) {}

  @Post()
  public async create(@Body() dto: CreateVehicleDTO) {
    return await this.vehicleService.create(dto);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateVehicleDTO) {
    return await this.vehicleService.update(id, dto);
  }

  @Get('/owner/:ownerId')
  public async getByOwnerId(@Param('ownerId') ownerId: string) {
    return await this.vehicleService.getByOwnerId(ownerId);
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return await this.vehicleService.getById(id);
  }

  @Get()
  public async getAll(@Query() queryParams: GetAllVehiclesQueryParamsDTO) {
    return await this.vehicleService.getAll(queryParams);
  }
}
