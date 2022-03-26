import React from "react";
import styles from "../LandingPage/Landing.module.css";

// <Image src="/images/ang.jpg" width={60} height={60} />

// This is the main layout of the landing page
// Landing Layout takes this and puts it in the header (upper part of the website)
function Header() {
  return (
    <div>
      <div className={styles.home}>
        <a className={styles.home} href="">
          Home
        </a>
        <a href="">Community</a>
        <a href="">Github</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Header;
