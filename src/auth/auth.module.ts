import { Module, forwardRef } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/modules/admin/admin.module';
import { TokenModule } from 'src/modules/token/token.module';

@Module({
  imports: [forwardRef(() => AdminModule), forwardRef(() => TokenModule)],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [TokenModule],
})
export class AuthModule {}
