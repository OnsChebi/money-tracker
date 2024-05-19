import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsIn } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    date: string;

    @IsString({ each: true })
    @IsOptional()
    tags?: string[];

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsString()
    @IsIn(['income', 'expense'])
    type: 'income' | 'expense';
}
