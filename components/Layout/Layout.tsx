import React from "react";
import Footer from "../LandingLayout/LandingLayout";
import styles from "../Layout/Layout.module.css";

// The main layout of the page
function Layout({ preview, children }: { preview: string, children: React.ReactNode}): JSX.Element {
  return (
      <>
        <div className={styles.container}>
          <main>{children}</main>
          <Footer />
        </div>
      </>
  );
}

export default Layout;
