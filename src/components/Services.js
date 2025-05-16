import React from 'react';

export const Services = ({ theme }) => {
  const styles = {
    section: {
      marginBottom: '4rem',
      padding: '1rem',
      background: theme.sectionBg,
      borderRadius: '20px',
      boxShadow: `0 4px 24px ${theme.shadow}`,
      backdropFilter: 'blur(12px)',
      border: `1px solid ${theme.border}`,
      '@media (min-width: 375px)': {
        padding: '1.5rem', 
      }
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '0.75rem',
      color: theme.text,
      position: 'relative',
      lineHeight: 1.3,
    },
    list: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
    },
    listItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'rgba(15, 23, 42, 0.3)',
      borderRadius: '16px',
      padding: '1rem 1rem 1rem 3rem',
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid ${theme.border}`,
      boxShadow: `0 4px 24px ${theme.shadow}20`,
      minHeight: '320px',
      transition: 'all 0.4s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 8px 32px ${theme.primary}30`,
      }
    },
    techIcons: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      marginBottom: '1rem',
    },
    techLogo: {
      width: '32px',
      height: '32px',
      objectFit: 'contain',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    },
    serviceTitle: {
      marginBottom: '1rem',
      color: theme.text,
      fontSize: '1.4rem',
      fontWeight: 700,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    paragraph: {
      paddingLeft: '1rem',
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: theme.text,
      opacity: 0.9,
    },
    serviceList: {
      paddingLeft: '1.25rem',
      margin: '0.5rem 0',
      color: theme.text,
      opacity: 0.9,
    }
  };

  const services = [
    {
      title: 'Mobile App Development',
      description: 'iOS & Android apps using React Native — modern, fast & fully deployed to App Store & Google Play.',
      logos: [
        require('../assets/react.png'),
        require('../assets/app-store.png'),
        require('../assets/google-play.png')
      ]
    },
    {
      title: 'Web Development (React.js & Next.js)',
      description: 'High-performance web apps with modern UI, fast load time, and SEO optimization.',
      logos: [
        require('../assets/react.png'),
        require('../assets/nextjs.png')
      ]
    },
    {
      title: 'Backend Development (Node.js & Laravel)',
      description: 'Secure, scalable backends for web & mobile apps with custom APIs and database integration.',
      logos: [
        require('../assets/nodejs.png'),
        require('../assets/laravel.png'),
       // require('../assets/api.png')
      ]
    },
    {
      title: 'App Deployment',
      description: 'Full support for publishing apps to the App Store & Google Play.',
      logos: [
        require('../assets/app-store.png'),
        require('../assets/google-play.png')
      ]
    },
    {
      title: 'Shopify Development',
      description: 'Custom Shopify stores built for conversion — design, customization & app integration.',
      logos: [
        require('../assets/shopify.png'),
        require('../assets/javascript.png')
      ]
    },
    {
      title: 'WordPress Development',
      description: 'Easy-to-manage, responsive websites using custom WordPress themes and plugins.',
      logos: [
        require('../assets/wordpress.png'),
        require('../assets/php.png')
      ]
    },
    {
      title: 'Bug Fixing & Redesign',
      description: 'Fix issues, improve performance, and redesign existing web & mobile apps for better user experience.',
      logos: [
        require('../assets/bug-fix.png'),
        require('../assets/redesign.png')
      ]
    },
    {
      title: 'Additional Services',
      description: (
        <ul style={styles.serviceList}>
          <li>UI/UX Design (Figma, Prototyping)</li>
          <li>Branding (Logos, Visual Identity)</li>
          <li>Digital Marketing (Social Media Strategy)</li>
        </ul>
      ),
      logos: [
        require('../assets/figma.png'),
        require('../assets/branding.png'),
        require('../assets/marketing.png')
      ]
    }
  ];
  

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>
        What I Offer: High-Demand Web & Mobile Solutions
      </h2>
      <div style={styles.list}>
        {services.map((service) => (
          <div key={service.title} style={styles.listItem}>
            <div style={styles.techIcons}>
              {service.logos?.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="tech logo"
                  style={styles.techLogo}
                />
              ))}
            </div>
            <h3 style={styles.serviceTitle}>{service.title}</h3>
            {typeof service.description === 'string' ? (
              <p style={styles.paragraph}>{service.description}</p>
            ) : (
              service.description
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
