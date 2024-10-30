import { AppDataSource } from "../config/data-source"
import { Appointment } from "../entities/appointment.entity";


export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({

    validateAllowAppointment: function(date: Date, time: string): void {
        const [hours, minutes] = time.split(":").map(Number)
        const appointmentDate = new Date(date)
        appointmentDate.setHours(hours, minutes, 0)
        const today = new Date()

        // Para reservaciones de fechas anteriores a la actual
        const appointmentDateArg = new Date(appointmentDate.getTime() - 3 * 60 * 60 * 1000)
        const nowInArg = new Date( new Date().getTime() - 3 * 60 * 60 * 1000)
        if(appointmentDateArg < nowInArg) throw new Error(`No se puede agendar citas para fechas pasadas`)

        // Para reservaciones con menos de 24 horas
        const diffMiliSeconds = appointmentDate.getTime() - today.getTime() 
        const diffInHours = diffMiliSeconds / (1000 * 60 * 60)
        if (diffInHours < 24) throw new Error(`No se puede agendar citas con al menos 24 horas de antelación`)

        // Para validar reservaciones de fines de semana
        const dayOnWeek = appointmentDateArg.getUTCDay()
        if(dayOnWeek === 5 || dayOnWeek === 6) throw new Error(`No se puede agendar citas los fines de semana`)

        // Para validar horario de 8:00 a 18:00
        if(hours < 8 || hours > 18) throw new Error(`Las citas deben de agendarse entre las 8am y las 6pm`)
    },

    validateExistingAppoinment: async function(userId: number, date: Date, time: string): Promise<void> {
        
      const appointmentFound = await this.findOne({
            where: {
                user: {
                    id: userId
                },
                date: date,
                time: time
            }
        })

        if(appointmentFound) throw new Error(`La cita con Fecha: ${date} y hora ${time} ya exite para el usuario con id ${userId}`)



    }




})