import { IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    
}
