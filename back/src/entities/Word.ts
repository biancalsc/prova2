import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({name:"words"})
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:20})
    name: string;
}