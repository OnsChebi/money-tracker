import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsString()
    description:string;
    @IsNotEmpty()
    @IsNumber()
    amount:number;
    @IsString()
    @IsNotEmpty()
    category:string;
   // @IsDate()
    @IsNotEmpty()
    //date:Date;
    date:string



    



}
