
import { Category } from "src/categories/entities/category.entity";
import { Column, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TransactionUser {
@PrimaryGeneratedColumn()
id:number;
@Column()
name:string;
@Column()
description:string;
@Column()
amount:number;
// @Column()
// category:string;
@Column()
//date:Date;
date:string

@ManyToOne(()=>Category,(category)=>category.id,{
    eager:true,
})
category:number;
@DeleteDateColumn()
deletedAt: Date;





}
