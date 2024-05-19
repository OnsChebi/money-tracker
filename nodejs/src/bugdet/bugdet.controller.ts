import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetService } from './bugdet.service';
import { CreateBudgetDto } from './dto/create-bugdet.dto';
import { UpdateBudgetDto } from './dto/update-bugdet.dto';


@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.budgetService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.budgetService.remove(id);
  }
}
