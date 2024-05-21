// src/budgets/budgets.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Budget } from './entities/budget.entity';
import { CategoriesModule } from '../categories/categories.module';
import { BudgetsController } from './budget.controller';
import { BudgetsService } from './budget.service';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget, Category]),
    forwardRef(() => TransactionsModule),
  ],
  providers: [BudgetsService],
  controllers: [BudgetsController],
  exports: [BudgetsService],
})
export class BudgetsModule {}
