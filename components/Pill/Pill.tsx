import React from 'react';
import {NextPage} from "next";
import styles from "./Pill.module.css";

const Pill: NextPage = () => {
    return (
        <>
            <div className={styles.pillContainer}>
                <div className={styles.pill}>
                    Fund Quendl and help it keep growing
                </div>
            </div>
        </>
    );
};
export default Pill;