import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name:string;
    // @IsOptional()
    // icon:string;
    
    budgetAmount: number;
}
