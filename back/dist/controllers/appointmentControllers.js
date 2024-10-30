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
const appointmentService_1 = require("../services/appointmentService");
const catchinError_1 = require("../utils/catchinError");
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceResponse = yield (0, appointmentService_1.getAppointmentService)();
    res.status(200).json({
        message: "Obtener el listado de todos los turnos de todos los Usuarios",
        data: serviceResponse
    });
});
const getAppointmentsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const serviceResponse = yield (0, appointmentService_1.getAppointmentByIdService)(id);
    res.status(200).json(serviceResponse);
});
const registerAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceResponse = yield (0, appointmentService_1.registerAppointmentService)(req.body);
    res.status(201).json({
        message: "Agendar un nuevo turno",
        data: serviceResponse
    });
});
const cancelStatusAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const serviceResponse = yield (0, appointmentService_1.cancelStatusAppointmentService)(id);
    res.status(200).json({
        message: "Reserva Cancelada con exito'",
        data: serviceResponse
    });
});
const appointmentsControllers = {
    getAppointmentsController: (0, catchinError_1.catchingError)(getAppointmentsController),
    getAppointmentsByIdController: (0, catchinError_1.catchingError)(getAppointmentsByIdController),
    registerAppointmentsController: (0, catchinError_1.catchingError)(registerAppointmentsController),
    cancelStatusAppointmentController: (0, catchinError_1.catchingError)(cancelStatusAppointmentController),
};
exports.default = appointmentsControllers;
