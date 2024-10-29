import styles from "../components/Navbar.module.css"

const Navbar = () => {
    return (
        <div> 
            <div className={styles.navbar}>
                <a href="#">Inicio</a>
                <a href="#">Mis turnos</a>
                <a href="#">Acerca De.</a>
                <a href="#">Contactos</a>
            </div>
        </div>
    )
}

export default Navbar;