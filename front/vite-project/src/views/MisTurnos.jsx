import { useState } from "react";
import misTurnos from "../helpers/myAppointments"
import Turno from "../components/turno"

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    return (
        <>
        <h1>Mis Reservaciones</h1>
        <div>
            {turnos.map((turno) => {
                return <Turno key={turno.id}
                {...turno}
                />
            })
                
            }
        </div>
        

        </>
    )
}


export default MisTurnos;