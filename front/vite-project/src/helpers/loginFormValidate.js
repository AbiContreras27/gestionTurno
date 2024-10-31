export const loginFormValidate = (input) => {
    const errors = {};

    if (!input.username.trim()) {
        errors.username = "Username es requerido";
    }

    if (!input.password.trim()) {
        errors.password = "Password es requerido";
    } else if (input.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
};