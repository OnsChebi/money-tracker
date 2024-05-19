import { BadRequestException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class TransactionsService {

constructor(
  @InjectRepository(Transaction)
  private transactionRepository:Repository<Transaction>,
  @InjectRepository(Category)
  private categoriesRepository :Repository<Category>,
 
){}


  async create(createTransactionDto: CreateTransactionDto) {
     const category=await this.categoriesRepository.findOneBy({
      name:createTransactionDto.category,
    });
  //   console.log(category);
   if(!category){
      throw new BadRequestException('Category not found');
   }
 
   const transaction=this.transactionRepository.create({
    name:createTransactionDto.name,
    description:createTransactionDto.description,
    amount:createTransactionDto.amount,
    date:createTransactionDto.date,
    type:createTransactionDto.type,
    category
  });

  return await this.transactionRepository.save(transaction)
  }

  async findAll() {
   // console.log(this.transactionRepository.createQueryBuilder('transaction').getSql())
    return await this.transactionRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionRepository.findOneBy({id});
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction=await this.categoriesRepository.findOneBy({id});

    if(!transaction){
      throw new BadRequestException('transaction not found');
    }
    let category:Category;
    if(updateTransactionDto.category){
      category=await this.categoriesRepository.findOneBy({
        name:updateTransactionDto.category,
      });

      if(!category){
        throw new BadRequestException('category not found');
      }

    }


    return await this.transactionRepository.save({
      ...transaction,
      ...UpdateTransactionDto,
      category,
    });
  }
  // async update(id: number,updateTransactionDto:UpdateTransactionDto){
  //  return await this.transactionRepository.update(id,updateTransactionDto); 
  // }
  async remove(id: number) {
    return await this.transactionRepository.softDelete(id);
  }
}
