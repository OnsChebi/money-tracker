import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateBudgetDto {

  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  month: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}