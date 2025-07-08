import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styles from '../styles/Higlight.module.css';
import campnou from '../assets/images/barcelona.jpg';

function Card({ title, description }: { title: string; description: string }) {
    return (
      <div className={styles.card}
      >
        
        <div className={styles.cardImage}></div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }

export default function Highlight() {
  const [value, setValue] = useState(0);
  const handleChange = (_event: any, newValue: number) => setValue(newValue);

  const renderTab = (label: string) => (
    <Tab
        key={label}
        label={label}
        sx={{
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: 'white',
            py: '1em',
            textTransform: 'none',
            '&.Mui-selected': {
            color: '#90caf9',
            },
        }}
    />
  );

  return (
    <section className={styles.container}>
        <img src={campnou} alt="Camp Nou Stadium" className={styles.background} />
        <div className={styles.overlay}></div>

        <div className={styles.content}>
            <h1>Portfolio Showcase</h1>
            <p>
            Explore my journey through projects, qualification and technical expertise. <br />
            Each section represents a milestone in my continuous learning path.
            </p>
        </div>

        <div className={styles.leagueTable}>
            <Box className={styles.box}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '2rem',
                    }}
                >
                    {renderTab('Projects')}
                    {renderTab('Experience')}
                    {renderTab('Skills')}
                </Tabs>
                    <div style={{ display: value === 0 ? 'block' : 'none', padding: '1rem' }}>
                        <div className={styles.projects}> 
                            <Card title="Project One" description="React app" />
                            <Card title="Project Two" description="Node.js" />
                            <Card title="Project Three" description="Machine Learning" />
                            <Card title="Project One" description="React." />
                            <Card title="Project Two" description="API." />
                            </div>
                        </div>

                    <div style={{ display: value === 1 ? 'block' : 'none', padding: '1rem' }}>
                        {/* Content for Skills */}
                        <h2>Skills</h2>
                        <p>These are my technical skills...</p>
                    </div>

                    <div style={{ display: value === 2 ? 'block' : 'none', padding: '1rem' }}>
                        {/* Content for Experience */}
                        <h2>Experience</h2>
                        <p>My work experience includes...</p>
                    </div>
            </Box>
        </div>
    </section>
  );
}
