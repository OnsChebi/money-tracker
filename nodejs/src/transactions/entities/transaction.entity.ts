import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from './user.entity';
import { Category } from 'src/categories/entities/category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column('decimal')
  amount: number;

  @Column()
  date: string;

  @Column({ type: 'simple-array', nullable: true })
  tags?: string[];

  @ManyToOne(() => Category)
  category: Category;

  @Column()
  type: 'income' | 'expense';

  // @ManyToOne(() => User, user => user.transactions)
  // user: User;
}
