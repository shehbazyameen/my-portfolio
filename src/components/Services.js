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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
      },
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }
    },
    listItem: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '14px',
      padding: '1.25rem',
      boxShadow: `0 2px 8px ${theme.shadow}`,
      border: `1px solid ${theme.border}`,
      transition: 'all 0.3s ease',
      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none'
      },
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 6px 18px ${theme.shadow}`,
      },
      '@media (min-width: 375px)': {
        padding: '1.5rem',
        borderRadius: '16px'
      },
      '@media (min-width: 768px)': {
        transform: 'translateY(0)'
      }
    },
    paragraph: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: theme.text,
      opacity: 0.9,
      margin: 0,
      '@media (min-width: 375px)': {
        fontSize: '1rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.1rem',
        lineHeight: 1.7
      }
    },
    serviceTitle: {
      marginBottom: '0.6rem',
      color: theme.text,
      fontSize: '1.1rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (min-width: 375px)': {
        fontSize: '1.2rem',
        marginBottom: '0.8rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.3rem'
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
      description: `
        • UI/UX Design (Figma, Prototyping)\n
        • Branding (Logos, Visual Identity)\n
        • Digital Marketing (Social Media Strategy)
      `
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