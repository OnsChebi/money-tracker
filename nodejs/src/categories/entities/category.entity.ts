
import { TransactionUser } from "src/transactions/entities/transaction.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique:true})
    name:string;
    // @Column()
    // icon:string;
    @OneToMany(()=>TransactionUser,(transaction)=>transaction.category)
    transactions:TransactionUser[];
    @DeleteDateColumn()
    deletedAt: Date;
}


