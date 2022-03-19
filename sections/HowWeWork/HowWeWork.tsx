import Image from "next/image";
import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>How we work</h3>
        <p>
          With software expertise at quendl, you can rest assured you are in good
          hands at every stage of the process.
        </p>
      </div>
      <div className={styles.flex}>
          <div className={styles.cardContainer}>
            <Image
                src="/images/card2.svg"
                alt={`card icon for second card`}
                className={styles.cardIcon}
                height={245}
                width={245}
            />
            <h4>Plan</h4>
            <div className={styles.card}>
              The definition helps us to know your vision and business needs
              before we can propose a software solution to you. Every business has
              its own unique needs, so at quendl, we spend time to understand your
              business.
            </div>
          </div>
          <div className={styles.cardContainer}>
            <Image
                src="/images/card2.svg"
                alt={`card icon for second card`}
                className={styles.cardIcon}
                height={245}
                width={245}
            />
            <h4>Design</h4>
            <div className={styles.card}>
              The definition helps us to know your vision and business needs
              before we can propose a software solution to you. Every business has
              its own unique needs, so at quendl, we spend time to understand your
              business.
            </div>
          </div>
          <div className={styles.cardContainer}>
            <Image
                src="/images/card2.svg"
                alt={`card icon for second card`}
                className={styles.cardIcon}
                height={245}
                width={245}
            />
            <h4>Build</h4>
            <div className={styles.card}>
              The definition helps us to know your vision and business needs
              before we can propose a software solution to you. Every business has
              its own unique needs, so at quendl, we spend time to understand your
              business.
            </div>
          </div>
          <div className={styles.cardContainer}>
            <Image
                src="/images/card2.svg"
                alt={`card icon for second card`}
                className={styles.cardIcon}
                height={245}
                width={245}
            />
            <h4>Deliver</h4>
            <div className={styles.card}>
              The definition helps us to know your vision and business needs
              before we can propose a software solution to you. Every business has
              its own unique needs, so at quendl, we spend time to understand your
              business.
            </div>
          </div>
      </div>
    </section>
  );
}
