import { useContext } from "react";
import styles from "../Navbar/Navbar.module.css"
import {Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { UsersContext } from "../../context/UsersContext";
import { useLocation } from "react-router-dom";


function Navbar(){
    const location = useLocation();

    const { logOutUser} = useContext(UsersContext)

    const navigate = useNavigate()
    const handleLogOut = () => {
        logOutUser()
        Swal.fire({
            icon: "Warning",
            title: "Tu sesión fue cerrada correctamente"
        })
        navigate("/login")
    }

    return (
        <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="https://enfermeriatv.es/wp-content/uploads/2021/10/saludmental.jpg" alt="Logo" />
                </div>
                <div className={styles.navbar}>
                    <nav>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <Link to="/" className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}>
                                    Inicio
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link to="/misturnos" className={`${styles.navLink} ${location.pathname === "/misturnos" ? styles.active : ""}`}>
                                    Mis Turnos
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link to="/agendarturno" className={`${styles.navLink} ${location.pathname === "/agendarturno" ? styles.active : ""}`}>
                                    Reservar Cita
                                </Link>
                            </li>
                            <li className={`${styles.navItem} ${styles.navLink}`} onClick={handleLogOut}>
                                Salir
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

    )
}

export default Navbar;