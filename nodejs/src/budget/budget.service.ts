// src/budgets/budgets.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget)
    private budgetsRepository: Repository<Budget>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createBudgetDto: CreateBudgetDto, userId: number) {
    const category = await this.categoriesRepository.findOne({ where: { name: createBudgetDto.category } });
    if (!category) {
      throw new BadRequestException('Category not found');
    }

    const budget = this.budgetsRepository.create({ ...createBudgetDto, category, user: { id: userId } });
    return this.budgetsRepository.save(budget);
  }

  async findAll(userId: number) {
    return this.budgetsRepository.find({ where: { user: { id: userId } } });
  }

  async findOne(id: number, userId: number) {
    const budget = await this.budgetsRepository.findOne({ where: { id, user: { id: userId } } });
    if (!budget) {
      throw new NotFoundException(`Budget #${id} not found`);
    }
    return budget;
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto, userId: number) {
    const budget = await this.findOne(id, userId);
    if (updateBudgetDto.category) {
      const category = await this.categoriesRepository.findOne({ where: { name: updateBudgetDto.category } });
      if (!category) {
        throw new BadRequestException('Category not found');
      }
      budget.category = category;
    }
    Object.assign(budget, updateBudgetDto);
    return this.budgetsRepository.save(budget);
  }

  async remove(id: number, userId: number) {
    const budget = await this.findOne(id, userId);
    return this.budgetsRepository.remove(budget);
  }
}
