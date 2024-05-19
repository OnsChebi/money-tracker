import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';


@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(Budget)
    private budgetRepository:Repository<Budget>,
    @InjectRepository(Category)
    private categoriesRepository :Repository<Category>
  ){}

  async create(createBudgetDto: CreateBudgetDto) {
    const category=await this.categoriesRepository.findOneBy({
     name:createBudgetDto.category,
   });
 //   console.log(category);
  if(!category){
     throw new BadRequestException('Category not found');
  }

  const budget=this.budgetRepository.create({

   amount:createBudgetDto.budgetAmount,
   month:createBudgetDto.month,
   
   category
 });

 return await this.budgetRepository.save(budget)
 }

  async findAll() {
    return await this.budgetRepository.find();
  }

  async findOne(id: number) {
    return await this.budgetRepository.findOneBy({id});
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto) {
    const budget=await this.categoriesRepository.findOneBy({id});

    if(!Budget){
      throw new BadRequestException('Budget not found');
    }
    let category:Category;
    if(updateBudgetDto.category){
      category=await this.categoriesRepository.findOneBy({
        name:updateBudgetDto.category,
      });

      if(!category){
        throw new BadRequestException('category not found');
      }

    }


    return await this.budgetRepository.save({
      ...Budget,
      ...UpdateBudgetDto,
      category,
    });
  }
  // async update(id: number,updateBudgetDto:UpdateBudgetDto){
  //  return await this.BudgetRepository.update(id,updateBudgetDto); 
  // }
  async remove(id: number) {
    return await this.budgetRepository.softDelete(id);
  }
}

