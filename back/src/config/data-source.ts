import { DataSource } from "typeorm"
import {dbConfig} from "./envs"


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
