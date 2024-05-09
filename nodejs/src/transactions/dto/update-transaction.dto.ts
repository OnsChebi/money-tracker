import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionUserDto } from './create-transaction.dto';

export class UpdateTransactionUserDto extends PartialType(CreateTransactionUserDto) {}
