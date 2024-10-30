"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersService_1 = require("../services/usersService");
const catchinError_1 = require("../utils/catchinError");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceResponse = yield (0, usersService_1.getUserService)();
    res.status(200).json({
        message: "Obteniendo el listado de todos los usuarios",
        data: serviceResponse
    });
});
const getUserByController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const serviceResponse = yield (0, usersService_1.getUserByService)(id);
    res.status(200).json(serviceResponse);
});
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceResponse = yield (0, usersService_1.registerUserService)(req.body);
    res.status(201).json(serviceResponse);
});
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceResponse = yield (0, usersService_1.loginUserService)(req.body);
    res.status(200).json(serviceResponse);
});
const userControllers = {
    getUsersController: (0, catchinError_1.catchingError)(getUsersController),
    getUserByController: (0, catchinError_1.catchingError)(getUserByController),
    registerUserController: (0, catchinError_1.catchingError)(registerUserController),
    loginUserController: (0, catchinError_1.catchingError)(loginUserController)
};
exports.default = userControllers;
