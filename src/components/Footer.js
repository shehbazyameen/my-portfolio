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
        <a href="https://www.linkedin.com/in/shehbaz-yameen/" target="_blank" rel="noreferrer">
          <img src={require('../assets/linkedin.png')} style={styles.socialIcon} />
        </a>
        <a href="https://github.com/shehbazyameen" target="_blank" rel="noreferrer">
          <img src={require('../assets/github.png')} alt="GitHub" style={styles.socialIcon} />
        </a>
        <a href="https://www.instagram.com/shehbazyameen/" target="_blank" rel="noreferrer">
          <img src={require('../assets/instagram.png')} alt="Instagram" style={styles.socialIcon} />
        </a>

        <a href="https://www.facebook.com/people/Shehbaz-Yameen/100010091083500/" target="_blank" rel="noreferrer">
          <img src={require('../assets/facebook.png')} alt="Facebook" style={styles.socialIcon} />
        </a>
        <a href="https://x.com/43shehbaz" target="_blank" rel="noreferrer">
          <img src={require('../assets/twitter.png')} alt="Twitter" style={styles.socialIcon} />
        </a>




      </div>
      <div style={styles.legalLinks}>
        <a href="#" style={styles.link}>Terms of Service</a>
        <a href="#" style={styles.link}>Privacy Policy</a>
      </div>
      <p style={styles.paragraph}>
        © 2025 Shehbaz Yameen. All rights reserved.
      </p>
    </footer>
  );
};