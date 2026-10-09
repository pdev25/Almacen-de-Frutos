import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer>
        <div className={styles.footer}>
          <nav>
            <ul className={styles.footerNav}>
              <li className={styles.footerItem}>
                <a href="#acerca" className={styles.footerLink}>
                  Nosotros
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Sucursales
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Franquicias
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Recetas
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Sucursales
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Sucursales
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className={styles.footerNav}>
              <li className={styles.footerItem}>
                <a href="#acerca" className={styles.footerLink}>
                  Costos y Formas de envío
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Preguntas Frecuentes
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Cómo Comprar
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Políticas de Privacidad
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Formas de Pago
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Botón de arrepentimiento
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className={styles.footerNav}>
              <li className={styles.footerItem}>
                <a href="#acerca" className={styles.footerLink}>
                  Nosotros
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Sucursales
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Franquicias
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Recetas
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Sucursales
                </a>
              </li>
              <li className={styles.footerItem}>
                <a href="#privacidad" className={styles.footerLink}>
                  Sucursales
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>© Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
