import { useEffect, useState } from "react";
// import misTurnos from "../helpers/myAppointments"
import Turno from "../components/Turno"
import axios from 'axios';
import styles from "../components/Turno.module.css"

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);

    useEffect(  () => {
        axios.get('http://localhost:3000/appointments')
        .then(response => {
            setTurnos(response.data.data)
        })
        .catch(error => console.log(error) )
    }, [])

    return (
        <div>
            <h1>Mis Reservaciones</h1>
            <div className={styles.container}>
                {turnos.length > 0 ? turnos.map((turno) =>
                <Turno 
                    key={turno.id}
                    id= {turno.id}
                    date= {turno.date}
                    time= {turno.time}
                    status= {turno.status}
                    />
                ) : (
                    <h1>No hay turnos para mostrar</h1>
                )
                
                }
            </div>
        </div>
    )
}


export default MisTurnos;