import { Transaction } from "src/transactions/entities/transaction.entity";
export declare class Category {
    id: number;
    name: string;
    transactions: Transaction[];
    deletedAt: Date;
}
