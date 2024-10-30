
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Credential } from "./credential.entity"
import { Appointment } from "./appointment.entity"

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
    
    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[]

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updateAt?: Date
}