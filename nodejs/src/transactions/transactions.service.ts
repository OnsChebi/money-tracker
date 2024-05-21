import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';
import { sanitizeHtml } from 'src/sanitize.helper';
import { Budget } from 'src/budget/entities/budget.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    // @InjectRepository(Budget)
    // private budgetsRepository: Repository<Budget>
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const category = await this.categoriesRepository.findOneBy({
      name: createTransactionDto.category,
    });

    if (!category) {
      throw new BadRequestException('Category not found');
    }
    const sanitizedDescription = sanitizeHtml(createTransactionDto.description || '');

    const transaction = this.transactionRepository.create({
      name: createTransactionDto.name,
      description: sanitizedDescription,
      amount: createTransactionDto.amount,
      date: createTransactionDto.date,
      type: createTransactionDto.type,
      category,
    });

    return await this.transactionRepository.save(transaction);
  }

  async findAll() {
    return await this.transactionRepository.find();
  }

  async findOne(id: number) {
    return await this.transactionRepository.findOneBy({ id });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionRepository.findOneBy({ id });

    if (!transaction) {
      throw new BadRequestException('Transaction not found');
    }

    let category: Category;
    if (updateTransactionDto.category) {
      category = await this.categoriesRepository.findOneBy({
        name: updateTransactionDto.category,
      });

      if (!category) {
        throw new BadRequestException('Category not found');
      }
    }

    return await this.transactionRepository.save({
      ...transaction,
      ...updateTransactionDto,
      category: category ? category : transaction.category,
    });
  }

  async remove(id: number) {
    return await this.transactionRepository.softDelete(id);
  }
}
