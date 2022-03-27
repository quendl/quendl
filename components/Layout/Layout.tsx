import React from "react";
import Footer from "../FooterLayout/FooterLayout";
import styles from "../Layout/Layout.module.css";
import Header from "../HeaderLayout/HeaderLayout";
// The main layout of the page
function Layout({
  preview,
  children,
}: {
  preview: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
