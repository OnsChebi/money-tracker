// src/budgets/budgets.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Budget } from './entities/budget.entity';
import { CategoriesModule } from '../categories/categories.module';
import { BudgetsController } from './budget.controller';
import { BudgetsService } from './budget.service';

@Module({
  imports: [TypeOrmModule.forFeature([Budget]), CategoriesModule],
  controllers: [BudgetsController],
  providers: [BudgetsService]
})
export class BudgetsModule {}
