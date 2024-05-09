import { TransactionUser } from "src/transactions/entities/transaction.entity";
export declare class Category {
    id: number;
    name: string;
    transactions: TransactionUser[];
    deletedAt: Date;
}
