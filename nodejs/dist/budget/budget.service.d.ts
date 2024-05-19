import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
export declare class BudgetService {
    private budgetRepository;
    private categoriesRepository;
    constructor(budgetRepository: Repository<Budget>, categoriesRepository: Repository<Category>);
    create(createBudgetDto: CreateBudgetDto): Promise<Budget>;
    findAll(): Promise<Budget[]>;
    findOne(id: number): Promise<Budget>;
    update(id: number, updateBudgetDto: UpdateBudgetDto): Promise<{
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
    } & Budget>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
