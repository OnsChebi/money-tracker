import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    @IsOptional()
    description?:string;
    @IsNotEmpty()
    @IsNumber()
    amount:number;
   // @IsDate()
    @IsNotEmpty()
    //date:Date;
    date:string;
    tags:string[];
    
    category:string;
    @IsString()
    type: 'income' | 'expense';

}
