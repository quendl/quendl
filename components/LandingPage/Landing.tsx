import React from "react";
import styles from "./Landing.module.css";
import { Helmet } from "react-helmet";
// <Image src="/images/ang.jpg" width={60} height={60} />

// This is the main layout of the landing page
// Landing Layout takes this and puts it in the header (upper part of the website)
function Landing() {
  return (
    <div>
      <Helmet title="Quendl • Home" defer={false} />
      <div className={styles.spinner}></div>
      <h1 className={styles.title}>Quendl</h1>
      <h2 className={styles.subtitle}>A tool for humans and computers</h2>
      <div className={styles.bar}>
        <a className={styles.headbutton}>
          Install
        </a>
        <a className={styles.headbutton}>Learn</a>
        <a className={styles.headbutton}>Source</a>
      </div>
    </div>
  );
}

export default Landing;
