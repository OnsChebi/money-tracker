
import { Transaction } from "src/transactions/entities/transaction.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    name:string;
    // @Column()
    // icon:string;
    // @OneToMany(()=>Transaction,(transaction)=>transaction.category)
    // transactions:Transaction[];
    @DeleteDateColumn()
    deletedAt: Date;
}


