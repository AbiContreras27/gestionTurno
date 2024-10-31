import { AppDataSource } from "../config/data-source"
import { Appointment } from "../entities/appointment.entity";
import moment from "moment-timezone";

export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
    validateAllowAppointment: function(date: Date, time: string): void {
        const [hours, minutes] = time.split(":").map(Number);
 
    
        // Crear un objeto de fecha para la cita usando el objeto Date
        const fecha = new Date(date);
        fecha.setHours(hours, minutes, 0);
        
        // Convertir a formato ISO
        const fechaISO = fecha.toISOString();
        console.log("Fecha en formato ISO:", fechaISO);
    
        // Crear un objeto moment para la cita en la zona horaria de Argentina
        const appointmentDate = moment.tz(fechaISO, "America/Argentina/Buenos_Aires");
    
        // Obtener la fecha y hora actual en la zona horaria de Argentina
        const nowInArg = moment.tz("America/Argentina/Buenos_Aires");
    
        // Verificar las horas de la cita
        if (hours < 8 || hours > 18) throw new Error(`Las citas deben de agendarse entre las 8am y las 6pm`);
    
        // Comprobar si la cita es en el pasado
        if (appointmentDate.isBefore(nowInArg)) throw new Error(`No se puede agendar citas para fechas pasadas`);
    
        // Calcular la diferencia en horas
        const diffInHours = appointmentDate.diff(nowInArg, 'hours');
        if (diffInHours < 24) throw new Error(`No se puede agendar citas con al menos 24 horas de antelación`);
    
        // Comprobar si la cita cae en fin de semana
        const dayOnWeek = appointmentDate.day(); // Usar day() para obtener el día de la semana
        if (dayOnWeek === 0 || dayOnWeek === 6) throw new Error(`No se puede agendar citas los fines de semana`);
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