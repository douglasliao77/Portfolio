import styles from '../styles/Background.module.css';
import campnou from '../assets/images/barcelona.jpg';

export default function Background(){
  return (
      <img 
        src={campnou} 
        alt="Camp Nou Stadium" 
        className={styles.background} 
      />
  );

};
