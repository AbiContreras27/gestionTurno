import "dotenv/config";

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

function getDatabaseConfig() {
    return {
        DB_TYPE: process.env.DB_TYPE,
        DATABASE_URL: process.env.DATABASE_URL,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE: process.env.DB_DATABASE,
        DB_SYNC: process.env.DB_SYNC ? process.env.DB_SYNC === "true" : true,
        DB_LOGGING: process.env.DB_LOGGING ? process.env.DB_LOGGING === "true" : true,
        DB_ENTITIES: process.env.DB_ENTITIES,
        DB_DROP: process.env.DB_DROP ? process.env.DB_DROP === "true" : true,
    };
}

// Exporta el objeto de configuración
export const dbConfig = getDatabaseConfig();


