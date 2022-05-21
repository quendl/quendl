import { NextPage } from "next";
import react from "react";
import styles from "./login.module.css";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <>
     <h1 className={styles.title}>Login</h1>
    </>
  );
};

export default Login;
