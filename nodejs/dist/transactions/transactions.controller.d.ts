import { TransactionUsersService } from './transactions.service';
import { CreateTransactionUserDto } from './dto/create-transaction.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.dto';
export declare class TransactionUsersController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionUsersService);
    create(createTransactionUserDto: CreateTransactionUserDto): Promise<{
        name: string;
        description: string;
        amount: number;
        date: string;
        category: number;
    } & import("../categories/entities/category.entity").Category>;
    findAll(): Promise<import("./entities/transaction.entity").TransactionUser[]>;
    findOne(id: string): Promise<import("./entities/transaction.entity").TransactionUser>;
    update(id: string, updateTransactionUserDto: UpdateTransactionUserDto): Promise<{
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
        transactions: import("./entities/transaction.entity").TransactionUser[];
        deletedAt: Date;
    } & import("./entities/transaction.entity").TransactionUser>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
