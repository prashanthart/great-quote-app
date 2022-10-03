import styles from "./Footer.module.css";
import React from "react";
import Insta from "../SVG/Insta";
import Fb from "../SVG/Fb";
import LinkedIn from "../SVG/LinkedIn";
// import Insta from "../components/SVG/Insta";
function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>Prashanth</h1>
      <ul className={styles.ul}>
        <li>
          <a
            className={styles.insta}
            href="https://www.instagram.com/i_m_prashanth_/"
          >
            <Insta />
          </a>
        </li>
        <li>
        <a
            className={styles.insta}
            href="https://www.facebook.com/prashanth.prince.75033/"
          >
            <Fb/>
          </a>

        </li>
        <li>
        <a
            className={styles.insta}
            href="https://www.linkedin.com/in/tatipally-prashanth-8a725a1b7/"
          >
            <LinkedIn/>
          </a>

        </li>
      </ul>
    </footer>
  );
}
export default Footer;
