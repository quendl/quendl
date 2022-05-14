import React from 'react';
import {NextPage} from "next";
import styles from "./Pill.module.css";

const Pill: NextPage = () => {
    return (
        <>
            <div className={styles.pillContainer}>
                <div className={styles.pill}>
                    Fund Crystal and help it keep growing at 0 open collective
                </div>
            </div>
        </>
    );
};
export default Pill;