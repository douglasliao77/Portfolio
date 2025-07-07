
import styles from '../styles/LineUp.module.css';
import campnou from '../assets/images/barcelona.jpg'
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LineUp () {
    const [showBox, setShowBox] = useState(false);
    const start_line = 6;

    const renderField = (start_line: number, width_line: number) => {
        const paths = [
            { d: "M 50 100 L 0 100", delay: 0, width: width_line },     // Bottom left-right
            { d: "M 50 100 L 100 100", delay: 0, width: width_line },   // Bottom right-left
            { d: "M 0 100 L 0 0", delay: 0.8, width: width_line-1 },      // Left
            { d: "M 100 100 L 100 0", delay: 0.8, width: width_line-1 },  // Right
            { d: "M 100 0 L 50 0", delay: 1.6, width: width_line },     // Top right-left
            { d: "M 0 0 L 50 0", delay: 1.6, width: width_line },       // Top left-right
        ];
        
        return paths.map((line, i) => (
            <motion.path
                key={i}
                d={line.d}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                delay: start_line + line.delay,
                duration: 0.8,
                }}
                stroke="white"
                strokeWidth={line.width}
            />
        ));
    };

    return (
        <section className={styles.container}>
            
            <img src={campnou} alt="Camp Nou Stadium" className={styles.background} />
            
            <div onClick={() => setShowBox(true)}>
                <div className={styles.overlay}></div>
            </div>
            
            {!showBox && (
                <div 
                className={styles.clickOnMe} 
                onClick={() => setShowBox(true)}
                >
                    <h1>Click to start</h1>
                </div>
            )}

            {showBox && (
                <motion.div
                className={styles.box}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "70%", opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                    >
                    <motion.div 
                        className={styles.bar}
                        initial= {{width: '0%' }}
                        animate= {{ width: '100%' }}
                        transition={ { duration: 1, delay: 3, ease: 'easeInOut'}}
                    >
                        <motion.div 
                            style={{ overflow: 'hidden' }}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 5, ease: 'easeInOut' }}
                            >
                            <p className={styles.barText}>Douglas FC</p>

                            <motion.div
                                className={styles.revealLine}
                                initial={{ left: 0 }}
                                animate={{ left: '100%' }}
                                transition={{ duration: 1, delay: 5, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </motion.div> 

                    <div className={styles.playerDisplay}> </div>
                    <div className={styles.planField}>                     
                        <div className={styles.planLine}>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                {renderField(start_line, 3)}
                            </svg>

                            

                            <div className={styles.goalkeeperArea}>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                {renderField(start_line, 6)}
                            </svg>
                            </div>
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
                </motion.div>
            )}
        </section>
    );
}