
import styles from '../styles/LineUp.module.css';
import campnou from '../assets/images/barcelona.jpg'


export default function LineUp () {
    return (
        <section className={styles.container}>
            <img src={campnou} alt="Camp Nou Stadium" className={styles.background}/>
            
            <div className={styles.box}>
                <div className={styles.bar}>
                    <p> Douglas Liao FC</p>
                </div> 
                <div className={styles.playerField}> </div>

                
                <div className={styles.planField}> 
                    <div className={styles.planLine}>
                        <div className={styles.goalkeeperArea}></div>
                    </div>

                    {/* Goalkeeper */}
                    <div className={styles.player} style={{ bottom: '10%', left: '50%' }}>Docker</div>

                    {/* Defenders */}
                    <div className={styles.player} style={{ bottom: '32%', left: '15%' }}>C#</div>
                    <div className={styles.player} style={{ bottom: '25%', left: '35%' }}>SQL</div>
                    <div className={styles.player} style={{ bottom: '25%', left: '65%' }}>.NET</div>
                    <div className={styles.player} style={{ bottom: '32%', left: '85%' }}>Java</div>

                    {/* Midfielders */}
                    <div className={styles.player} style={{ bottom: '50%', left: '30%' }}>R </div>
                    <div className={styles.player} style={{ bottom: '40%', left: '50%' }}>C++</div>
                    <div className={styles.player} style={{ bottom: '50%', left: '70%' }}>Python</div>

                    {/* Forwards */}
                    <div className={styles.player} style={{ top: '20%', left: '20%' }}>HTML/CSS</div>
                    <div className={styles.player} style={{ top: '27%', left: '50%' }}>JavaScript</div>
                    <div className={styles.player} style={{ top: '20%', left: '80%' }}>React</div>
                </div>
            </div>
        </section>
    );
}