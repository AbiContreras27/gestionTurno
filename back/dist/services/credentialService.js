"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.checkUserCredentials = exports.getCredentialService = void 0;
const Credential_Repository_1 = require("../repositories/Credential.Repository");
const credential_entity_1 = require("../entities/credential.entity");
const crypto = __importStar(require("crypto"));
const crypPass = (pass) => {
    return crypto.createHash("sha256").update(pass).digest("hex");
};
const checkUserExist = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialFound = yield Credential_Repository_1.CredentialRepository.findOne({
        where: { username }
    });
    if (credentialFound)
        throw new Error(`El usuario con username: ${username} ya existe, intente con nuevo username`);
});
const getCredentialService = (entityManager, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield checkUserExist(username);
    const passwordEncrypted = yield crypPass(password);
    const objetoCredenciales = entityManager.create(credential_entity_1.Credential, {
        username,
        password: passwordEncrypted
    });
    return yield entityManager.save(objetoCredenciales);
});
exports.getCredentialService = getCredentialService;
const checkUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialFound = yield Credential_Repository_1.CredentialRepository.findOne({ where: { username } });
    if (!credentialFound)
        throw new Error(`Usuario o contraseña incorrectos`);
    else {
        const passwordEncrypt = yield crypPass(password);
        if ((credentialFound === null || credentialFound === void 0 ? void 0 : credentialFound.password) != passwordEncrypt)
            throw new Error(`Usuario o contraseña incorrecta`);
        else
            return credentialFound.id;
    }
});
exports.checkUserCredentials = checkUserCredentials;
