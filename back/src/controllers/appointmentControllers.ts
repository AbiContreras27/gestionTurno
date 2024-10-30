import { Request, Response} from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO";
import {getAppointmentService, getAppointmentByIdService, registerAppointmentService, cancelStatusAppointmentService  } from "../services/appointmentService"
import { Appointment } from "../entities/appointment.entity";
import { catchingError } from "../utils/catchinError";

const getAppointmentsController = async (req: Request, res: Response): Promise<void> => {
        const serviceResponse = await getAppointmentService()
        res.status(200).json({
        message: "Obtener el listado de todos los turnos de todos los Usuarios",
        data: serviceResponse
    })
}


const getAppointmentsByIdController = async (req: Request<{id: string}>, res: Response): Promise<void> => {
    const { id } = req.params
        const serviceResponse = await getAppointmentByIdService(id)
        res.status(200).json(serviceResponse)
} 

const registerAppointmentsController = async (req:Request<unknown, unknown, AppointmentRegisterDTO>, res: Response): Promise<void> => {
        const serviceResponse: Appointment  = await registerAppointmentService(req.body)
        res.status(201).json({
        message: "Agendar un nuevo turno",
        data: serviceResponse
    })
} 

const cancelStatusAppointmentController = async (req: Request<{id: string}>, res: Response): Promise<void> => {
    const { id } = req.params
        const serviceResponse = await cancelStatusAppointmentService(id)
        res.status(200).json({
        message: "Reserva Cancelada con exito'",
        data: serviceResponse
    })
}


const appointmentsControllers = {
    getAppointmentsController: catchingError(getAppointmentsController),
    getAppointmentsByIdController: catchingError(getAppointmentsByIdController),
    registerAppointmentsController: catchingError(registerAppointmentsController),
    cancelStatusAppointmentController: catchingError(cancelStatusAppointmentController),
}

    export default appointmentsControllers;
