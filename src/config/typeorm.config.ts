import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

type NewTypeOrmModuleOptions = TypeOrmModuleOptions & {
  cli: {
    migrationsDir: string;
  };
};

export const typeormAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<NewTypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'nest_micro_auth',
      username: 'postgres',
      password: '10091986',
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: false, // never true in production!
      logging: true,
      migrations: [__dirname + '/../migrations/*.{js,ts}'],
      //   migrationsRun: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
  },
};

export const typeormConfig = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'nest_micro_auth',
  username: 'postgres',
  password: '10091986',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: false, // never true in production!
  logging: true,
  migrations: [__dirname + '/../migrations/*.{js,ts}'],
  //   migrationsRun: true,
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
});
