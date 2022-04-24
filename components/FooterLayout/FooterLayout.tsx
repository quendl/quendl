import styles from "./FooterLayout.module.css";
import Container from "../Container/Container";
import Area from "../../sections/Area/Area";

// INFO: Code for landing page between footer and header (h1) is in the Area.tsx file
function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <Area />
      </footer>
    </>
  );
}

export default Footer;

