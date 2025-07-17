import styles from '../styles/Skills.module.css';

interface SkillCardProp {
    source?: string;
    title: string;
  }
  
  const SkillCard = ({ source, title }: SkillCardProp) => (
    <div className={`${styles.skillCard} ${!source ? styles.noSourceCard : ''}`}>
      {source && <img src={source} alt={title} className={styles.skillImage} />}
      <span className={styles.skillLabel}>{title}</span>
    </div>
  );

const skillData = [
    { 
    category: 'Machine Learning', 
    items: [
        { source: '', title: 'Computer Vision' },
    ] 
    },
    {
    category: 'LANGUAGES',
    items: [
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', title: 'C++' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', title: 'C' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', title: 'Java' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', title: 'TypeScript' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', title: 'HTML' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', title: 'CSS' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg', title: 'MATLAB' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg', title: 'Julia' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', title: 'R' },
        
    ]
    },
    { 
    category: 'FRAMEWORKS/ LIBRARIES', 
    items: [
      { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React' },
      { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', title: 'Django' },

      { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', title: 'PyTorch' },
      { source: 'https://cdn.simpleicons.org/scikitlearn', title: 'scikit-learn' },
      { source: 'https://cdn.simpleicons.org/pandas', title: 'Pandas' },
      { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', title: 'TensorFlow' },
      { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', title: 'NumPy' }
    ]
  },
  { 
    category: 'DATABASES', 
    items: [
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', title: 'PostgreSQL' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', title: 'SQLite' },

    ] 
    },
  {
    category: 'PLATFORMS/ TOOLS',
    items: [
        
        // Version Control
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', title: 'GitHub' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', title: 'GitLab' },
        
        // Cloud Platforms

        // Deployments
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', title: 'Vercel' },

        // CI/CD

        // Editors
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', title: 'VS Code' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', title: 'IntelliJ' },

        // Communications
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', title: 'Trello' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', title: 'Slack' },
    ]
  },
  
];

export default function Skills() {
  return (
    <section className={`${styles.skillSection} px-4 py-10`}>
      <div className={styles.techStack}>
        {skillData.map(({ category, items }) => items.length > 0 && (
          <>
            <div className={styles.techTitle}>{category}</div>
            <div className={styles.techContainer}>
              {items.map((item) => <SkillCard key={item.title} {...item} />)}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}