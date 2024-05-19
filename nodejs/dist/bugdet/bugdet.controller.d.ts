import { BudgetService } from './bugdet.service';
import { CreateBudgetDto } from './dto/create-bugdet.dto';
import { UpdateBudgetDto } from './dto/update-bugdet.dto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    create(createBudgetDto: CreateBudgetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBudgetDto: UpdateBudgetDto): string;
    remove(id: number): string;
}
