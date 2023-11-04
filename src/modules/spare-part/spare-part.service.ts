import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { ISparePartService } from './interfaces/spare-part-service.interface';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { CreateSparePartDTO } from './dto/create-spare-part.dto';
import { GetAllSparePartsQueryParamsDTO } from './dto/get-all-spare-parts-query-params.dto';
import { ISparePart } from './interfaces/spare-part.interface';
import { SparePartRepository } from './spare-part.repository';
import { ISparePartRepository } from './interfaces/spare-part-repository.interface';
import { SparePart } from './entities/spare-part.entity';

@Injectable()
export class SparePartService implements ISparePartService {
  constructor(
    @Inject(SparePartRepository)
    private readonly sparePartRepository: ISparePartRepository,
  ) {}

  public async create(dto: CreateSparePartDTO): Promise<ISparePart> {
    const { title, brand, price, currency } = dto;

    const sparePart = new SparePart();

    sparePart.title = title;
    sparePart.brand = brand;
    sparePart.price = price;
    sparePart.currency = currency;

    return await this.sparePartRepository.create(sparePart);
  }

  public async getById(id: string): Promise<ISparePart> {
    const sparePart = await this.sparePartRepository.getById(id);

    if (!sparePart) {
      throw new NotFoundException({
        message: 'There is no spare part with this id',
      });
    }

    return sparePart;
  }

  public async getByIds(ids: string[]): Promise<ISparePart[]> {
    const spareParts = await this.sparePartRepository.getByIds(ids);

    if (spareParts.length === 0) {
      throw new NotFoundException({
        message: 'There are no spare parts with these ids',
      });
    }

    return spareParts;
  }

  public async getAll(
    queryParams: GetAllSparePartsQueryParamsDTO,
  ): Promise<PaginatedData<ISparePart>> {
    return await this.sparePartRepository.getAll(queryParams);
  }
}
