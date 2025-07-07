import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import styles from '../styles/Higlight.module.css';
import campnou from '../assets/images/barcelona.jpg';

function TabPanel({ children, value, index }: any) {
  return value === index ? <div role="tabpanel">{children}</div> : null;
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
            py: '1.5em',
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
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3rem',
                    }}
                >
                    {renderTab('Projects')}
                    {renderTab('Skills')}
                    {renderTab('Experience')}
                </Tabs>
                    <TabPanel value={value} index={0}>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                </TabPanel>
            </Box>
        </div>
    </section>
  );
}
