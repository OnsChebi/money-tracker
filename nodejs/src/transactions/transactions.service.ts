import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {

constructor(
  @InjectRepository(Transaction)
  private transactionRepository:Repository<Transaction>
){}

  async create(createTransactionDto: CreateTransactionDto) {
    const transaction=this.transactionRepository.create(createTransactionDto)
    return await this.transactionRepository.save(transaction);
  }

  async findAll() {
    return await this.transactionRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionRepository.findOneBy({id});
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return await this.transactionRepository.update(id,updateTransactionDto);
  }

  async remove(id: number) {
    return await this.transactionRepository.softDelete(id);
  }
}
