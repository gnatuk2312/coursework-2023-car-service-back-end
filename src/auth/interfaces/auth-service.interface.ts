import { SignInDTO } from '../dto/sign-in.dto';
import { IAuthResponse } from './auth-response.interface';

export interface IAuthService {
  signIn(dto: SignInDTO): Promise<IAuthResponse>;
}
