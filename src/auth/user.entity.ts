import { Board } from "src/boards/board.entity";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from "typeorm";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(type => Board, board => board.user, {eager: true})
    boards: Board[];
}