import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { Budget } from './entities/budget.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';


@Module({
  imports:[TypeOrmModule.forFeature([Budget]),CategoriesModule],
  controllers: [BudgetController],
  providers: [BudgetService,CategoriesService],
  exports:[],
})
export class BudgetModule {}
