import React, { useState, useContext } from "react";

import { getImageUrl } from "../../utilis";
import styles from "./Navbar.module.css";

export const Navbar = () => {
     
    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ solutionsOpen, setSolutionsOpen ] = useState(false);
    const [ solutionsMobileOpen, setSolutionsMobileOpen ] = useState(false);    

    return(
        <>
        <div className={styles.whole}>
            <nav className={styles.navbar}>
                <img src={getImageUrl("Pesso.png")} alt="" />
                <h1>PESSO</h1>
            </nav>    
    

                <div className={styles.folding}>
                    <div className={`${styles.onClose} ${menuOpen && styles.menuOpen}`} >

                        <ul className={styles.links}>
                            <li>
                                <a className={styles.link} href="/home">Home</a>
                            </li>
                            <li>
                                <a className={styles.link} href="/usecases">
                                    UseCases
                                         <img
                                            src={getImageUrl("greyDownAngle.png")} alt=""
                                        /> 
                                        </a>
                            </li>

                               
                            
                            <li>
                                <a className={styles.link} href="/features">
                                    Features
                                         <img
                                            src={getImageUrl("greyDownAngle.png")} alt=""
                                        /> 
                                        </a>
                            </li>
                            <li>
                                <a className={styles.link} href="/partner">
                                    Partner
                                </a>
                            </li>
                         
                        </ul>

                        <div className={styles.buttons}>
                            <a href="/login" className={styles.buttonOne}>Log in</a>
                            <a href="/createAccount" className={styles.buttonTwo}>Get Started</a>
                        </div>

                    </div>
                </div>
            

          
            
        </div>
        </>
    )
}
    
