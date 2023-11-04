import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ISparePartRepository } from './interfaces/spare-part-repository.interface';
import { PaginatedData } from 'src/common/interfaces/interfaces.common';
import { GetAllSparePartsQueryParamsDTO } from './dto/get-all-spare-parts-query-params.dto';
import { ISparePart } from './interfaces/spare-part.interface';
import { SparePart } from './entities/spare-part.entity';
import { SortDirection } from 'src/common/enums/enums.common';

@Injectable()
export class SparePartRepository implements ISparePartRepository {
  constructor(
    @InjectRepository(SparePart)
    private readonly sparePartRepository: Repository<ISparePart>,
  ) {}

  public async create(entity: ISparePart): Promise<ISparePart> {
    return await this.sparePartRepository.save(entity);
  }

  public async getById(id: string): Promise<ISparePart> {
    return await this.sparePartRepository.findOne({ where: { id } });
  }

  public async getAll(
    queryParams: GetAllSparePartsQueryParamsDTO,
  ): Promise<PaginatedData<ISparePart>> {
    const {
      skip = 0,
      take = 30,
      sortBy = 'createdAt',
      sortDirection = SortDirection.DESC,
      search = '',
    } = queryParams;

    const [data, count] = await this.sparePartRepository
      .createQueryBuilder('spare_part')
      .where((queryBuilder) => {
        if (Boolean(search)) {
          queryBuilder.where(
            "CONCAT(spare_part.title, ' ', spare_part.brand) ILIKE :search",
            { search: `%${search}%` },
          );
        }
      })
      .orderBy(`spare_part.${sortBy}`, sortDirection)
      .skip(skip)
      .take(take)
      .getManyAndCount();

    return { data, totalFiltered: data.length, total: count };
  }
}
