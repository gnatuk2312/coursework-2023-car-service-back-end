import { IAdmin } from 'src/modules/admin/interfaces/admin.interface';

export interface IToken {
  id: string;
  value: string;
  user: IAdmin;
}
