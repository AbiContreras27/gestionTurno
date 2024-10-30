import { CreateDateColumn, UpdateDateColumn, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User.entity"
import { Status } from "../interfaces/AppointmentInterface"

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date', nullable: false})
    date: Date

    @Column({type: 'varchar', length: 5, nullable: false})
    time: string

    @Column({type: "varchar", length: 10, nullable: false, default: Status.active})
    status: Status

    @ManyToOne( () => User, user => user.appointments, {nullable: false})
    @JoinColumn()
    user: User

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updateAt?: Date
}