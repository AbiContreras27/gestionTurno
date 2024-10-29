import { DataSource, Repository } from "typeorm"
import { User } from "../entities/User.entity"
import {dbConfig} from "./envs"
import { Credential } from "../entities/credential.entity"
import { Appointment } from "../entities/appointment.entity"

export const AppDataSource = new DataSource({
    type: dbConfig.DB_TYPE as "postgres",
    host: dbConfig.DB_HOST,
    port: dbConfig.DB_PORT,
    username: dbConfig.DB_USERNAME,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_DATABASE,
    synchronize: dbConfig.DB_SYNC,
    logging: dbConfig.DB_LOGGING,
    entities: ["src/entities/**/*.ts"],
    dropSchema: dbConfig.DB_DROP,
})

export const UserModel: Repository<User> = AppDataSource.getRepository(User)
export const CredentialModel: Repository<Credential> = AppDataSource.getRepository(Credential)
export const AppointmentModel: Repository<Appointment> = AppDataSource.getRepository(Appointment)