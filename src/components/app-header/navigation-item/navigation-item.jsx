import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navigation-item.module.css";

export const NavigationItem = ({ link, text }) => {
  return (    
      <li className={styles.item} key={text}>
        <NavLink to={link} className={({ isActive  }) => isActive ? styles.link_active : styles.link}>
          <p>{text}</p>
        </NavLink>
      </li>
    
  );
}
