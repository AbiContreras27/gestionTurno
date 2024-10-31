import { useContext } from 'react';
import styles from '../AgendarTurno/AgendarTurno.module.css';
import { useFormik } from 'formik';
import { dateFormValidates } from '../../helpers/dateFormValidates';
import Swal from 'sweetalert2';
import { UsersContext } from '../../context/UsersContext';

const AgendarTurno = () => {
    const { createdAppointment } = useContext(UsersContext);

    const formik = useFormik({
        initialValues: {
            date: "",
            time: ""
        },
        validate: dateFormValidates,
        initialErrors: {
            date: "La fecha es requerida",
            time: "La hora es requerida"
        },
        onSubmit: async (values) => {
            try {
                await createdAppointment(values);
                Swal.fire({
                    icon: "success",
                    title: "Turno agendado exitosamente"
                });
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: `${error.response.data.details}`,
                    text: "Intentelo nuevamente"
                });
            } finally {
                formik.resetForm();
            }
        }
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Registrar Nueva Cita</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Fecha</label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        min={new Date().toISOString().split("T")[0]}
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        className={formik.touched.date && formik.errors.date ? styles.errorInput : styles.input}
                    />
                    {formik.errors.date && <div className={styles.error}>{formik.errors.date}</div>}
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Hora</label>
                    <input
                        id="time"
                        type="time"
                        name="time"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.time}
                        className={formik.touched.time && formik.errors.time ? styles.errorInput : styles.input}
                    />
                    {formik.errors.time && <div className={styles.error}>{formik.errors.time}</div>}
                </div>

                <button
                    type="submit"
                    className={styles.button}
                    disabled={Object.keys(formik.errors).length > 0}
                >
                    Registrar Cita
                </button>
            </form>
        </div>
    );
};

export default AgendarTurno;
