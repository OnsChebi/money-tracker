import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class TransactionsService {

constructor(
  @InjectRepository(Transaction)
  private transactionUserRepository:Repository<Transaction>,
  // @InjectRepository(Category)
  // private categoriesRepository :Repository<Category>
){}


  async create(createTransactionDto: CreateTransactionDto) {
  //   const category=await this.categoriesRepository.findOneBy({
  //     name:createTransactionDto.category,
  //   });
  //   console.log(category);
  //   if(!category){
  //     throw new BadRequestException('Category not found');
  //   }
 
  //  return await this.categoriesRepository.save({
  //   name:createTransactionDto.name,
  //   description:createTransactionDto.description,
  //   amount:createTransactionDto.amount,
  //   date:createTransactionDto.date,
  //   category:category.id
  // });

  const transaction=this.transactionUserRepository.create(createTransactionDto);
  return await this.transactionUserRepository.save(transaction)
  }

  async findAll() {
   // console.log(this.transactionUserRepository.createQueryBuilder('transaction').getSql())
    return await this.transactionUserRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionUserRepository.findOneBy({id});
  }

  // async update(id: number, updateTransactionDto: UpdateTransactionDto) {
  //   const transaction=await this.categoriesRepository.findOneBy({id});

  //   if(!transaction){
  //     throw new BadRequestException('transaction not found');
  //   }
  //   let category;
  //   if(updateTransactionDto.category){
  //     category=await this.categoriesRepository.findOneBy({
  //       name:updateTransactionDto.category,
  //     });

  //     if(!category){
  //       throw new BadRequestException('category not found');
  //     }

  //   }


  //   return await this.transactionUserRepository.save({
  //     ...transaction,
  //     ...UpdateTransactionDto,
  //     category,
  //   });
  // }
  async update(id: number,updateTransactionDto:UpdateTransactionDto){
   return await this.transactionUserRepository.update(id,updateTransactionDto); 
  }
  async remove(id: number) {
    return await this.transactionUserRepository.softDelete(id);
  }
}
