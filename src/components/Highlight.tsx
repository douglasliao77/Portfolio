import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styles from '../styles/Higlight.module.css';
import UTTT from '../assets/images/UTTT.png';



interface CardProps {
  title: string;
  imageSrc?: string;
}

function Card({ title, imageSrc }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={title} />
      </div>
      <h1>{title}</h1>
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
        color: '#eb7b13',
        textTransform: 'none',
        '&.Mui-selected': {
          color: '#eb7b13',
          
        },
      }}
    />
  );

  return (
    <section id="highlight" className={styles.container}>

      <div className={styles.content}>
        <h1>Portfolio Showcase</h1>
      
      </div>

      <div className={styles.tabContainer}>
        
        <Box>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            variant="fullWidth"
            scrollButtons="auto"
            sx={{ backgroundColor: 'black', borderRadius: '1rem' }}
          >
            {['Projects','Youtube', 'Blog'].map(renderTab)}
          </Tabs>
        </Box>

        <div className={styles.tabContent}>
          {value === 0 && (
            <div className={styles.projects}>
              <Card 
                title="Ultimate Tic Tac Toe AI" 
                imageSrc={UTTT}
              />
              <Card 
                title="Coming Soon!" 
              />
            </div>
          )}
          {value === 1 && (
            <div className={styles.projects}>
              <Card 
                title="Coming Soon!" 
              />
            </div>
          )}
          {value === 2 && (
            <div className={styles.projects}>
              <Card 
                title="Coming Soon!" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}