// src/components/Header.js
import React from 'react';


export const Header = ({ theme, scrollTo }) => {
    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: theme.sectionBg,
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            borderBottom: `1px solid ${theme.border}`,
            padding: '1rem 1rem',
            // Remove background/border from here
        },
       
        headerBlurContainer: {
            background: theme.sectionBg,
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${theme.border}`,
            maxWidth: '1200px', // Exact match with content
            width: '100%', // Ensures it doesn't exceed 1200px
            margin: '0 auto',
            padding: '1rem 2rem',
            boxSizing: 'border-box' // Critical for accurate width
        },
        nav: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            
        },
        navLink: {
            color: theme.text, // Uncommented color property
            textDecoration: 'none',
            fontWeight: 500,
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            '&:hover': {
                background: theme.primary,
                color: '#fff'
            }
        }
    };

    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <button
                    style={styles.navLink}
                    onClick={() => scrollTo('hero')}
                >
                    Home
                </button>
                <button
                    style={styles.navLink}
                    onClick={() => scrollTo('services')}
                >
                    Services
                </button>
                <button
                    style={styles.navLink}
                    onClick={() => scrollTo('portfolio')}
                >
                    Portfolio
                </button>
                <button
                    style={styles.navLink}
                    onClick={() => scrollTo('reviews')}
                >
                    Reviews
                </button>
                <button
                    style={styles.navLink}
                    onClick={() => scrollTo('contact')}
                >
                    Contact
                </button>
            </nav>
        </header>
    );
};