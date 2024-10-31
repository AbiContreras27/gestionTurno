import styles from "../Login/Login.module.css";
import { useFormik } from "formik";
import {loginFormValidate} from "../../helpers/loginFormValidate"
import Swal from "sweetalert2";
import {Link, useNavigate } from "react-router-dom"
import { UsersContext } from "../../context/UsersContext";
import { useContext } from "react";

const Login = () => {

    const {loginUser } = useContext(UsersContext)


    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validate: loginFormValidate,
        onSubmit: async (values) => {

            try {
                await loginUser(values)
                    Swal.fire({
                        icon: "success",
                        title: "Inicio de sesión exitoso",
                    });
                    navigate("/")  
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Usuario o contraseña invalidos",
                    text: "intente nuevamente",
                })
            }
        }
    })
        
    return (
        
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <h2 className={styles.formTitle}>Inicio de sesión</h2>

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
                Iniciar Sesión
            </button>
            <br /><br />
            <label>Aún no tienes cuenta ? <Link to="/register">Regístrate </Link></label>
        </form>
    );
};

export default Login;