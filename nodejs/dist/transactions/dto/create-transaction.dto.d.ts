export declare class CreateTransactionDto {
    name: string;
    description?: string;
    amount: number;
    date: string;
    tags?: string[];
    category: string;
    type: 'income' | 'expense';
}
