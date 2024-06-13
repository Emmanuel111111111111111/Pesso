import React from "react";

import { getImageUrl } from "../../utilis";
import styles from "./Home2.module.css";

export const Home2 = () => {
    return(
        <div className={styles.biggerDiv}>
        <div className={styles.About}>
        <div className={styles.bread}>
            <h1>Master Your <span className={styles.red}>Finances</span>,Propel your business</h1>
            <p>The ultimate AI Driven financial management solution.Seize control,gain insightful data,
                and propel your success to new heights.
            </p>
            <button className={styles}>
                Get Started
            </button>  
        </div>
        </div>
        </div>    
    )
}