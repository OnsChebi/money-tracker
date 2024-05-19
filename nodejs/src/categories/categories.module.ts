import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { BudgetModule } from 'src/bugdet/budget.module';


@Module({
  imports: [TypeOrmModule.forFeature([Category]),BudgetModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports:[TypeOrmModule],
})
export class CategoriesModule {}
