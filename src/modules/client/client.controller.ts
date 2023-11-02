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

import { ClientService } from './client.service';
import { GetAllClientsQueryParamsDTO } from './dto/get-all-clients-query-params.dto';
import { CreateClientDTO } from './dto/create-client.dto';
import { IClientService } from './interfaces/client-service.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateClientDTO } from './dto/update-client.dto';

@UseGuards(JwtAuthGuard)
@Controller('clients')
export class ClientController {
  constructor(
    @Inject(ClientService) private readonly clientService: IClientService,
  ) {}

  @Post()
  public async create(@Body() dto: CreateClientDTO) {
    return await this.clientService.create(dto);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateClientDTO) {
    return await this.clientService.update(id, dto);
  }

  @Get(':id')
  public async getById(@Param('id') id: string) {
    return await this.clientService.getById(id);
  }

  @Get()
  public async getAll(@Query() queryParams: GetAllClientsQueryParamsDTO) {
    return await this.clientService.getAll(queryParams);
  }
}
