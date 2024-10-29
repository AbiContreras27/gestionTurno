
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Credential } from "./credential.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 100, nullable: false,})
    name: string

    @Column({type: "varchar", length: 100, nullable: false, unique: true})
    email: string

    @Column({type: 'date', nullable: false})
    birthdate: Date

    @Column({type: 'integer', nullable: false, unique: true})
    nDni: number

    @OneToOne(() => Credential, {cascade: true})
    @JoinColumn()
    credentialsId: Credential

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updateAt?: Date
}