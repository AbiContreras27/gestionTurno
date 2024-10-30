"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.code = code;
    }
}
exports.CustomError = CustomError;
