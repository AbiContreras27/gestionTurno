export interface Appointment {
    id: number,
    date: Date,
    time: string,
    userId: number,
    status: Status
}

export enum Status {
    active = "active",
    cancelled = "cancelled"
}