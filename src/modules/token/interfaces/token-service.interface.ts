import { GenerateTokenDTO } from '../dto/generate-token.dto';

import { JwtSignOptions } from '@nestjs/jwt';

export interface ITokenService {
  generateToken(dto: GenerateTokenDTO, options?: JwtSignOptions): string;
}
