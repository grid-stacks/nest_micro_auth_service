import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'nest_micro_auth',
      username: 'postgres',
      password: '10091986',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // never true in production!
      // migrations: ['dist/src/db/migrations/*.js'],
      // migrationsRun: true,
      // cli: {
      //   migrationsDir: 'src/db/migrations',
      // },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
