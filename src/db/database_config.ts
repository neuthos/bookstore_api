import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { join } from 'path';

const dbConfig = (): PostgresConnectionOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  logger: 'debug',
  logging: ['log', 'error', 'query'],
  migrations: [join(__dirname, '../db/migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: join(__dirname, '../db/migrations'),
    entitiesDir: join(__dirname, '../**/*.entity{.ts,.js}'),
  },
  logNotifications: true,
});

export default dbConfig();
