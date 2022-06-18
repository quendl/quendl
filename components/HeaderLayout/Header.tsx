import React from "react";
import styles from "../LandingPage/Landing.module.css";
import Link from "next/link";

// <Image src="/images/ang.jpg" width={60} height={60} />

// This is the main layout of the landing page
// Landing Layout takes this and puts it in the header (upper part of the website)
function Header() {
  return (
    <div>
      <div className={styles.home}>
        <Link href={"/"}>
          <a className={styles.home}>
            Home
          </a>
        </Link>
        <Link href={"#"}><a>Community</a></Link>
        <Link href={""}><a>Github</a></Link>
        <Link href={""}><a>Contact</a></Link>
      </div>
    </div>
  );
}

export default Header;
