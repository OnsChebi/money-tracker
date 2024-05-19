
import { IsOptional } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { Column, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
@PrimaryGeneratedColumn()
id:number;
@Column()
name:string;
@Column()
@IsOptional()
description:string;
@Column('decimal')
  amount: number;
// @Column()
// category:string;
@Column()
//date:Date;
date:string

@Column()
type: 'income' | 'expense';

@ManyToOne(()=>Category,(category)=>category.id,{
    eager:true,
 })
category:Category;

@DeleteDateColumn()
deletedAt: Date;





}
