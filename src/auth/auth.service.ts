import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { IAuthService } from './interfaces/auth-service.interface';
import { AdminService } from 'src/modules/admin/admin.service';
import { TokenService } from 'src/modules/token/token.service';
import { SignInDTO } from './dto/sign-in.dto';
import { IAuthResponse } from './interfaces/auth-response.interface';
import { IAdmin } from 'src/modules/admin/interfaces/admin.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly tokenService: TokenService,
  ) {}

  public async signIn(dto: SignInDTO): Promise<IAuthResponse> {
    const { email, password } = dto;

    const admin = await this.validateAdmin(email, password);

    const payload = this.tokenService.createPayload(admin);
    const accessToken = this.tokenService.generateToken(payload, {
      expiresIn: '1d',
    });

    return { accessToken };
  }

  private async validateAdmin(
    email: string,
    password: string,
  ): Promise<IAdmin> {
    const admin = await this.adminService.getByEmail(email);

    if (admin) {
      const passwordEquals = await bcrypt.compare(password, admin.password);
      if (passwordEquals) return admin;
    }

    throw new UnauthorizedException();
  }
}
