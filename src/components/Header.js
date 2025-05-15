// src/components/Header.js
import React from 'react';

export const Header = ({ theme, scrollTo }) => {
    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
           // background: theme.sectionBg,
            // backdropFilter: 'blur(10px)',
            zIndex: 1000,
           // borderBottom: `1px solid ${theme.border}`,
           // padding: '0.5rem 0', // Reduced padding for mobile
            width: '100%',
            boxSizing: 'border-box'
        },
        headerBlurContainer: {
            background: theme.sectionBg,
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${theme.border}`,
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: '0.5rem 1rem', // Reduced padding for mobile
            boxSizing: 'border-box',
            '@media (min-width: 768px)': {
                padding: '1rem 2rem' // Larger padding for tablets/desktops
            }
        },
        nav: {
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem', // Reduced gap for mobile
            flexWrap: 'wrap', // Allow items to wrap on small screens
            padding: '0.25rem',
            '@media (min-width: 375px)': {
                gap: '0.75rem' // Slightly larger gap for iPhone SE
            },
            '@media (min-width: 768px)': {
                gap: '2rem', // Original gap for larger screens
                flexWrap: 'nowrap' // Prevent wrapping on larger screens
            }
        },
        navLink: {
            color: theme.text,
            textDecoration: 'none',
            fontWeight: 500,
            padding: '0.25rem 0.5rem', // Reduced padding for mobile
            borderRadius: '6px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
            fontSize: '0.8rem', // Smaller font for mobile
            whiteSpace: 'nowrap', // Prevent text wrapping
            '&:hover': {
                background: theme.primary,
                color: '#fff'
            },
            '@media (min-width: 375px)': {
                fontSize: '0.9rem', // Slightly larger for iPhone SE
                padding: '0.3rem 0.6rem'
            },
            '@media (min-width: 768px)': {
                fontSize: '1rem', // Original size for larger screens
                padding: '0.5rem 1rem'
            }
        }
    };

    return (
        <header style={styles.header}>
            <div style={styles.headerBlurContainer}>
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
                        onClick={() => scrollTo('VideoSection')}
                    >
                        About Me
                    </button>
                    <button
                        style={styles.navLink}
                        onClick={() => scrollTo('contact')}
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    );
};