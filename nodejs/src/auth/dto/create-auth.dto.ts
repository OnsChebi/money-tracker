import { IsEmail, IsNotEmpty } from "class-validator";
import {PrimaryGeneratedColumn} from "typeorm";
export class CreateAuthDto{
    @PrimaryGeneratedColumn()
    id:string;
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password:string;
}