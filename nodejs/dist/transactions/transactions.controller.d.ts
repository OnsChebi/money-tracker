import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto): Promise<import("./entities/transaction.entity").Transaction>;
    findAll(): Promise<import("./entities/transaction.entity").Transaction[]>;
    findOne(id: number): Promise<import("./entities/transaction.entity").Transaction>;
    update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<{
        category: import("../categories/entities/category.entity").Category;
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
        transactions: import("./entities/transaction.entity").Transaction[];
        budget: import("../bugdet/entities/bugdet.entity").Budget;
        deletedAt: Date;
    } & import("./entities/transaction.entity").Transaction>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
