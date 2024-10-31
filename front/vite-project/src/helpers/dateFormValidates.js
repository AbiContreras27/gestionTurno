const isTimeValid = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const totalMinutes = hour * 60 + minute;
    const startTime = 8 * 60;
    const endTime = 18 * 60;

    return totalMinutes >= startTime && totalMinutes <= endTime;
};

export const dateFormValidates = (inputs) => {
    const errors = {};
    const { date, time } = inputs;
    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    if (!date) {
        errors.date = "La fecha es obligatoria";
    } else if (selectedDateTime < now) {
        errors.date = "No se pueden seleccionar fechas pasadas";
    } else if (selectedDateTime < twentyFourHoursLater) {
        errors.date = "No se pueden reservar citas con menos de 24 horas de antelación";
    } else if (selectedDateTime.getDay() === 0 || selectedDateTime.getDay() === 6) {
        errors.date = "No se pueden reservar citas los fines de semana";
    }

    if (!time) {
        errors.time = "La hora es obligatoria";
    } else if (!isTimeValid(time)) {
        errors.time = "La hora de la cita debe estar entre las 8 AM y las 6 PM";
    }

    return errors;
};
