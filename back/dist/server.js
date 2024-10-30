"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, morgan_1.default)("dev"));
server.use((0, cors_1.default)());
server.use(routes_1.default);
server.use((err, req, res, next) => {
    const error = err;
    const errorMessage = {
        message: "Error en el servidor",
        details: error instanceof Error ? (error.detail ? error.detail : error.message) : "Error desconocido",
        code: error.code
    };
    if (error.code === 404) {
        res.status(404).json({ message: errorMessage.message, details: errorMessage.details });
    }
    else {
        res.status(400).json(errorMessage);
    }
});
exports.default = server;
