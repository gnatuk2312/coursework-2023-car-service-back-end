import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { TokenService } from 'src/modules/token/token.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly tokenService: TokenService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const [bearer, token] = request.headers.authorization.split(' ');

      if (bearer !== 'Bearer' || !token) throw new UnauthorizedException();

      const payload = this.tokenService.verifyToken(token);
      request.admin = payload;

      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
