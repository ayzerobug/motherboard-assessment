import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/base_modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AppModule } from './modules/base_modules/app/app.module';
import { User } from './modules/core_modules/user/entities';
import { AppExceptionsFilter } from './common/exceptions/exception.filter';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432, //parseInt(process.env.DB_PORT, 10),
      username: 'postgres', // process.env.DB_USERNAME,
      password: 'keycode123', //process.env.DB_PASSWORD,
      database: 'forra', //process.env.DB_DATABASE,
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    AppModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_FILTER,
      useClass: AppExceptionsFilter,
    },
  ],
})
export class MainModule { }
