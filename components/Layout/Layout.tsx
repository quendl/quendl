import React from "react";
import styles from "../Layout/Layout.module.css";
import Header from "../HeaderLayout/Header";
import Head from "next/head";
// The main layout of the page
function Layout({
  children,
}: {
  preview: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Head>
        <title>Quendl</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
