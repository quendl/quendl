import React from "react";
import styles from "../LandingPage/Landing.module.css";
import { Helmet } from "react-helmet";

// <Image src="/images/ang.jpg" width={60} height={60} />

function Landing() {
  return (
    <div>
    <Helmet title="Quendl • Home" defer={false} />
    <div className={styles.home}>
      <a className={styles.home}href="#home">Home</a>
      <a href="#news">Community</a>
      <a href="#contact">Contact</a>
      <a href="#about">Github</a>
    </div>
    <h1 className={styles.title}>Quendl</h1>
    <h2 className={styles.subtitle}>A tool for humans and computers</h2>

    <a className={styles.headbutton}>Install</a>
    <a className={styles.headbutton}>Learn</a>
    <a className={styles.headbutton}>Source</a>
    
  </div>
  );
}

export default Landing;
