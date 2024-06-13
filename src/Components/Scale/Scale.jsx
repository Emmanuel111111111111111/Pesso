import React from "react";

import { getImageUrl } from "../../utilis";
import styles from "./Scale.module.css";

export const Scale = () => {
    return(
        <div className={styles.scale}>
        <div className={styles.word}>
           <h1>For <span className={styles.spa}>businesses</span> who create training videos at scale</h1>
           <img src={getImageUrl("Frame54.png")} alt="l" />
        </div>
        <div className={styles.bread}>
            <div className={styles.crumb}>
                <h1>Banking services</h1>
                <p>Pesso revolutionizes banking services by providing a comprehensive suite of tools.It enables
                    banks to streamline transactions, enhance customer account management,and optimize financial processes.
                    Real-time transactions tracking,seamless account integration, andnrobust security features ensure a superior
                    banking experience for both financial institutions and their clients.
                </p>
            </div>
            <div className={styles.img}>
                <img src={getImageUrl("Frame34.png")} alt="" />
            </div>
        </div>
        </div>
    )
}