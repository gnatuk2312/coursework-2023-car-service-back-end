import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';

import { VisitService } from './visit.service';
import { IVisitService } from './interfaces/visit-service.interface';
import { CreateVisitDTO } from './dto/create-visit.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('visits')
export class VisitController {
  constructor(
    @Inject(VisitService) private readonly visitService: IVisitService,
  ) {}

  @Post()
  public async create(@Body() dto: CreateVisitDTO) {
    return await this.visitService.create(dto);
  }

  @Get()
  public async getAll() {
    return await this.visitService.getAll();
  }
}
