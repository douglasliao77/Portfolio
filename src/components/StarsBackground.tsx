import React from 'react';
import styles from '../styles/StarsBackground.module.css';
import campnou from '../assets/images/barcelona.jpg';

const StarsBackground: React.FC = () => {
  return (
    <>
       <img src={campnou} alt="Camp Nou Stadium" className={styles.background} />
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.title}></div>
    </>
  );
};

export default StarsBackground;
