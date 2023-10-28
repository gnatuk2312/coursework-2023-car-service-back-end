import { JwtSignOptions } from '@nestjs/jwt';

import { IAdmin } from 'src/modules/admin/interfaces/admin.interface';
import { ITokenPayload } from './token-payload.interface';

export interface ITokenService {
  createPayload(admin: IAdmin): ITokenPayload;
  generateToken(payload: ITokenPayload, options?: JwtSignOptions): string;
  verifyToken(token: string, options?: JwtSignOptions): ITokenPayload;
}
