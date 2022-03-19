import React from "react";
import styles from "./Container.module.css";

// This is the main layout of the whole website 
export default function Container({ children }: { children: JSX.Element[] }) {
  return <div className={styles.container}>{children}</div>;
}
