// src/components/Services.js
import React from 'react';

export const Services = ({ theme }) => {
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
    list: {
      listStyle: 'none',
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      '@media (max-width: 480px)': { gridTemplateColumns: '1fr' }
    },
    listItem: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '16px',
      padding: '1.5rem',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      border: `1px solid ${theme.border}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      },
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: theme.text,
      opacity: 0.9,
      '@media (max-width: 768px)': { fontSize: '1rem' }
    },

    
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
            <h3 style={{ marginBottom: '0.8rem', color: theme.text }}>
              {service.title}
            </h3>
            <p style={styles.paragraph}>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};