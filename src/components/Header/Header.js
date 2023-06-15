import React from "react";

import resumeSvg from "../../assets/cv-svgrepo-com.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        
        <p className={styles.heading}>
          Get your job winning <span>resume</span> here!
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
