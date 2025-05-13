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
      '@media (max-width: 768px)': {
        padding: '1.5rem',
        borderRadius: '16px'
      }
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
    contactWrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '2rem'
      }
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.5rem',
      background: 'rgba(15, 23, 42, 0.3)',
      borderRadius: '12px',
      border: `1px solid ${theme.border}`
    },
    icon: {
      width: '24px',
      height: '24px',
      filter: 'brightness(0) invert(1)'
    },
    contactText: {
      fontSize: '1.1rem',
      color: theme.text,
      margin: 0,
      opacity: 0.9
    },
    formContainer: {
      background: 'rgba(15, 23, 42, 0.3)',
      borderRadius: '12px',
      padding: '2rem',
      border: `1px solid ${theme.border}`
    },
    inputField: {
      width: '100%',
      padding: '0.8rem 1rem',
      marginBottom: '1.5rem',
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${theme.border}`,
      borderRadius: '8px',
      color: theme.text,
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: theme.primary,
        boxShadow: `0 0 0 3px ${theme.primary}20`
      }
    },
    textArea: {
      height: '120px',
      resize: 'vertical'
    },
    submitButton: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 5px 15px ${theme.primary}30`
      }
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Get in Touch</h2>

      <div style={styles.contactWrapper}>
        {/* Contact Information */}
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <img src="/email-icon.svg" alt="Email" style={styles.icon} />
            <p style={styles.contactText}>shehbaz.webandappdev@gmail.com</p>
          </div>

          <div style={styles.contactItem}>
            <img src="/phone-icon.svg" alt="Phone" style={styles.icon} />
            <p style={styles.contactText}>+92 (310) 060-9111</p>
          </div>

          <div style={styles.contactItem}>
            <img src="/location-icon.svg" alt="Location" style={styles.icon} />
            <p style={styles.contactText}>Karachi, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
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
          <textarea
            placeholder="Your Message"
            style={{ ...styles.inputField, ...styles.textArea }}
          />
          <button style={styles.submitButton}>
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};