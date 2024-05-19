

import { Budget } from "src/bugdet/entities/budget.entity";
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
     @OneToMany(()=>Transaction,(transaction)=>transaction.category)
     transactions:Transaction[];
     @OneToOne(() => Budget, budget => budget.category)
        budget: Budget;
     @DeleteDateColumn()
    deletedAt: Date;
}


