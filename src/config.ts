import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'nest_micro_auth',
  username: 'postgres',
  password: '10091986',
  entities: ['dist/**/*.entity.{ts,js}'],
  synchronize: false, // never true in production!
  migrations: ['dist/src/db/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/db/migrations',
  // },
};
