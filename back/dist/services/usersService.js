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
exports.loginUserService = exports.registerUserService = exports.getUserByService = exports.getUserService = void 0;
const User_entity_1 = require("../entities/User.entity");
const data_source_1 = require("../config/data-source");
const User_Repostory_1 = require("../repositories/User.Repostory");
const credentialService_1 = require("./credentialService");
const customError_1 = require("../utils/customError");
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_Repostory_1.UserRpository.find();
        return users;
    }
    catch (error) {
        console.error("error al encontrar usuario:", error);
        throw new Error("No se pudo encontrar usuario.");
    }
});
exports.getUserService = getUserService;
const getUserByService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield User_Repostory_1.UserRpository.findOne({
        where: {
            id: parseInt(id, 10)
        }, relations: ['appointments']
    });
    if (!userFound)
        throw new customError_1.CustomError(404, `El usuario con id: ${id} no fue encontrado`);
    return userFound;
});
exports.getUserByService = getUserByService;
const registerUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!userData.password || !userData.username) {
            throw new customError_1.CustomError(400, "El nombre de usuario y la contraseña son obligatorios.");
        }
        const result = yield data_source_1.AppDataSource.transaction((entityManager) => __awaiter(void 0, void 0, void 0, function* () {
            const Credential = yield (0, credentialService_1.getCredentialService)(entityManager, userData.username, userData.password);
            const newUser = entityManager.create(User_entity_1.User, {
                name: userData.name,
                email: userData.email,
                birthdate: new Date(userData.birthdate),
                nDni: userData.nDni,
                credentialsId: Credential
            });
            return yield entityManager.save(newUser);
        }));
        return result;
    }
    catch (error) {
        console.error("error al registrar usuario:", error);
        throw new Error("No se pudo registrar usuario.");
    }
});
exports.registerUserService = registerUserService;
const loginUserService = (userCredentials) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialId = yield (0, credentialService_1.checkUserCredentials)(userCredentials.username, userCredentials.password);
    if (!credentialId)
        throw new customError_1.CustomError(400, "Credenciales Incorrectas.");
    const userFound = yield User_Repostory_1.UserRpository.findOne({
        where: {
            credentialsId: {
                id: credentialId
            }
        }
    });
    if (!userFound)
        throw new customError_1.CustomError(400, "Usuario no encontrado.");
    return {
        login: true,
        user: {
            id: userFound.id,
            name: userFound.name,
            email: userFound.email,
            birthdate: userFound.birthdate,
            nDni: userFound.nDni
        }
    };
});
exports.loginUserService = loginUserService;
