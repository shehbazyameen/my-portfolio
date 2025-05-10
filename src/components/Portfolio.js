// src/components/Portfolio.js
import React, { useState } from 'react';
import { projects } from '../constants/theme';

export const Portfolio = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const styles = {
    section: {
      marginBottom: '5rem',
      padding: '2.5rem',
      background: theme.sectionBg,
      borderRadius: '24px',
      boxShadow: `0 8px 32px ${theme.shadow}`,
      backdropFilter: 'blur(12px)',
      border: `1px solid ${theme.border}`,
      '@media (max-width: 768px)': { padding: '1.5rem', borderRadius: '16px' }
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '2rem',
      color: theme.text,
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-0.5rem',
        left: 0,
        width: '60px',
        height: '4px',
        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
        borderRadius: '2px',
      },
      '@media (max-width: 768px)': { fontSize: '2rem' }
    },
    filterButton: {
      background: 'none',
      border: `1px solid ${theme.border}`,
      color: theme.text,
      padding: '0.6rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: theme.primary,
        borderColor: theme.primary
      },
      '@media (max-width: 480px)': { padding: '0.5rem 1rem', fontSize: '0.9rem' }
    },
    activeFilter: {
      background: `${theme.primary} !important`,
      borderColor: `${theme.primary} !important`
    },
    list: {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      '@media (max-width: 480px)': { gridTemplateColumns: '1fr' }
    },
    projectCard: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '16px',
      padding: '1.5rem',
      border: `1px solid ${theme.border}`,
      '@media (max-width: 480px)': { padding: '1rem' }
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: theme.text,
      opacity: 0.9,
      '@media (max-width: 768px)': { fontSize: '1rem' }
    },
    button: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Portfolio</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {['all', 'web', 'mobile', 'design'].map((filter) => (
          <button
            key={filter}
            style={{
              ...styles.filterButton,
              ...(activeFilter === filter && styles.activeFilter)
            }}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      <div style={styles.list}>
        {projects
          .filter(project => activeFilter === 'all' || project.type === activeFilter)
          .map(project => (
            <div key={project.id} style={styles.projectCard}>
              <h3 style={{ color: theme.text, marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={styles.paragraph}>{project.tech}</p>
              <button style={styles.button}>
                View Case Study
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};