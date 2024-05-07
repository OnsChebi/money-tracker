import { IsDate, IsNumber } from "class-validator";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
@PrimaryGeneratedColumn()
id:number;
@Column()
name:string;
@Column()
description:string;
@Column()
amount:number;
@Column()
category:string;
@Column()
//date:Date;
date:string
@Column()
@DeleteDateColumn()
deletedAt: Date;


}
