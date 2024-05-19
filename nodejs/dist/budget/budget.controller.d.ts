import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    create(createBudgetDto: CreateBudgetDto): Promise<import("./entities/budget.entity").Budget>;
    findAll(): Promise<import("./entities/budget.entity").Budget[]>;
    findOne(id: number): Promise<import("./entities/budget.entity").Budget>;
    update(id: number, updateBudgetDto: UpdateBudgetDto): Promise<{
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
    } & import("./entities/budget.entity").Budget>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
