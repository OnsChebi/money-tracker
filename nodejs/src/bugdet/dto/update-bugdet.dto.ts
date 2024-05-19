import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetDto } from './create-bugdet.dto';


export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {}
