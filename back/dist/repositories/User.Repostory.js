"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRpository = void 0;
const data_source_1 = require("../config/data-source");
const User_entity_1 = require("../entities/User.entity");
exports.UserRpository = data_source_1.AppDataSource.getRepository(User_entity_1.User);
