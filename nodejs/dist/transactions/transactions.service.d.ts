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
        name: string;
        description?: string;
        amount: number;
        date: string;
        tags?: string[];
        type: "income" | "expense";
        id: number;
    } & Transaction>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
