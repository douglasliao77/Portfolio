import styles from '../styles/Skills.module.css';

interface SkillCardProp {
  source: string;
  title: string;
}

function SkillCard({ source, title }: SkillCardProp) {
  return (
    <div className={styles.skillCard}>
      <img src={source} alt={title} className={styles.skillImage} />
      <span className={styles.skillLabel}>{title}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={`${styles.skillSection} px-4 py-10`}>
      <div className={styles.techStack}>
        <div className={styles.techTitle}>Frontend</div>
        <div className={styles.techContainer}>
          <SkillCard
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            title="React"
          />
          <SkillCard
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            title="CSS3"
          />
        </div>

        <div className={styles.techTitle}>Backend</div>
        <div className={styles.techContainer}>
          <SkillCard
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            title="Node.js"
          />
          <SkillCard
            source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            title="Python"
          />
          {/* Add more backend skills */}
        </div>
      </div>
    </section>
  );
}
