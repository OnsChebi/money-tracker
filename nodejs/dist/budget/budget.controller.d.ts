import { Request } from 'express';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { BudgetsService } from './budget.service';
export declare class BudgetsController {
    private readonly budgetsService;
    constructor(budgetsService: BudgetsService);
    create(createBudgetDto: CreateBudgetDto): Promise<import("./entities/budget.entity").Budget>;
    findAll(): Promise<import("./entities/budget.entity").Budget[]>;
    findOne(id: number): Promise<import("./entities/budget.entity").Budget>;
    update(id: number, updateBudgetDto: UpdateBudgetDto, req: Request): Promise<import("./entities/budget.entity").Budget>;
    remove(id: number, req: Request): Promise<import("./entities/budget.entity").Budget>;
}
