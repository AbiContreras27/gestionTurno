/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from "express";
import router from "./routes";
import morgan from "morgan";
import cors from "cors";
import { ErrorResponse, PostgresError } from "./interfaces/ErrorInterfaace";

const server: Application = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use(router);

server.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    const error = err as PostgresError;

    const errorMessage: ErrorResponse = {
        message: "Error en el servidor",
        details: error instanceof Error ? (error.detail ? error.detail : error.message) : "Error desconocido",
        code: error.code
    };

    if (error.code === 404) {
        res.status(404).json({ message: errorMessage.message, details: errorMessage.details });
    } else {
        res.status(400).json(errorMessage);
    }
});

export default server;
