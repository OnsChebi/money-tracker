// src/users/entities/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Budget } from 'src/budget/entities/budget.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;


  @Column()
  password: string;

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];

  @OneToMany(() => Budget, budget => budget.user)
  budgets: Budget[];
}
