import { Module } from '@nestjs/common';
import { TransactionUsersService } from './transactions.service';
import { TransactionUsersController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionUser } from './entities/transaction.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TransactionUser,Category]),CategoriesModule],//to register a repository for the TransactionUser entity within the module
  controllers: [TransactionUsersController],
  providers: [TransactionUsersService,CategoriesService],
})
export class TransactionUsersModule {}
