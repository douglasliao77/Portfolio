import styles from '../styles/Introduction.module.css';
import crack from '../assets/images/crack.webp';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Introduction() {
  
  return (
    <section id="intro" className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.mainContent}>
        <h1>
            <span className={styles.software}>SOFTWARE</span><br />
            <span className={styles.developer}>&nbsp;DEVELOPER</span>
        </h1>

        <p className={styles.description}>
          After one cup of coffee, I can probably fix that bug I created yesterday. 
          After two, I will convince you it was a feature all along.
        </p>


        <div className={styles.iconContainer}>
      <a
        href="https://github.com/douglasliao77"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:douglasliao77@gmail.com"
        className={styles.iconLink}
        aria-label="Gmail"
      >
        <MdEmail />
      </a>
      <a
        href="https://linkedin.com/in/douglasliao"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
        </div>
        
      <img src={crack} alt="Crack effect" className={styles.crack} />
      </div>
    </section>
  );
}
