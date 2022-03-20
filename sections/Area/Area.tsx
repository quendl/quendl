import react from "react";
import Image from "next/image";

import styles from "../Area/Area.module.css";

// This is the code being displayed in the middle of the landing page.
function Area() {
  return (
    <>
      <p className={styles.ptag}>Hello, add your Code here</p>
    </>
  );
}

export default Area;
