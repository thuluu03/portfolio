import React from "react";
import styles from "./navbarStyle.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarHeader + " blue"}>
                Thu's Portfolio
            </div>
            <div className={styles.navbarWrapper}>
                <a className={styles.navbarLink} href="#hero">Home</a>
                <a className={styles.navbarLink} href="#projects">Projects</a>
                <a className={styles.navbarLink} href="#about-me">About Me</a>
            </div>
        </div>
    )
}

export default Navbar;