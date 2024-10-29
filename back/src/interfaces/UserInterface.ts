

export interface User {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    credentialsId: number,
    createdAt?: Date,
    updatedAt?: Date,
}