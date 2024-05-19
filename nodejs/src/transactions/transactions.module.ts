import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';
// import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Transaction]),CategoriesModule],//to register a repository for the Transaction entity within the module
  controllers: [TransactionsController],
  providers: [TransactionsService,CategoriesService],
  exports:[],
 
})
export class TransactionsModule {}
