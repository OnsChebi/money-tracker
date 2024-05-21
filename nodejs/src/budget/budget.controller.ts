// src/budgets/budgets.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { BudgetsService } from './budget.service';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  // create(@Body() createBudgetDto: CreateBudgetDto, @Req() req: Request) {
    // userId = (req as any).user.id;
    async create(@Body() createBudgetDto: CreateBudgetDto){
    const userId=1;
    return await this.budgetsService.create(createBudgetDto, userId);
  }

  @Get()
 // findAll(@Req() req: Request) {
    // const userId = (req as any).user.id;
    findAll(){
    const userId=1;
    return this.budgetsService.findAll(userId);
  }

  @Get(':id')
  // findOne(@Param('id') id: number, @Req() req: Request) {
    // const userId = (req as any).user.id;
    findOne(@Param('id')id:number){
    const userId=1;
    return this.budgetsService.findOne(id, userId);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBudgetDto: UpdateBudgetDto, @Req() req: Request) {
    const userId = (req as any).user.id;
    return this.budgetsService.update(id, updateBudgetDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Req() req: Request) {
    const userId = (req as any).user.id;
    return this.budgetsService.remove(id, userId);
  }
}
