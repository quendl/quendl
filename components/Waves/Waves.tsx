import React from 'react';
import styles from "./Waves.module.css";

const defaultImage = "/images/wave--infinite.svg";

interface FooterProps {
    flip: boolean,
    image: string 
}

function Waves({ flip, image }: FooterProps): JSX.Element {
  return (
       <div
           className={`${styles.waveContainer} ${
               flip ? styles.waveContainerTop : styles.waveContainerBottom
           }`}
       >
           <div
               className={styles.wave}
               style={{
                   backgroundImage: `url(${image || defaultImage})`,
               }}
           />
           <div
               className={styles.wave}
               style={{
                   backgroundImage: `url(${image || defaultImage})`,
               }}
           />
           <div
               className={styles.wave}
               style={{
                   backgroundImage: `url(${image || defaultImage})`,
               }}
           />
       </div>
  );
}

export default Waves;
