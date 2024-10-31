import styles from "../Register/Register.module.css";
import { useFormik } from "formik";
import {registerFormValidate} from "../../helpers/registerFormValidate"
import Swal from "sweetalert2";
import axios from 'axios';
import {Link } from "react-router-dom"

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: ""
        },
        validate: registerFormValidate, 
        onSubmit: (values) => {
            axios.post('http://localhost:3000/users/register', values)
                .then(res => {
                    if(res.status === 201) {
                        Swal.fire({
                            icon: "success",
                            title: "Usuario registrado correctamente"
                        });
                    }
                })
                .catch(error => console.log(error));
        }
    });

    return (
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <h2 className={styles.formTitle}>Formulario de Registro</h2>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nombre: </label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre y apellido"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <label className={styles.errorLabel}>{formik.errors.name}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email: </label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <label className={styles.errorLabel}>{formik.errors.email}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Fecha de nacimiento: </label>
                <input
                    className={styles.formInput}
                    type="date"
                    name="birthdate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birthdate}
                />
                {formik.touched.birthdate && formik.errors.birthdate ? (
                    <label className={styles.errorLabel}>{formik.errors.birthdate}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>DNI: </label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="nDni"
                    placeholder="Ingresa tu DNI"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nDni}
                />
                {formik.touched.nDni && formik.errors.nDni ? (
                    <label className={styles.errorLabel}>{formik.errors.nDni}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Username: </label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="username"
                    placeholder="Ingresa tu nombre de Usuario"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                    <label className={styles.errorLabel}>{formik.errors.username}</label>
                ) : null}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Password: </label>
                <input
                    className={styles.formInput}
                    type="password"
                    name="password"
                    placeholder="*********"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <label className={styles.errorLabel}>{formik.errors.password}</label>
                ) : null}
            </div>

            <button
                className={styles.formButton}
                type="submit"
                disabled={Object.keys(formik.errors).length > 0 || !formik.isValid}
            >
                Registrar
            </button>
            <br /><br />
            <label>Ya tienes una cuenta ? <Link to="/login">Login </Link></label>
        </form>
    );
};

export default Register;
