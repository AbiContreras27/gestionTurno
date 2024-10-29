import { Request, Response} from "express";
import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO";
import {getAppointmentService, getAppointmentByIdService, registerAppointmentService, cancelStatusAppointmentService  } from "../services/appointmentService"

export const getAppointmentsController = async (req: Request, res: Response): Promise<void> => {

    try {
        const serviceResponse = await getAppointmentService()
        res.status(200).json({
        message: "Obtener el listado de todos los turnos de todos los Usuarios",
        data: serviceResponse
    })
    } catch (error) {
        res.status(500).json({
          message: "Hubo un error en la aplicación",
          error: error
        })
        
    }
}

export const getAppointmentsByIdController = async (req: Request<{id: string}>, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const serviceResponse = await getAppointmentByIdService(id)
        res.status(200).json({
        message: "Obtener el ldetalle de un turno específico",
        data: serviceResponse
    })
    } catch (error) {
        res.status(500).json({
          message: "Hubo un error en la aplicación",
          error: error
        })
        
    }
}

export const registerAppointmentsController = async (req:Request<unknown, unknown, AppointmentRegisterDTO>, res: Response): Promise<void> => {

    const appointmentData: AppointmentRegisterDTO = {
        date: new Date(req.body.date),
        time: req.body.time,
        status: "Active"
    }

    try {
        const serviceResponse: AppointmentRegisterDTO  = await registerAppointmentService(appointmentData)
        res.status(200).json({
        message: "Agendar un nuevo turno",
        data: serviceResponse
    })
    } catch (error) {
        res.status(500).json({
          message: "Hubo un error en la aplicación",
          error: error
        })
        
    }
}

export const cancelStatusAppointmentController = async (req: Request<{id: string}>, res: Response): Promise<void> => {
    const { id } = req.params

    try {
        const serviceResponse = await cancelStatusAppointmentService(id)
        res.status(200).json({
        message: "Cambiar el estatus de un turno a 'cancelled'",
        data: serviceResponse
    })
    } catch (error) {
        res.status(500).json({
          message: "Hubo un error en la aplicación",
          error: error
        })
        
    }
}
