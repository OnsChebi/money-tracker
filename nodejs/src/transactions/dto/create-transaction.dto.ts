import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    description:string;
    @IsNotEmpty()
    @IsNumber()
    amount:number;
   // @IsDate()
    @IsNotEmpty()
    //date:Date;
    date:string;
    tags:string[];
    // @IsOptional()
    // category:string;

}
