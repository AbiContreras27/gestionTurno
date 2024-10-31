import styles from '../NotFound/NotFound.module.css'; 
import {Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Página No Encontrada</h1>
      <p className={styles.message}>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className={styles.homeButton}>Volver al Home</Link>
    </div>
  );
};

export default NotFound;
