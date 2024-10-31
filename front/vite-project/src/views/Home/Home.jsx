import styles from './Home.module.css';
import psychologyImage from '../Home/img.jpg'; 

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenidos a Nuestro Espacio de Psicología</h1>
      <p className={styles.description}>
        Aquí encontrarás una sesión para reservar una cita de Psicología y así poder apoyarte a mejorar tu bienestar emocional y mental.
        Nuestro equipo de profesionales está comprometido en ayudarte en tu proceso personal.
      </p>
      <img src={psychologyImage} alt="Imagen de Psicología" className={styles.image} />
      <p className={styles.footer}>
        ¡Explora nuestros recursos y descubre cómo trabajar en tu salud mental!
      </p>
    </div>
  );
};

export default Home;
