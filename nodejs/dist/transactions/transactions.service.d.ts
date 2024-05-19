import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';
export declare class TransactionsService {
    private transactionRepository;
    private categoriesRepository;
    constructor(transactionRepository: Repository<Transaction>, categoriesRepository: Repository<Category>);
    create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: number): Promise<Transaction>;
    update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<{
        category: Category;
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
        transactions: Transaction[];
        budget: import("../bugdet/entities/bugdet.entity").Budget;
        deletedAt: Date;
    } & Transaction>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
