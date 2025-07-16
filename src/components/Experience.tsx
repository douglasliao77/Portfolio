import styles from '../styles/Experience.module.css';

export default function Experience () {

const events = [
    { title: 'Master Thesis | Ericsson', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { title: 'Software Developer Intern | Ericsson', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { title: 'Course Assistant | Linköping University', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { title: 'Research Assistant', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { title: 'Bachelor Thesis', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
    { title: '2007', text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci...' },
  ];
    return (
        <section className={styles.ExperienceContainer}>
        <h1 className={styles.aboutHeading}>Professional Experience</h1>
        <div className={styles.timeline}>
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`${styles.container} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.content}>
                <h1>{event.title}</h1>
                <p>{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
}

