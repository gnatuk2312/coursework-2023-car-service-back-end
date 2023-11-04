import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

import { CreateAdminTable1698498752886 } from '../migrations/1698498752886-create-admin-table';
import { CreateTokenTable1698501251052 } from '../migrations/1698501251052-create-token-table';
import { CreateClientTable1698927279477 } from '../migrations/1698927279477-create-client-table';
import { CreateVisitTable1698930001706 } from '../migrations/1698930001706-create-visit-table';
import { CreateVehicleTable1698933569419 } from '../migrations/1698933569419-create-vehicle-table';
import { CreatePerformedWorkTable1699103227923 } from '../migrations/1699103227923-create-performed-work-table';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: `${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: [
    CreateAdminTable1698498752886,
    CreateTokenTable1698501251052,
    CreateClientTable1698927279477,
    CreateVisitTable1698930001706,
    CreateVehicleTable1698933569419,
    CreatePerformedWorkTable1699103227923,
  ],
  // migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
