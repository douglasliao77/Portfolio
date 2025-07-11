import { Typewriter } from 'react-simple-typewriter';
import styles from '../styles/Introduction.module.css';
import campnou from '../assets/images/barcelona.jpg';

export default function Introduction() {

  return (
    <section id="intro" className={styles.container}>
      <img src={campnou} alt="Camp Nou Stadium" className={styles.background} />

      <div className={styles.content}>
        <h1>
          <Typewriter
            words={[
              'Hi, I am Douglas',
              'Hej, jag heter Douglas',
              'Hola, soy Douglas',
              'Bonjour, je suis Douglas',
              'こんにちは、ダグラスです',
              '你好，我是Douglas'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={140}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
      </div>

  
    </section>
  );
}
