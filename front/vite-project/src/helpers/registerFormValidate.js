export const registerFormValidate = (input) => {
    const errors = {};

    if (!input.name.trim()) {
        errors.name = "Nombre es requerido";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(input.name)) {
        errors.name = "Nombre no válido";
    }

    if (!input.email.trim()) {
        errors.email = "Email es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(input.email)) {
        errors.email = "Email no es válido";
    }

    if (!input.birthdate.trim()) {
        errors.birthdate = "Fecha de nacimiento es requerida";
    } else {
        const birthdate = new Date(input.birthdate);
        const today = new Date();
        if (birthdate >= today) {
            errors.birthdate = "Fecha de nacimiento no puede ser en el futuro";
        }
    }

    if (!input.nDni.trim()) {
        errors.nDni = "DNI es requerido";
    } else if (!/^\d+$/.test(input.nDni)) {
        errors.nDni = "DNI debe contener solo números";
    }

    if (!input.username.trim()) {
        errors.username = "Nombre de usuario es requerido";
    } else if (input.username.length < 3) {
        errors.username = "Nombre de usuario debe tener al menos 3 caracteres";
    }

    if (!input.password.trim()) {
        errors.password = "Contraseña es requerida";
    } else if (input.password.length < 6) {
        errors.password = "Contraseña debe tener al menos 6 caracteres";
    }

    return errors;
};
