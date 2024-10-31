/* eslint-disable no-unused-vars */
import PropTypes from "prop-types"
import styles from "../Turno/Turno.module.css"
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import Swal from "sweetalert2";

const Turno = ({id, time, date, status}) => {

    const { cancelAppointment} = useContext(UsersContext)

    const handleCancel = async () => {
        try {
            await cancelAppointment(id)
            Swal.fire({
                icon: "warning",
                color: "red",
                title: "Turno cancelado con éxito"
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "No se pudo cancelar el turno, intentelo nuevamente"
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.appointmentCard}>
                <div className={styles.appointmentHeader}>
                    <h3>Turno</h3>
                    <span className={status === 'active' ? styles.statusActive : styles.statusInactive}>{status}</span>
                    
                </div>
                <div className={styles.appointmentDetails}>
                    <h4>Fecha: <br /> {date} </h4>
                    <h4>Hora: <br />{time} </h4>
                </div>
                <div className={styles.divCancelButton}>
                    <button 
                    className={`${styles.cancelButton} ${status === "cancelled" ? styles.disable: ""}`}
                    onClick={handleCancel}
                    disabled={status === "cancelled"}
                    > Cancelar</button>
                </div>
            </div>
        </div>
        
    )
};
Turno.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}
export default Turno;