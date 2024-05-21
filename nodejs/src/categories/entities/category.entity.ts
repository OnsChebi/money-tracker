
import { Budget } from "src/budget/entities/budget.entity";
import { Transaction } from "src/transactions/entities/transaction.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    name:string;
    // @Column()
    // icon:string;
    @OneToMany(() => Budget, (budget) => budget.category)
    budgets: Budget[];
   
     @OneToMany(()=>Transaction,(transaction)=>transaction.category)
     transactions:Transaction[];
     @DeleteDateColumn()
    deletedAt: Date;
}


