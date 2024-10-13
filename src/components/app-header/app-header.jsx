
import React from 'react';
import styles from './app-header.module.css';


export const AppHeader = (user) => {
  const regUser = {...user.user.user}  
 
  return (
    <header className={styles.header}>      
      <div>
        <p>{regUser.username}</p>
        <img src={regUser.useravatar} alt="avatar" className={styles.avatar}/>
      </div>   
      
    </header>
  );
};
