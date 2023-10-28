import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { IAuthResponse } from './interfaces/auth-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  public async signIn(@Body() dto: SignInDTO): Promise<IAuthResponse> {
    return await this.authService.signIn(dto);
  }
}
