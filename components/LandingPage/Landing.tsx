import React from "react";
import styles from "../LandingPage/Landing.module.css";
import { Helmet } from "react-helmet";

// <Image src="/images/ang.jpg" width={60} height={60} />

// This is the main layout of the landing page
// Landing Layout takes this and puts it in the header (upper part of the website)
function Landing() {
  return (
    <div>
      <Helmet title="Quendl • Home" defer={false} />
      <div className={styles.home}>
        <a className={styles.home} href="#home">
          Home
        </a>
        <a href="#home">Community</a>
        <a href="#home">Github</a>
        <a href="#home">Contact</a>
      </div>
      <h1 className={styles.title}>Quendl</h1>
      <h2 className={styles.subtitle}>A tool for humans and computers</h2>
      <div className={styles.bar}>
        <a className={styles.headbutton}>Install</a>
        <a className={styles.headbutton}>Learn</a>
        <a className={styles.headbutton}>Source</a>
      </div>
    </div>
  );
}

export default Landing;
