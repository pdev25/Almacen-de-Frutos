import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarLink}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to="Productos">Productos</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to="Contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
