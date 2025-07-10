import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styles from '../styles/Higlight.module.css';

function Card({ title, description }: { title: string; description: string }) {
    return (
      <div className={styles.card}>
        <div className={styles.cardImage}></div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default function Highlight() {
    const [value, setValue] = useState(0);
  
    const renderTab = (label: string) => (
      <Tab
        key={label}
        label={label}
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'white',
          textTransform: 'none',
          '&.Mui-selected': {
            color: '#90caf9',
          },
        }}
      />
    );
  
    return (
      <section className={styles.container}>
  
        <div className={styles.content}>
          <h1>Portfolio Showcase</h1>
          <p>
            Explore my journey through projects, qualifications, and technical expertise.<br />
            Each section represents a milestone in my continuous learning path.
          </p>
        </div>
  
        <div className={styles.tabContainer}>
          <Box>
            <Tabs
              value={value}
              onChange={(_, newValue) => setValue(newValue)}
              variant="fullWidth"
              scrollButtons="auto"
              sx={{ backgroundColor: '#1e293b', borderRadius: '1rem' }}
            >
              {['Projects', 'Experience', 'Skills'].map(renderTab)}
            </Tabs>
          </Box>
  
          <div className={styles.tabContent}>
            {value === 0 && (
              <div className={styles.projects}>
                <Card title="Project One" description="React App" />
                <Card title="Project Two" description="Node.js API" />
                <Card title="Project Three" description="Machine Learning" />
                <Card title="Project One" description="React App" />
                <Card title="Project Two" description="Node.js API" />
                <Card title="Project Three" description="Machine Learning" />
                
              </div>
            )}
            {value === 1 && (
              <div className={styles.section}>
                <h2>Experience</h2>
                <p>My work experience includes...</p>
              </div>
            )}
            {value === 2 && (
              <div className={styles.section}>
                <h2>Skills</h2>
                <p>These are my technical skills...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }