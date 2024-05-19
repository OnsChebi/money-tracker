import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Budget } from 'src/budget/entities/budget.entity';



@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { name, budgetAmount } = createCategoryDto;
    
    const category = this.categoriesRepository.create({ name });
    await this.categoriesRepository.save(category);

    const budget = this.budgetRepository.create({ amount: budgetAmount, category });
    await this.budgetRepository.save(budget);

    category.budget = budget;
    return this.categoriesRepository.save(category);
  }

  async findAll() {
    return await this.categoriesRepository.find({ relations: ['budget', 'transactions'] });
  }

  async findOne(id: number) {
    return await this.categoriesRepository.findOne({ where: { id }, relations: ['budget', 'transactions'] });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoriesRepository.findOne({ where: { id }, relations: ['budget'] });
    if (!category) {
      throw new Error('Category not found');
    }

    const { name, budgetAmount } = updateCategoryDto;
    if (name) category.name = name;
    if (budgetAmount !== undefined) {
      if (category.budget) {
        category.budget.amount = budgetAmount;
        await this.budgetRepository.save(category.budget);
      } else {
        const budget = this.budgetRepository.create({ amount: budgetAmount, category });
        await this.budgetRepository.save(budget);
        category.budget = budget;
      }
    }

    return this.categoriesRepository.save(category);
  }

  async remove(id: number) {
    return await this.categoriesRepository.softDelete(id);
  }
}
