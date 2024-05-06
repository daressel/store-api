import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';

import { EnvVariables, ConfigServiceNames } from '../constants';
import { join } from 'path';

dotenvConfig({ path: '.env' });

const config: DataSourceOptions = {
  type: 'postgres',
  host: `${process.env[EnvVariables.dbHost]}`,
  port: Number(process.env[EnvVariables.dbPort]) || 5432,
  username: `${process.env[EnvVariables.dbUser]}`,
  password: `${process.env[EnvVariables.dbPassword]}`,
  database: `${process.env[EnvVariables.dbName]}`,
  entities: [join(__dirname, '../**/**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, '../migrations/*')],
  synchronize: false,
};

export default registerAs(ConfigServiceNames.typeorm, () => config);
export const connectionSource = new DataSource(config);
