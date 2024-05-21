
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  totalAmount: number;

  @Column()
  month: string;  

  @ManyToOne(() => User, user => user.budgets)
  user: User;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;
}
