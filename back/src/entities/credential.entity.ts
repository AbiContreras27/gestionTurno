import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User.entity"

@Entity()
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 255, nullable: false, unique: true})
    username: string

    @Column({type: "varchar", length: 255, nullable: false})
    password: string

    @OneToOne(() => User)
    user: User

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updateAt?: Date
}
