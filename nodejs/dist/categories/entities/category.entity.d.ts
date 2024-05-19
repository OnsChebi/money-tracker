import { Budget } from "src/bugdet/entities/bugdet.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";
export declare class Category {
    id: number;
    name: string;
    transactions: Transaction[];
    budget: Budget;
    deletedAt: Date;
}
