// src/components/Hero.js
import React, { useEffect, useState } from 'react';

import { TypeAnimation } from 'react-type-animation';

import dummyImage from '../assets/profile.png';
import upwork from '../assets/upwork.png';
import fiverr from '../assets/fiverr.png';
import peopleperhour from '../assets/peopleperhour.png';



export const Hero = ({ theme, scrollTo }) => {


  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shehbaz-yameen/', icon: require('../assets/linkedin.png') },
    { name: 'GitHub', url: 'https://github.com/shehbazyameen', icon: require('../assets/github.png') },
    { name: 'Instagram', url: 'https://www.instagram.com/shehbazyameen/', icon: require('../assets/instagram.png') },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Shehbaz-Yameen/100010091083500/', icon: require('../assets/facebook.png') },
    { name: 'Twitter', url: 'https://x.com/43shehbaz', icon: require('../assets/twitter.png') },


  ];



  const styles = {


    hero: {
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      padding: '1rem',
      gap: '1.5rem',
     // minHeight: '95vh',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        padding: '4rem 2rem',
        gap: '4rem',
        maxWidth: '1440px',
        margin: '0 auto'
      },
    },

    contentWrapper: {
      width: '100%',
      textAlign: 'center',
      '@media (min-width: 768px)': {
        textAlign: 'left',
        flex: 1
      }
    },

    greetingText: {
      fontSize: '1.3rem',
      color: theme.text,
      margin: '0 0 0.8rem',
      minHeight: '2rem',
      lineHeight: 1.4,
      '@media (min-width: 375px)': { fontSize: '1.4rem' },
      '@media (min-width: 768px)': { fontSize: '1.8rem' }
    },

    mainHeading: {
      fontSize: '1.8rem',
      fontWeight: 800,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      margin: '0 0 1rem',
      '@media (min-width: 375px)': { fontSize: '2rem' },
      '@media (min-width: 768px)': {
        fontSize: '3.5rem',
        lineHeight: 1.3
      }
    },

    subHeading: {
      fontSize: '1.1rem',
      color: theme.text,
      margin: '0 0 1.5rem',
      lineHeight: 1.5,
      '@media (min-width: 375px)': { fontSize: '1.2rem' },
      '@media (min-width: 768px)': {
        fontSize: '1.5rem',
        margin: '0 0 2rem'
      }
    },

    platformBadgesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.3rem',
      justifyContent: 'center',
      margin: '1rem 0',
      '@media (min-width: 375px)': {
        gap: '0.5rem'
      },
      '@media (min-width: 768px)': {
        gap: '0.8rem',
        margin: '1.5rem 0'
      }
    },

    // Updated platformBadge styles
    platformBadge: {
      padding: '0.4rem 0.8rem',
      borderRadius: '6px',
      background: theme.badgeBg,
      color: theme.badgeText,
      fontSize: '0.7rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      '& img': {
        width: '24px',
        height: '24px',
        objectFit: 'contain'
      },
      '@media (min-width: 325px)': {
        fontSize: '0.75rem',
        padding: '0.5rem 0.9rem',
        '& img': {
          width: '26px',
          height: '26px'
        }
      },
      '@media (min-width: 375px)': {
        fontSize: '0.8rem',
        padding: '0.6rem 1rem',
        '& img': {
          width: '28px',
          height: '28px'
        }
      },
      '@media (min-width: 425px)': {
        fontSize: '0.85rem',
        '& img': {
          width: '30px',
          height: '30px'
        }
      },
      '@media (min-width: 768px)': {
        fontSize: '0.9rem',
        padding: '0.8rem 1.2rem',
        '& img': {
          width: '36px',
          height: '36px'
        }
      },
      '@media (min-width: 1024px)': {
        fontSize: '1rem',
        '& img': {
          width: '40px',
          height: '40px'
        }
      }
    },

    ctaButtonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginTop: '1.5rem',
      '@media (min-width: 375px)': { gap: '1.2rem' },
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '2rem'
      }
    },

    primaryButton: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      border: 'none',
      padding: '0.8rem 1.2rem',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: 600,
      fontSize: '0.95rem',
      width: '100%',
      maxWidth: '280px',
      margin: '0 auto',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      '&:active': { transform: 'scale(0.98)' },
      '@media (min-width: 768px)': {
        width: 'auto',
        margin: '0',
        padding: '1rem 1.8rem',
        fontSize: '1rem'
      }
    },

    secondaryButton: {
      background: 'none',
      border: `2px solid ${theme.primary}`,
      color: theme.text,
      '&:active': { background: theme.primary + '15' }
    },


    profileImageContainer: {
      width: '100%',
      maxWidth: '380px',
      position: 'relative',
      display: 'flex', // Added to enable flexbox
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto', // Horizontal centering
      aspectRatio: '1/1',
      marginBottom: '2rem',
      borderRadius: '60%',
       overflow: 'hidden', // Keep this enabled
      '@media (min-width: 768px)': {
        maxWidth: '450px'
      }
    },

    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      boxShadow: `0 15px 30px ${theme.primary}40`,
      border: `3px solid ${theme.primary}30`,
      objectFit: 'cover',
      objectPosition: 'center center', // Ensures face stays centered
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)'
      }
    },




    socialLinksWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.8rem',
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      '@media (min-width: 768px)': {
        position: 'absolute',
        right: '-50px',
        top: '50%',
        transform: 'translateY(-50%)',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: 0,
      }
    },

    socialLinkItem: {
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      background: theme.socialBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      background: 'rgba(255,255,255,0.1)',
      '&:active': { transform: 'scale(0.95)' },
      '@media (min-width: 768px)': {
        width: '50px',
        height: '50px',
        '&:hover': { background: theme.primary }
      }
    },

    socialIcon: {
      width: '30px',
      height: '30px',
      '@media (min-width: 768px)': {
        width: '24px',
        height: '24px'
      }
    },

    statsText: {
      fontSize: '0.9rem',
      color: theme.text,
      margin: '1rem 0',
      lineHeight: 1.6,
      opacity: 0.9,
      '@media (min-width: 375px)': { fontSize: '1rem' },
      '@media (min-width: 768px)': { fontSize: '1.1rem' }
    }
  };

  return (
    <section style={styles.hero}>



      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '2rem 1rem' : '4rem 2rem',
          gap: '2rem',
         // minHeight: '95vh',
        }}
      >

        {/* Left Column - Content */}


        <div style={{ flex: 1, ...styles.contentWrapper }}>
          <TypeAnimation
            sequence={['Hi there! 👋', 1000, "Hi! I'm Shehbaz 👋", 1000]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={styles.greetingText}
          />

          <h1 style={styles.mainHeading}>Top-Rated Freelance Developer</h1>
          <div style={styles.platformBadgesContainer}>
            <span style={styles.platformBadge}>
              <img src={upwork} alt="Upwork" style={{ width: '42px' }} />
              <span style={{ display: 'inline-block' }}>Top Rated</span>
            </span>
            <span style={styles.platformBadge}>
              <img src={fiverr} alt="Fiverr" style={{ width: '42px' }} />
              <span style={{ display: 'inline-block' }}>Level 2</span>
            </span>
            <span style={styles.platformBadge}>
              <img src={peopleperhour} alt="PPH" style={{ width: '42px' }} />
              <span style={{ display: 'inline-block' }}>Level 5</span>
            </span>
          </div>

          <p style={styles.subHeading}>
            Delivering agency-level quality at freelancer-friendly rates.
          </p>



          <p style={styles.statsText}>

            Expert Full-Stack Developer | Web & Mobile Apps | 50+ Projects Delivered | 100% Client Satisfaction
          </p>

          <div style={styles.ctaButtonGroup}>
            <button
              style={{ ...styles.primaryButton, ...styles.secondaryButton }}
              onClick={() => scrollTo('portfolio')}
            >
              View Portfolio
            </button>
            <a href="https://wa.me/+923100609111" style={{ textDecoration: 'none' }}>
              <button style={{ ...styles.primaryButton, ...styles.secondaryButton }}>
                WhatsApp Chat
              </button>
            </a>
            <a href="https://www.upwork.com/freelancers/~010d76b63a789d9687" style={{ textDecoration: 'none' }}>
              <button style={styles.primaryButton}>Hire Me Now</button>
            </a>
          </div>

          
        </div>

        {/* Right Column -  Profile Image */}

        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection:'column'
        }}>
          <div style={styles.profileImageContainer}>
            <img src={dummyImage} alt="Profile" style={styles.profileImage} />
          </div>

          <div style={styles.socialLinksWrapper}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} style={styles.socialLinkItem} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.name} style={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>
        
      </div>



    </section>
  );
};