// src/components/Services.js
import React from 'react';

export const Services = ({ theme }) => {
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
      lineHeight: 1.3,
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
    list: {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.25rem',
      '@media (min-width: 375px)': {
        gap: '1.5rem'
      },
      '@media (min-width: 480px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      '@media (min-width: 768px)': {
        gap: '2rem'
      }
    },

    listItem: {
      background: 'rgba(15, 23, 42, 0.3)',
      borderRadius: '16px',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: `1px solid ${theme.border}`,
      boxShadow: `0 4px 24px ${theme.shadow}20`,

      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 8px 32px ${theme.primary}30`,
        '&::before': {
          opacity: 1
        }
      },

      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `linear-gradient(45deg, 
          ${theme.primary}20, 
          ${theme.secondary}20, 
          ${theme.primary}20)`,
        transform: 'rotate(45deg)',
        opacity: 0,
        transition: 'opacity 0.6s ease'
      },

      '@media (max-width: 768px)': {
        '&:hover': {
          transform: 'none'
        }
      }
    },

    serviceTitle: {
      marginBottom: '1rem',
      color: theme.text,
      fontSize: '1.25rem',
      fontWeight: 700,
      position: 'relative',
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      '@media (min-width: 375px)': {
        fontSize: '1.3rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.4rem'
      }
    },

    paragraph: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: theme.text,
      opacity: 0.9,
      position: 'relative',
      margin: 0,
      paddingLeft: '1.5rem',

      '&::before': {
        content: '"»"',
        position: 'absolute',
        left: 0,
        color: theme.primary,
        fontWeight: 700
      },

      '@media (min-width: 375px)': {
        fontSize: '1.05rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.1rem'
      }
    },

    // Add for Additional Services bullet points
    serviceList: {
      paddingLeft: '1.5rem',
      margin: '0.5rem 0',
      '& li': {
        position: 'relative',
        paddingLeft: '1rem',
        '&::before': {
          content: '"•"',
          position: 'absolute',
          left: 0,
          color: theme.primary
        }
      }
    }
  };

  


  const services = [
    {
      title: 'Mobile App Development',
      description: 'iOS & Android apps using React Native — modern, fast & fully deployed to App Store & Google Play.'
    },
    {
      title: 'Web Development (React.js & Next.js)',
      description: 'High-performance web apps with modern UI, fast load time, and SEO optimization.'
    },
    {
      title: 'Backend Development (Node.js & Laravel)',
      description: 'Secure, scalable backends for web & mobile apps with custom APIs and database integration.'
    },
    {
      title: 'App Deployment',
      description: 'Full support for publishing apps to the App Store & Google Play.'
    },
    {
      title: 'Shopify Development',
      description: 'Custom Shopify stores built for conversion — design, customization & app integration.'
    },
    {
      title: 'WordPress Development',
      description: 'Easy-to-manage, responsive websites using custom WordPress themes and plugins.'
    },

{
      title: 'Bug Fixing & Redesign',
      description: 'Fix issues, improve performance, and redesign existing web & mobile apps for better user experience.'
    },

    {
      title: 'Additional Services',
      description: (
        <ul style={styles.serviceList}>
          <li>UI/UX Design (Figma, Prototyping)</li>
          <li>Branding (Logos, Visual Identity)</li>
          <li>Digital Marketing (Social Media Strategy)</li>
        </ul>
      )
    }
  ];


  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>What I Offer: High-Demand Web & Mobile Solutions</h2>
      <ul style={styles.list}>
        {services.map((service) => (
          <li key={service.title} style={styles.listItem}>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            <p style={styles.paragraph}>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};