"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentControllers_1 = __importDefault(require("../controllers/appointmentControllers"));
const appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", (req, res, next) => appointmentControllers_1.default.getAppointmentsController(req, res, next));
appointmentRouter.get("/:id", (req, res, next) => appointmentControllers_1.default.getAppointmentsByIdController(req, res, next));
appointmentRouter.post("/schedule", (req, res, next) => appointmentControllers_1.default.registerAppointmentsController(req, res, next));
appointmentRouter.put("/cancel/:id", (req, res, next) => appointmentControllers_1.default.cancelStatusAppointmentController(req, res, next));
exports.default = appointmentRouter;
