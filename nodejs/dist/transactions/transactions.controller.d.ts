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
        name: string;
        description?: string;
        amount: number;
        date: string;
        tags?: string[];
        type: "income" | "expense";
        id: number;
    } & import("./entities/transaction.entity").Transaction>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
