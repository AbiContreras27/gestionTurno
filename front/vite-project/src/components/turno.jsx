import PropTypes from "prop-types"
import styles from "../components/Turno.module.css"

const Turno = ({id, time, date, status}) => {
    return (
        <div className={styles.appointmentCard}>
            <div className={styles.appointmentHeader}>
                <h3>Turno</h3>
                <span className={status === 'Active' ? styles.statusActive : styles.statusInactive}>{status}</span>
                
            </div>
            <div className={styles.appointmentDetails}>
                <h4>Fecha: {date} </h4>
                <h4>Hora: {time} </h4>
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