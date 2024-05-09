import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionUsersModule } from './transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TransactionUsersModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"root",
    database:"money_tracker",
    autoLoadEntities:true,
    synchronize:true
  }), CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
