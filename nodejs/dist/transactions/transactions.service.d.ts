import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { Category } from 'src/categories/entities/category.entity';
import { BudgetsService } from 'src/budget/budget.service';
export declare class TransactionsService {
    private transactionRepository;
    private categoriesRepository;
    private budgetService;
    constructor(transactionRepository: Repository<Transaction>, categoriesRepository: Repository<Category>, budgetService: BudgetsService);
    create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: number): Promise<Transaction>;
    update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<{
        category: Category;
        name: string;
        description: string;
        amount: number;
        date: string;
        tags?: string[];
        type: "income" | "expense";
        id: number;
        user: import("../user/entities/user.entity").User;
    } & Transaction>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
    categoryExpenses(categoryId: number, month: string): Promise<number>;
    allExpenses(month: any): Promise<number>;
    categoryIncome(categoryId: number, month: string): Promise<number>;
    allIncomes(month: any): Promise<number>;
}
