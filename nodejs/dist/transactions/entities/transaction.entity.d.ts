import { Category } from "src/categories/entities/category.entity";
export declare class Transaction {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
    category: Category;
    deletedAt: Date;
}
