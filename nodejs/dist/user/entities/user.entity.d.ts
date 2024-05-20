import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Budget } from 'src/budget/entities/budget.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    transactions: Transaction[];
    budgets: Budget[];
}
