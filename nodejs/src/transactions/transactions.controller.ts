import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionUsersService } from './transactions.service';
import { CreateTransactionUserDto } from './dto/create-transaction.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionUsersController {
  constructor(private readonly transactionsService: TransactionUsersService) {}

  @Post()
  create(@Body() createTransactionUserDto: CreateTransactionUserDto) {
    return this.transactionsService.create(createTransactionUserDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionUserDto: UpdateTransactionUserDto) {
    return this.transactionsService.update(+id, updateTransactionUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
