import styles from '../styles/Introduction.module.css';

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
        </div>
        <div className={styles.subContent}>
          <h1>
       
          <span> &lt; Span &gt;</span>
            
          <br></br>

          <span className={styles.spanContent}>
            &nbsp;&nbsp;&nbsp;&nbsp;  Glad you found your way here!! 
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; It is mostly code. Sometimes it even works.
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; Hope you like it.
          </span>

          <br></br>

          <span> &lt; Span &gt;</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
