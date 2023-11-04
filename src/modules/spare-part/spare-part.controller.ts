import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { SparePartService } from './spare-part.service';
import { ISparePartService } from './interfaces/spare-part-service.interface';
import { CreateSparePartDTO } from './dto/create-spare-part.dto';
import { GetAllSparePartsQueryParamsDTO } from './dto/get-all-spare-parts-query-params.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('spare-parts')
export class SparePartController {
  constructor(
    @Inject(SparePartService)
    private readonly sparePartService: ISparePartService,
  ) {}

  @Post()
  public async create(@Body() dto: CreateSparePartDTO) {
    return await this.sparePartService.create(dto);
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return await this.sparePartService.getById(id);
  }

  @Get()
  public async getAll(@Query() queryParams: GetAllSparePartsQueryParamsDTO) {
    return await this.sparePartService.getAll(queryParams);
  }
}
