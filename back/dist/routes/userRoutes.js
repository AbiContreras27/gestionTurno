"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res, next) => usersController_1.default.getUsersController(req, res, next));
userRouter.get("/:id", (req, res, next) => usersController_1.default.getUserByController(req, res, next));
userRouter.post("/register", (req, res, next) => usersController_1.default.registerUserController(req, res, next));
userRouter.post("/login", (req, res, next) => usersController_1.default.loginUserController(req, res, next));
exports.default = userRouter;
