import { useContext, useEffect } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "../MisTurnos/MisTurnos.module.css";
import { UsersContext } from "../../context/UsersContext";
import SinTurnos from "../MisTurnos/SinTurnos"

const MisTurnos = () => {
    const { getUserAppointments, user, userAppointments } = useContext(UsersContext);

    useEffect(() => {
        if (user) {
            getUserAppointments(user);
        }
    }, []);

   

    return (
        <div>
            <h1>Mis Reservaciones</h1>
            <div className={styles.container}>
                {Array.isArray(userAppointments) && userAppointments.length > 0 ? (
                    userAppointments.map((turno) => (
                        <Turno
                            key={turno.id}
                            id={turno.id}
                            date={turno.date}
                            time={turno.time}
                            status={turno.status}
                        />
                    ))
                ) : (
                    <SinTurnos/>
                )}
            </div>
        </div>
    );
};

export default MisTurnos;
