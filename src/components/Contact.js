// src/components/Contact.js
import React from 'react';

export const Contact = ({ theme }) => {
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
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      '@media (max-width: 768px)': { gridTemplateColumns: '1fr' }
    },
    projectCard: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '16px',
      padding: '1.5rem',
      border: `1px solid ${theme.border}`,
    },
    inputField: {
      background: 'rgba(255,255,255,0.1)',
      border: `1px solid ${theme.border}`,
      width: '100%',
      padding: '0.8rem',
      margin: '0.5rem 0',
      borderRadius: '8px',
      color: theme.text,
      fontSize: '1rem'
    },
    button: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      border: 'none',
      padding: '1rem 2.5rem',
      borderRadius: '12px',
      color: '#fff',
      fontWeight: 600,
      fontSize: '1.1rem',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease'
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: theme.text,
      opacity: 0.9,
      margin: '0.5rem 0'
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Let's Connect</h2>
      <div style={styles.contactGrid}>
        <div>
          <div style={styles.paragraph}>📧 shehbaz.webandappdev@gmail.com</div>
          <div style={styles.paragraph}>📱 +92 (310) 060-9111</div>
          <div style={styles.paragraph}>📍 Based in Asia Karachi, Pakistan</div>
          <div style={{ margin: '2rem 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={styles.button}>Upwork Profile</button>
            <button style={styles.button}>Fiverr Profile</button>
          </div>
        </div>
        <div>
          <div style={styles.projectCard}>
            <h3 style={{ color: theme.text, marginBottom: '1rem' }}>Quick Inquiry</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={styles.inputField} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={styles.inputField} 
            />
            <button style={styles.button}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};