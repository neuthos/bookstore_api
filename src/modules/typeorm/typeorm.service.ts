import { Injectable } from '@nestjs/common';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { join } from 'path';
import type { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createTypeOrmOptions(): PostgresConnectionOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      database: this.configService.get('DB_NAME'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
      synchronize: false,
      dropSchema: false,
      migrationsRun: false,
      logging: false,
      migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
      cli: {
        migrationsDir: join(__dirname, '../migrations'),
        entitiesDir: join(__dirname, '../**/*.entity{.ts,.js}'),
      },
      ssl: true,
    };
  }
}
