import { Module } from '@nestjs/common';
import { BudgetController } from './bugdet.controller';
import { BudgetService } from './bugdet.service';


@Module({
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule {}
