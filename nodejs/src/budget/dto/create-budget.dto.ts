import { IsDecimal, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateBudgetDto {

  @IsNotEmpty()
  amount: number;

  @IsString({ message: 'Month must be a string' })
  @Matches(/^(January|February|March|April|May|June|July|August|September|October|November|December)$/, { message: 'Month must be a valid month' })
  @IsNotEmpty({ message: 'Month is required' })
  month: string;

  @IsString({ message: 'Category must be a string' })
  @IsNotEmpty({ message: 'Category is required' })
  category: string;
}