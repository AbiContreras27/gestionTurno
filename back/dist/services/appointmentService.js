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
exports.cancelStatusAppointmentService = exports.registerAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentService = void 0;
const usersService_1 = require("./usersService");
const Appointment_Repository_1 = require("../repositories/Appointment.Repository");
const AppointmentInterface_1 = require("../interfaces/AppointmentInterface");
const customError_1 = require("../utils/customError");
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = yield Appointment_Repository_1.AppointmentRepository.find();
    if (appointmentFound.length === 0)
        throw new customError_1.CustomError(404, "No se encontraron reservaciones");
    else
        return appointmentFound;
});
exports.getAppointmentService = getAppointmentService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = yield Appointment_Repository_1.AppointmentRepository.findOne({
        where: {
            id: parseInt(id, 10)
        }
    });
    if (!appointmentFound)
        throw new customError_1.CustomError(404, `La reserva con el Id ${id} no fue encontrada`);
    else
        return appointmentFound;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const registerAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, usersService_1.getUserByService)(appointmentData.userId);
    Appointment_Repository_1.AppointmentRepository.validateAllowAppointment(appointmentData.date, appointmentData.time);
    yield Appointment_Repository_1.AppointmentRepository.validateExistingAppoinment(Number(appointmentData.userId), new Date(appointmentData.date), appointmentData.time);
    const newAppoinment = Appointment_Repository_1.AppointmentRepository.create({
        date: new Date(appointmentData.date),
        time: appointmentData.time,
        user: {
            id: Number(appointmentData.userId)
        }
    });
    return yield Appointment_Repository_1.AppointmentRepository.save(newAppoinment);
});
exports.registerAppointmentService = registerAppointmentService;
const cancelStatusAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentFound = yield Appointment_Repository_1.AppointmentRepository.findOne({
        where: {
            id: parseInt(id, 10)
        }
    });
    if (!appointmentFound)
        throw new customError_1.CustomError(404, `La reserva con el Id ${id} no fue encontrada`);
    appointmentFound.status = AppointmentInterface_1.Status.cancelled;
    yield Appointment_Repository_1.AppointmentRepository.save(appointmentFound);
});
exports.cancelStatusAppointmentService = cancelStatusAppointmentService;
