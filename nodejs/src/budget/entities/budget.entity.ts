import { Category } from "src/categories/entities/category.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Budget {
 @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  amount: number;

  @OneToOne(() => Category, category => category.id ,{
    eager:true,
 })
  @JoinColumn()
  category: Category;

  @Column()
  month: Date;
  
  @DeleteDateColumn()
deletedAt: Date;
}
