import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

import { ITokenService } from './interfaces/token-service.interface';
import { IAdmin } from '../admin/interfaces/admin.interface';
import { ITokenPayload } from './interfaces/token-payload.interface';

@Injectable()
export class TokenService implements ITokenService {
  constructor(private readonly jwtService: JwtService) {}

  public createPayload(admin: IAdmin): ITokenPayload {
    return { userId: admin.id, email: admin.email };
  }

  public generateToken(
    payload: ITokenPayload,
    options?: JwtSignOptions,
  ): string {
    return this.jwtService.sign(payload, options);
  }

  public verifyToken(token: string, options?: JwtSignOptions): ITokenPayload {
    return this.jwtService.verify(token, options);
  }
}
