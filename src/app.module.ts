import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormAsyncConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeormAsyncConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
