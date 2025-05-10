// src/components/Hero.js
import React from 'react';
import dummyImage from '../assets/profile.png';
import upwork from '../assets/upwork.png';
import fiverr from '../assets/fiverr.png';

export const Hero = ({ theme }) => {
  const styles = {
    hero: {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem',
      padding: '6rem 1rem 4rem',
      position: 'relative',
      '@media (max-width: 768px)': { 
        flexDirection: 'column',
        padding: '4rem 1rem 2rem',
        gap: '2rem'
      }
    },
    contentWrapper: {
      flex: 1,
      textAlign: 'left'
    },
    
    
    heading: {
      fontSize: '3.5rem',
      fontWeight: 800,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      marginBottom: '1.5rem',
      '@media (max-width: 768px)': { 
        fontSize: '2.2rem',
        textAlign: 'center'
      }
    },
       heading2: {
      fontSize: '2.5rem',
      fontWeight: 400,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      marginBottom: '1.5rem',
      '@media (max-width: 768px)': { 
        fontSize: '2.2rem',
        textAlign: 'center'
      }
    },
    subheading: {
      fontSize: '1.4rem',
      color: theme.text,
      marginBottom: '1rem',
      fontWeight: 500,
      opacity: 0.9,
      '@media (max-width: 768px)': { 
        fontSize: '1.1rem',
        textAlign: 'center'
      }
    },
    tagline: {
      fontSize: '1.1rem',
      color: theme.text,
      marginBottom: '2rem',
      opacity: 0.8,
      lineHeight: 1.6,
      '@media (max-width: 768px)': { 
        fontSize: '1rem',
        textAlign: 'center'
      }
    },
    
    buttonGroup: {
      display: 'flex',
      gap: '1.5rem',
      '@media (max-width: 768px)': {
        justifyContent: 'center'
      }
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
      boxShadow: `0 4px 20px ${theme.shadow}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 6px 24px ${theme.shadow}`
      },
      '@media (max-width: 768px)': { 
        padding: '0.8rem 1.5rem',
        fontSize: '1rem'
      }
    },
    platformBadges: {
      display: 'flex',
      gap: '1rem',
      margin: '2rem 0',
      '@media (max-width: 768px)': {
        justifyContent: 'center'
      }
    },
    badge: {
      display: 'inline-block',
      padding: '0.8rem 1.2rem',
      borderRadius: '8px',
      background: theme.badgeBg,
      color: theme.badgeText,
      fontWeight: 500,
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem'
    },

    imageWrapper: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      '@media (max-width: 768px)': {
        justifyContent: 'center'
      }
    },
    image: {
      width: '320px',
      height: '320px',
      objectFit: 'cover',
      borderRadius: '50%',
      boxShadow: `
        0 25px 50px -12px ${theme.primary}40,
        0 0 15px ${theme.primary}20
      `,
      transform: 'translateY(-10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      '@media (max-width: 768px)': {
        width: '240px',
        height: '240px'
      },
      '&:hover': {
        transform: 'translateY(-15px)',
        boxShadow: `
          0 35px 60px -12px ${theme.primary}50,
          0 0 25px ${theme.primary}30
        `
      }
    },
    
  };

  return (
    <section style={styles.hero}>
      <div style={styles.contentWrapper}>
        <div style={styles.platformBadges}>
          <span style={styles.badge}>
            <img src={upwork} alt="Upwork" style={{ width: '40px' }} />
            Top Rated
          </span>
          <span style={styles.badge}>
            <img src={fiverr} alt="Fiverr" style={{ width: '50px' }} />
            Level 2 Seller
          </span>
        </div>
        
        <h1 style={styles.heading}>Top-Rated Freelance Developer.</h1>

 <h2 style={styles.heading2}>
Delivering agency-level quality at freelancer-friendly rates.</h2>
    
        <p style={styles.subheading}>Full-Stack Developer | Web & Mobile Apps | 50+ Projects Delivered</p>
        <p style={styles.tagline}>
      Creating seamless, user-friendly websites and apps with strong, reliable backends.  
        </p>
        
        <div style={styles.buttonGroup}>
          <button style={styles.button}>Hire Me</button>
          <button style={{...styles.button, background: 'none', border: `2px solid ${theme.primary}`}}>
            View Portfolio
          </button>
        </div>
      </div>

     <div style={styles.imageWrapper}>
        <img 
          src={dummyImage} 
          alt="Shehbaz Yameen" 
          style={{
            ...styles.image,
            border: 'none', // Remove any existing border
          }} 
        />
      </div>
    </section>
  );
};