import styles from "../CallToAction/CallToAction.module.css";
import React from "react";

export default function CallToAction() {
  return (
    <div className={styles.container}>
      <h4>Ready to build something great together?</h4>
      <button>Get Started</button>
    </div>
  );
}
