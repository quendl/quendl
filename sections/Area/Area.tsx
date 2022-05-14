import react from "react";
import Image from "next/image";
import styles from "../Area/Area.module.css";
import mascot from "../../public/images/mascot.png";
import Link from "next/link";

// This is the code being displayed in the middle of the landing page.
function Area() {
  return (
    <>
      <div className={styles.boxContainer}>
          <div className={styles.box}>
              <div className={styles.boxLogo}><Image src={mascot} width={300} height={300}/></div>
              <div>
                  <h1 className={styles.boxText}>Ready to change the world?<br/>
                      its just one click away ...
                  </h1>
                  <Link href={""}><p className={styles.boxButton}>SignUp</p></Link>
              </div>
          </div>
      </div>
    </>
  );
}

export default Area;
