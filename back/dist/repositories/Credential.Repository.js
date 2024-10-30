"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialRepository = void 0;
const data_source_1 = require("../config/data-source");
const credential_entity_1 = require("../entities/credential.entity");
exports.CredentialRepository = data_source_1.AppDataSource.getRepository(credential_entity_1.Credential);
