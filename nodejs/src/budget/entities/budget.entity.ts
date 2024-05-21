
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ default: 0 })
    amount: number;

    @Column({ default: 0 })
    totalAmount: number;

    @Column({ default: 0 })
    categoryAmount: number;


  @Column()
  month: string;  

  @ManyToOne(() => User, user => user.budgets)
  user: User;

  @ManyToOne(() => Category, (category) => category.budgets)
  category: Category;
}
