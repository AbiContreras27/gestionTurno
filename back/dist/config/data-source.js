"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: envs_1.dbConfig.DB_TYPE,
    host: envs_1.dbConfig.DB_HOST,
    port: envs_1.dbConfig.DB_PORT,
    username: envs_1.dbConfig.DB_USERNAME,
    password: envs_1.dbConfig.DB_PASSWORD,
    database: envs_1.dbConfig.DB_DATABASE,
    synchronize: envs_1.dbConfig.DB_SYNC,
    logging: envs_1.dbConfig.DB_LOGGING,
    entities: ["src/entities/**/*.ts"],
    dropSchema: envs_1.dbConfig.DB_DROP,
});
