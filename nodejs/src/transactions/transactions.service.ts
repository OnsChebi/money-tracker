import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTransactionUserDto } from './dto/create-transaction.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionUser } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class TransactionUsersService {

constructor(
  @InjectRepository(TransactionUser)
  private transactionRepository:Repository<TransactionUser>,
  @InjectRepository(Category)
  private categoriesRepository :Repository<Category>
){}


  async create(createTransactionUserDto: CreateTransactionUserDto) {
    const category=await this.categoriesRepository.findOneBy({
      name:createTransactionUserDto.category,
    });
    console.log(category);
    if(!category){
      throw new BadRequestException('Category not found');
    }
 
   return await this.categoriesRepository.save({
    name:createTransactionUserDto.name,
    description:createTransactionUserDto.description,
    amount:createTransactionUserDto.amount,
    date:createTransactionUserDto.date,
    category:category.id
  });
  }

  async findAll() {
    console.log(this.transactionRepository.createQueryBuilder('transaction').getSql())
    return await this.transactionRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionRepository.findOneBy({id});
  }

  async update(id: number, updateTransactionUserDto: UpdateTransactionUserDto) {
    const transaction=await this.categoriesRepository.findOneBy({id});

    if(!transaction){
      throw new BadRequestException('transaction not found');
    }
    let category;
    if(updateTransactionUserDto.category){
      category=await this.categoriesRepository.findOneBy({
        name:updateTransactionUserDto.category,
      });

      if(!category){
        throw new BadRequestException('category not found');
      }

    }


    return await this.transactionRepository.save({
      ...transaction,
      ...UpdateTransactionUserDto,
      category,
    });
  }

  async remove(id: number) {
    return await this.transactionRepository.softDelete(id);
  }
}
