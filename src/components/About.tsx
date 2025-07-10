import styles from '../styles/About.module.css';
import Lottie from 'lottie-react';
import footballJuggling from '../assets/football.json';

export default function About() {
  return (
    <section className={styles.aboutSection}>
        <h1 className={styles.aboutHeading}>About Me</h1>

        <div className={styles.aboutContainer}>
            {/* Text content */}
            <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>Hello, I'm Douglas!</h2>
            <p className={styles.aboutDescription}>
                I am a passionate software developer with experience building web apps and creative projects. I enjoy coding, learning new tech, and sharing knowledge.
            </p>
            </div>

            {/* Animation beside the text */}
            <div className={styles.aboutAnimation}>
            <Lottie animationData={footballJuggling} loop={true} />
            </div>


        </div>

      {/* Stats */}
      <div className={styles.aboutStats}>
        <div className={styles.statBox}>
          <p className={styles.statNumber}>15+</p>
          <p className={styles.statLabel}>Projects</p>
        </div>

        <div className={styles.statBox}>
          <p className={styles.statNumber}>30+</p>
          <p className={styles.statLabel}>Videos</p>
        </div>

        <div className={styles.statBox}>
          <p className={styles.statNumber}>3+</p>
          <p className={styles.statLabel}>Years Experience</p>
        </div>
      </div>
    </section>
  );
}
