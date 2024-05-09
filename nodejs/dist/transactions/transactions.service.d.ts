import { CreateTransactionUserDto } from './dto/create-transaction.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.dto';
import { Repository } from 'typeorm';
import { TransactionUser } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';
export declare class TransactionUsersService {
    private transactionRepository;
    private categoriesRepository;
    constructor(transactionRepository: Repository<TransactionUser>, categoriesRepository: Repository<Category>);
    create(createTransactionUserDto: CreateTransactionUserDto): Promise<{
        name: string;
        description: string;
        amount: number;
        date: string;
        category: number;
    } & Category>;
    findAll(): Promise<TransactionUser[]>;
    findOne(id: number): Promise<TransactionUser>;
    update(id: number, updateTransactionUserDto: UpdateTransactionUserDto): Promise<{
        category: any;
        apply(this: Function, thisArg: any, argArray?: any): any;
        call(this: Function, thisArg: any, ...argArray: any[]): any;
        bind(this: Function, thisArg: any, ...argArray: any[]): any;
        toString(): string;
        length: number;
        arguments: any;
        caller: Function;
        name: string;
        [Symbol.hasInstance](value: any): boolean;
        id: number;
        transactions: TransactionUser[];
        deletedAt: Date;
    } & TransactionUser>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
