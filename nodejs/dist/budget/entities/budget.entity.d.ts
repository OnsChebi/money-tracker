import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Budget {
    id: number;
    amount: number;
    month: string;
    user: User;
    category: Category;
}
