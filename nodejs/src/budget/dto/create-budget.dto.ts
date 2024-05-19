import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBudgetDto {
    @IsNotEmpty()
    @IsNumber()
    budgetAmount: number;
    month:Date;
    category:string;
}
