import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config';

export class AppConfig {
  public static getInitConifg(): ConfigModuleOptions {
    return {
      isGlobal: true,
      envFilePath: ['.env'],
      validationSchema: Joi.object(<
        { [P in keyof NodeJS.ProcessEnv]: Joi.SchemaInternals }
      >{
        PORT: Joi.number().min(1).max(65535).required(),
        DB_TYPE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
      }),
    };
  }
}
