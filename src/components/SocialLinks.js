// src/components/SocialLinks.js
import React from 'react';

export const SocialLinks = ({ theme }) => {
    const styles = {
        section: {
            marginBottom: '5rem',
            padding: '2.5rem',
            background: theme.sectionBg,
            borderRadius: '24px',
            boxShadow: `0 8px 32px ${theme.shadow}`,
            backdropFilter: 'blur(12px)',
            border: `1px solid ${theme.border}`,
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: theme.text,
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-0.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                borderRadius: '2px',
            },
        },
        linksContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
        },
        linkButton: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: theme.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 8px 24px ${theme.primary}50`,
            },
        },
        icon: {
            width: '28px',
            height: '28px',
            filter: 'brightness(0) invert(1)',
        },
    };

    const socialPlatforms = [
        { name: 'LinkedIn', icon: '/linkedin-icon.svg', url: 'https://linkedin.com' },
        { name: 'Facebook', icon: '/facebook-icon.svg', url: 'https://facebook.com' },
        { name: 'Instagram', icon: '/instagram-icon.svg', url: 'https://instagram.com' },
        { name: 'Twitter', icon: '/twitter-icon.svg', url: 'https://twitter.com' },
    ];

    return (
        <section style={styles.section}>
            <h2 style={styles.title}>Let's Connect</h2>
            <div style={styles.linksContainer}>
                {socialPlatforms.map((platform) => (
                    <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.linkButton}
                    >
                        <img
                            src={platform.icon}
                            alt={platform.name}
                            style={styles.icon}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};