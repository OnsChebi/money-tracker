import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Transaction {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
    user: User;
    category: Category;
}
