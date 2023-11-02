import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import typeorm from './config/typeorm';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { TokenModule } from './modules/token/token.module';
import { ClientModule } from './modules/client/client.module';
import { VisitModule } from './modules/visit/visit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    AuthModule,
    AdminModule,
    TokenModule,
    ClientModule,
    VisitModule,
  ],
})
export class AppModule {}
