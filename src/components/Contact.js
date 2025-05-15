// src/components/Contact.js
import React, { useState } from 'react';

export const Contact = ({ theme }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mldbojej', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formRef.current.reset();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    section: {
      marginBottom: '4rem',
      padding: '1.5rem',
      background: theme.sectionBg,
      borderRadius: '20px',
      boxShadow: `0 4px 24px ${theme.shadow}`,
      backdropFilter: 'blur(12px)',
      border: `1px solid ${theme.border}`,
      '@media (min-width: 375px)': {
        padding: '2rem',
        marginBottom: '5rem'
      },
      '@media (min-width: 768px)': {
        padding: '2.5rem',
        borderRadius: '24px'
      }
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: theme.text,
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-0.5rem',
        left: 0,
        width: '50px',
        height: '3px',
        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
        borderRadius: '2px',
      },
      '@media (min-width: 375px)': {
        fontSize: '2rem',
        marginBottom: '2rem',
        '&::after': {
          width: '60px',
          height: '4px'
        }
      },
      '@media (min-width: 768px)': {
        fontSize: '2.5rem',
        marginBottom: '2.5rem'
      }
    },
    contactWrapper: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem'
      }
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      '@media (min-width: 768px)': {
        gap: '1.5rem'
      }
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem',
      background: 'rgba(15, 23, 42, 0.3)',
      borderRadius: '12px',
      border: `1px solid ${theme.border}`,
      '@media (min-width: 375px)': {
        padding: '1.25rem',
        gap: '1rem'
      },
      '@media (min-width: 768px)': {
        padding: '1.5rem'
      }
    },
    icon: {
      width: '20px',
      height: '20px',
      '@media (min-width: 375px)': {
        width: '24px',
        height: '24px'
      }
    },
    contactText: {
      fontSize: '0.95rem',
      color: theme.text,
      margin: 0,
      opacity: 0.9,
      '@media (min-width: 375px)': {
        fontSize: '1rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.1rem'
      }
    },
    formContainer: {
      background: 'rgba(15, 23, 42, 0.3)',
      borderRadius: '12px',
      padding: '1rem',
      border: `1px solid ${theme.border}`,
      position: 'relative',
      boxSizing: 'border-box',
      maxWidth: '100%',
      overflow: 'hidden',
      '@media (min-width: 375px)': {
        padding: '1.5rem'
      },
      '@media (min-width: 768px)': {
        padding: '2rem'
      }
    },

    inputField: {
      width: '100%',
      padding: '0.7rem 1rem',
      marginBottom: '1rem',
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${theme.border}`,
      borderRadius: '8px',
      color: theme.text,
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box', // Add this
      '&:focus': {
        outline: 'none',
        borderColor: theme.primary,
        boxShadow: `0 0 0 3px ${theme.primary}20`
      },
      '@media (min-width: 375px)': {
        fontSize: '1rem',
        marginBottom: '1.25rem',
        padding: '0.8rem 1.2rem'
      },
      '@media (max-width: 320px)': {
        padding: '0.6rem 0.9rem',
        fontSize: '0.85rem'
      }
    },

    // Add this new media query
    '@media (max-width: 375px)': {
      contactWrapper: {
        gap: '1rem'
      },
      contactItem: {
        padding: '0.8rem',
        gap: '0.5rem'
      },
      contactText: {
        fontSize: '0.9rem'
      }
    },
    textArea: {
      height: '100px',
      resize: 'vertical',
      '@media (min-width: 375px)': {
        height: '120px'
      }
    },
    submitButton: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      border: 'none',
      padding: '0.8rem 1.5rem',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '0.95rem',
      fontWeight: 600,
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 5px 15px ${theme.primary}30`
      },
      '@media (min-width: 375px)': {
        fontSize: '1rem',
        padding: '1rem 2rem'
      }
    },
    successMessage: {
      background: 'rgba(76, 175, 80, 0.1)',
      border: '1px solid #4CAF50',
      borderRadius: '8px',
      padding: '0.75rem',
      color: '#4CAF50',
      marginBottom: '1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      '@media (min-width: 375px)': {
        fontSize: '1rem',
        padding: '1rem'
      }
    },
    errorMessage: {
      background: 'rgba(244, 67, 54, 0.1)',
      border: '1px solid #f44336',
      borderRadius: '8px',
      padding: '0.75rem',
      color: '#f44336',
      marginBottom: '1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      '@media (min-width: 375px)': {
        fontSize: '1rem',
        padding: '1rem'
      }
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px'
    },
    spinner: {
      animation: 'spin 1s linear infinite',
      width: '20px',
      height: '20px',
      '@media (min-width: 375px)': {
        width: '24px',
        height: '24px'
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
            <img src={require('../assets/gmail.png')} alt="Email" style={styles.icon} />
            <p style={styles.contactText}>shehbaz.webandappdev@gmail.com</p>
          </div>

          <div style={styles.contactItem}>
            <img src={require('../assets/whatsapp.png')} alt="Phone" style={styles.icon} />
            <p style={styles.contactText}>+92 (310) 060-9111</p>
          </div>

          <div style={styles.contactItem}>
            <img src={require('../assets/google-maps.png')} alt="Location" style={styles.icon} />
            <p style={styles.contactText}>Karachi, Pakistan</p>
          </div>
        </div>

        
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={styles.formContainer}
        >
          {isSubmitted && (
            <div style={styles.successMessage}>
              Message sent successfully! 🎉 I'll respond within 24 hours.
            </div>
          )}

          {error && (
            <div style={styles.errorMessage}>
              {error}
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            style={styles.inputField}
            disabled={isSubmitting}
          />

          <input
            type="email"
            name="_replyto"
            placeholder="Your Email *"
            required
            style={styles.inputField}
            disabled={isSubmitting}
          />

          <textarea
            name="projectBrief"
            placeholder="Project Brief *"
            required
            style={{ ...styles.inputField, ...styles.textArea }}
            disabled={isSubmitting}
          />

          <textarea
            name="budgetTimeline"
            placeholder="Budget & Timeline Details *"
            required
            style={{ ...styles.inputField, ...styles.textArea }}
            disabled={isSubmitting}
          />

          <input type="hidden" name="_subject" value="New Project Inquiry" />
         

          <button
            type="submit"
            style={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg
                  style={styles.spinner}
                  viewBox="0 0 50 50"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};