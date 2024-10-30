import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO"
import { getUserByService } from "./usersService"
import { AppointmentRepository } from "../repositories/Appointment.Repository"
import { Appointment } from "../entities/appointment.entity"
import { Status } from "../interfaces/AppointmentInterface"
import { CustomError } from "../utils/customError"


export const getAppointmentService = async (): Promise<Appointment[]> => { 
    const appointmentFound = await AppointmentRepository.find()
    if(appointmentFound.length ===0) throw new CustomError(404, "No se encontraron reservaciones")
     else return appointmentFound
}

export const getAppointmentByIdService = async (id: string): Promise<Appointment | null> => {
    const appointmentFound = await AppointmentRepository.findOne({
        where: {
            id: parseInt(id,10)
        }
    })
    if(!appointmentFound) throw new CustomError(404, `La reserva con el Id ${id} no fue encontrada`)
    else return appointmentFound;
 }

export const registerAppointmentService = async (appointmentData: AppointmentRegisterDTO): Promise<Appointment> => {
    await getUserByService(appointmentData.userId)
    AppointmentRepository.validateAllowAppointment(appointmentData.date, appointmentData.time)
    await AppointmentRepository.validateExistingAppoinment(Number(appointmentData.userId), new Date(appointmentData.date), appointmentData.time)
    const newAppoinment = AppointmentRepository.create({
        date: new Date(appointmentData.date),
        time: appointmentData.time,
        user: {
            id: Number(appointmentData.userId)
        }
    })
    return await AppointmentRepository.save(newAppoinment)
 }

export const cancelStatusAppointmentService = async (id: string): Promise<void> => { 
    const appointmentFound = await AppointmentRepository.findOne({
        where: {
            id: parseInt(id,10)
        }
    })
    if(!appointmentFound) throw new CustomError(404, `La reserva con el Id ${id} no fue encontrada`)
    appointmentFound.status = Status.cancelled
    await AppointmentRepository.save(appointmentFound)
}





