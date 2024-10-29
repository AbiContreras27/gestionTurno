import { AppointmentRegisterDTO } from "../dtos/AppointmentDTO"


export const getAppointmentService = async (): Promise<void> => { }

export const getAppointmentByIdService = async (id: string): Promise<string> => {
    return id
 }

export const registerAppointmentService = async (appointmentData: AppointmentRegisterDTO): Promise<AppointmentRegisterDTO> => {
    return appointmentData
 }

export const cancelStatusAppointmentService = async (id: string): Promise<string> => { 
    return id
}





