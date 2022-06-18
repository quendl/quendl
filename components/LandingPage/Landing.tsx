import React from "react";
import styles from "./Landing.module.css";
import { Helmet } from "react-helmet";
import Footer from "../FooterLayout/Footer";
import Pill from "../Pill/Pill";
import Image from "next/image";
// <Image src="/images/ang.jpg" width={60} height={60} />
import logo from "../../public/images/logo.png";

// This is the main layout of the landing page
// Landing Layout takes this and puts it in the header (upper part of the website)
function Landing() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.logoDiv}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Logo" width={300} height={250} />
          </div>
        </div>
        <div className={styles.textDiv}>
          <div>
            <Helmet title="Quendl • Home" defer={false} />
            <div className={styles.spinner}></div>
            <h1 className={styles.title}>Quendl</h1>
            <h2 className={styles.subtitle}>A tool for humans and computers</h2>
            <div className={styles.bar}>
              <a className={styles.headbutton}>Install</a>
              <a className={styles.headbutton}>Learn</a>
              <a className={styles.headbutton}>Source</a>
            </div>
          </div>
        </div>
      </div>
      <Pill />
      <Footer />
    </>
  );
}

export default Landing;
