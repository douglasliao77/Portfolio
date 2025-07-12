import styles from '../styles/Experience.module.css';

export default function Experience () {

const events = [
    { year: '2017', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { year: '2016', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { year: '2015', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { year: '2012', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { year: '2011', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { year: '2007', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
  ];
    return (
        <section className={styles.ExperienceContainer}>
        <h1 className={styles.aboutHeading}>Professional Experience</h1>
        <div className={styles.timeline}>
          {events.map((event, index) => (
            <div
              key={event.year}
              className={`${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.content}>
                <h1>{event.year}</h1>
                <p>{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
}

