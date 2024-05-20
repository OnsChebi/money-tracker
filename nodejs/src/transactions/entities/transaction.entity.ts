// src/transactions/entities/transaction.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal')
  amount: number;

  @Column()
  date: string;

  @Column()
  type: 'income' | 'expense';

  @ManyToOne(() => User, user => user.transactions)
  user: User;

  @ManyToOne(() => Category, category => category.transactions)
  category: Category;
}
