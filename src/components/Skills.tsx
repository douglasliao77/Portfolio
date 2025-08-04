import styles from '../styles/Skills.module.css';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section className={`${styles.skillSection} px-4 py-10`}>
      <div className={styles.techStack}>
        {skillData.map(({ category, items }) => items.length > 0 && (
          <>
            <div className={styles.techTitle}>{category}</div>
            <div className={styles.techContainer}>
              {items.map((item, i) => <SkillCard key={i} title={item.title} />)}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

const skillData = [
  { 
  category: 'MACHINE LEARNING', 
  items: [
      { source: '', title: 'Computer Vision' },
      { source: '', title: 'Monte Carlo Tree Search'},
      { source: '', title: 'Q-Learning'},
  ] 
  },
  {
  category: 'LANGUAGES',
  items: [
      {  title: 'Python' },
      {  title: 'C++' },
      {  title: 'C' },
      {  title: 'C#'},
      {  title: 'Java' },
      {  title: 'JavaScript' },
      {  title: 'TypeScript' },
      {  title: 'HTML' },
      {  title: 'CSS' },
      {  title: 'MATLAB' },
      {  title:'Julia' },
      {  title: 'R' },
      
  ]
  },
  { 
  category: 'FRAMEWORKS/ LIBRARIES', 
  items: [
    { title: 'React' },
    { title: 'Django' },
    { title: 'Flask' },

    {  title: 'PyTorch' },
    { title: 'scikit-learn' },
    {  title: 'Pandas' },
    { title: 'TensorFlow' },
    { title: 'NumPy' }
  ]
},
{ 
  category: 'DATABASES', 
  items: [
      { title: 'PostgreSQL' },
      { title: 'SQLite' },

  ] 
  },
{
  category: 'PLATFORMS/ TOOLS',
  items: [
      // Engine
      { title: 'Unity' },
      
      // Version Control
      { title: 'GitHub' },
      { title: 'GitLab' },
      
      // Cloud Platforms

      // Deployments
      { title: 'Vercel' },

      // CI/CD

      // Editors
      {  title: 'VS Code' },
      { title: 'IntelliJ' },

      // Communications
      { title: 'Trello' },
      { title: 'Slack' },
  ]
},

];