import { Repository, Transaction } from 'typeorm';
import { Budget } from './entities/budget.entity';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Category } from 'src/categories/entities/category.entity';
export declare class BudgetsService {
    private budgetsRepository;
    private categoriesRepository;
    private transactionsRepository;
    constructor(budgetsRepository: Repository<Budget>, categoriesRepository: Repository<Category>, transactionsRepository: Repository<Transaction>);
    create(createBudgetDto: CreateBudgetDto, userId: number): Promise<Budget>;
    findAll(userId: number): Promise<Budget[]>;
    findOne(id: number, userId: number): Promise<Budget>;
    update(id: number, updateBudgetDto: UpdateBudgetDto, userId: number): Promise<Budget>;
    remove(id: number, userId: number): Promise<Budget>;
    CategoryExpenses(categoryId: number): Promise<number>;
    AllExpenses(): Promise<number>;
    CategoryIncome(categoryId: number): Promise<number>;
    AllIncomes(): Promise<number>;
    CategoryTotalBudget(categoryId: number): Promise<number>;
}
