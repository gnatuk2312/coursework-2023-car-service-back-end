import { IVisit } from './visit.interface';

export interface IVisitRepository {
  create(entity: IVisit): Promise<IVisit>;
  getAll(): Promise<IVisit[]>;
}
