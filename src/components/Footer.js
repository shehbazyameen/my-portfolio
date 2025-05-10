// src/components/Footer.js
import React from 'react';

export const Footer = ({ theme }) => {
  const styles = {
    footer: {
      textAlign: 'center',
      padding: '3rem 2rem 2rem',
      marginTop: '5rem',
      color: theme.text,
      borderTop: `1px solid ${theme.border}`,
      opacity: 0.8,
      '@media (max-width: 768px)': { padding: '2rem 1rem' }
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '1.5rem'
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      transition: 'all 0.3s ease',
      filter: 'brightness(0) invert(1)',
      '&:hover': { transform: 'translateY(-3px)' }
    },
    legalLinks: {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    },
    link: {
      color: theme.text,
      textDecoration: 'none',
      fontSize: '0.9rem'
    },
    paragraph: {
      fontSize: '0.9rem',
      margin: 0
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.socialLinks}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src="/linkedin-icon.svg" alt="LinkedIn" style={styles.socialIcon} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src="/github-icon.svg" alt="GitHub" style={styles.socialIcon} />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer">
          <img src="/dribbble-icon.svg" alt="Dribbble" style={styles.socialIcon} />
        </a>
      </div>
      <div style={styles.legalLinks}>
        <a href="#" style={styles.link}>Terms of Service</a>
        <a href="#" style={styles.link}>Privacy Policy</a>
      </div>
      <p style={styles.paragraph}>
        © 2023 Shehbaz Yameen. All rights reserved.
      </p>
    </footer>
  );
};