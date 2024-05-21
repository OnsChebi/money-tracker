// src/budgets/budgets.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Transaction } from 'typeorm';
import { Budget } from './entities/budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget)
    private budgetsRepository: Repository<Budget>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    // @InjectRepository(Transaction)
    // private transactionsRepository:Repository<Transaction>
  ) {}

  async create(createBudgetDto: CreateBudgetDto, userId: number) {
    // Find the category by name
    const category = await this.categoriesRepository.findOne({ where: { name: createBudgetDto.category } });
    if (!category) {
      throw new BadRequestException('Category not found');
    }

    // Check if a budget already exists for the given month, category, and user
    const existingBudget = await this.budgetsRepository.findOne({
      where: {
        month: createBudgetDto.month,
        category: { id: category.id },
        user: { id: userId },
      },
    });

    if (existingBudget) {
      throw new BadRequestException('Budget for this category already exists for the given month');
    }

    // Create the new budget
    const budget = this.budgetsRepository.create({
      ...createBudgetDto,
      category,
      user: { id: userId } as User, 
    });

    // Save and return the new budget
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
