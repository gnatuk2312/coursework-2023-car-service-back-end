import { CreateVisitDTO } from '../dto/create-visit.dto';
import { IVisit } from './visit.interface';

export interface IVisitService {
  create(dto: CreateVisitDTO): Promise<IVisit>;
  getAll(): Promise<IVisit[]>;
}
