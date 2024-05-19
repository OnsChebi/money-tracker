import { Category } from "src/categories/entities/category.entity";
export declare class Budget {
    id: number;
    amount: number;
    category: Category;
    month: Date;
    deletedAt: Date;
}
