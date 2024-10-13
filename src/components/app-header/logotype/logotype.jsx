
import React from 'react';
import logo from "../../../images/logo.svg"
import styles from './logotype.module.css';


export const Logotype = () => {
 
  return (
    <div className={styles.list}>
        <img src={logo} alt="logo" className={styles.logo}/>

    </div>
      
  );
};
