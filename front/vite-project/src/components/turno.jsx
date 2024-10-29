import styles from "../components/Turno.module.css"

const Turno = ({id, time, date, description, status}) => {
    return (
        <div className={styles.container}>
            <h3>Turno</h3>
            <h4>Fecha: {date} </h4>
            <h4>Hora: {time} </h4>
            <h4>Descripción: {description} </h4>
            <h4>Status: {status} </h4>
        </div>
        
    )
};

export default Turno;