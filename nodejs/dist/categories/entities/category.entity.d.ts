import { Budget } from "src/budget/entities/budget.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";
export declare class Category {
    id: number;
    name: string;
    budgets: Budget[];
    transactions: Transaction[];
    deletedAt: Date;
}
