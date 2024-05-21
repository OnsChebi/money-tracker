import { IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    // @IsNumber()
    // @IsOptional()
    // @Transform(({ value }) => value !== undefined ? value : 0)
    // budget: number = 0;
}
