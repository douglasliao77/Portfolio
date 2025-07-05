

import styles from '../styles/Introduction.module.css'
import campnou from '../assets/images/barcelona.jpg'

export default function Introduction() {
  return (
    <section className={styles.container}>
      <img src={campnou} alt="Camp Nou Stadium" className={styles.background} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Welcome to My Portfolio</h1>
      </div>
    </section>
  )
}
