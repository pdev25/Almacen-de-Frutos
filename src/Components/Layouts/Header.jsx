import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.webp" alt="logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </header>
    </div>
  );
};

export default Header;
