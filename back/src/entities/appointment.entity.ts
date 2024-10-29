import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


enum Status {
    active = "active",
    cancelled = "cancelled"
}

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date', nullable: false})
    date: Date

    @Column({type: 'time', nullable: false})
    time: string

    @Column({type: 'integer', nullable: false, unique: true})
    userId: number

    @Column({type: "enum", enum: Status, nullable: false})
    status: Status
}