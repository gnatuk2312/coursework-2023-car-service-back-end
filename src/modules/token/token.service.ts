import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

import { ITokenService } from './interfaces/token-service.interface';
import { GenerateTokenDTO } from './dto/generate-token.dto';

@Injectable()
export class TokenService implements ITokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(dto: GenerateTokenDTO, options?: JwtSignOptions): string {
    return this.jwtService.sign(dto, options);
  }
}
