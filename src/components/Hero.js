// src/components/Hero.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import dummyImage from '../assets/profile.png';
import upwork from '../assets/upwork.png';
import fiverr from '../assets/fiverr.png';
import peopleperhour from '../assets/peopleperhour.png';


export const Hero = ({ theme, scrollTo }) => {

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shehbaz-yameen/', icon: require('../assets/linkedin.png') },
    { name: 'GitHub', url: 'https://github.com/shehbazyameen', icon: require('../assets/github.png') },
    { name: 'Instagram', url: 'https://www.instagram.com/shehbazyameen/', icon: require('../assets/instagram.png') },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Shehbaz-Yameen/100010091083500/', icon: require('../assets/facebook.png') },
    { name: 'Twitter', url: 'https://x.com/43shehbaz', icon: require('../assets/twitter.png') },


  ];

  const styles = {
    greetingText: {
      fontSize: '1.8rem',
      color: theme.text,
      margin: '0.5rem 0 1.5rem 0',
      minHeight: '3rem',

      '@media (max-width: 768px)': {
        fontSize: '1.4rem',
        textAlign: 'center'
      }
    },
    hero: {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem',
      padding: '2rem 1rem 4rem',
      position: 'relative',

      '@media (max-width: 768px)': {
        flexDirection: 'column',
        padding: '4rem 1rem 2rem',
        gap: '2rem'
      }
    },
    contentWrapper: {
      flex: 1,
      textAlign: 'left'
    },


    heading: {
      fontSize: '3.5rem',
      fontWeight: 800,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      marginBottom: '1.5rem',
      '@media (max-width: 768px)': {
        fontSize: '2.2rem',
        textAlign: 'center'
      }
    },
    heading2: {
      fontSize: '2.5rem',
      fontWeight: 400,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      marginBottom: '1.5rem',
      '@media (max-width: 768px)': {
        fontSize: '2.2rem',
        textAlign: 'center'
      }
    },
    subheading: {
      fontSize: '1.4rem',
      color: theme.text,
      marginBottom: '1rem',
      fontWeight: 500,
      opacity: 0.9,
      '@media (max-width: 768px)': {
        fontSize: '1.1rem',
        textAlign: 'center'
      }
    },
    tagline: {
      fontSize: '1.1rem',
      color: theme.text,
      marginBottom: '2rem',
      opacity: 0.8,
      lineHeight: 1.6,
      '@media (max-width: 768px)': {
        fontSize: '1rem',
        textAlign: 'center'
      }
    },

    buttonGroup: {
      display: 'flex',
      gap: '1.5rem',
      '@media (max-width: 768px)': {
        justifyContent: 'center'
      }
    },
    button: {
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      border: 'none',
      padding: '1rem 1.2rem',
      borderRadius: '12px',
      color: '#fff',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: `0 4px 20px ${theme.shadow}`,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 6px 24px ${theme.shadow}`
      },
      '@media (max-width: 768px)': {
        padding: '0.8rem 1.2rem',
        fontSize: '1rem'
      }
    },
    platformBadges: {
      display: 'flex',
      gap: '1rem',
      margin: '2rem 0',
      '@media (max-width: 768px)': {
        justifyContent: 'center'
      }
    },
    badge: {
      display: 'inline-block',
      padding: '0.8rem 1.2rem',
      borderRadius: '8px',
      background: theme.badgeBg,
      color: theme.badgeText,
      fontWeight: 500,
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.2rem'
    },

    imageWrapper: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      '@media (max-width: 768px)': {
        justifyContent: 'center'
      }
    },
    image: {
      width: '450px',
      height: '450px',
      objectFit: 'cover',
      borderRadius: '50%',
      boxShadow: `
        0 25px 50px -12px ${theme.primary}40,
        0 0 15px ${theme.primary}20
      `,
      transform: 'translateY(-10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      '@media (max-width: 768px)': {
        width: '240px',
        height: '240px'
      },
      '&:hover': {
        transform: 'translateY(-15px)',
        boxShadow: `
          0 35px 60px -12px ${theme.primary}50,
          0 0 25px ${theme.primary}30
        `
      }
    },

    socialLinksContainer: {
      position: 'absolute',
      right: '-40px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      '@media (max-width: 768px)': {
        position: 'static',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2rem',
        transform: 'none'
      }
    },
    socialLink: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: theme.primary,
        transform: 'scale(1.1)'
      }
    },
    socialIcon: {
      width: '44px',
      height: '44px',
    }


  };

  return (
    <section style={styles.hero}>

      <div style={styles.contentWrapper}>

        {/* Animated Greeting */}
        <TypeAnimation
          sequence={[
            'Hi there! 👋',
            1000,
            'Hi there! I\'m Shehbaz Yameen 👋',
            1000,

          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={styles.greetingText}
        />

        <h1 style={styles.heading}>Top-Rated Freelance Developer.</h1>
        <div style={styles.platformBadges}>
          <span style={styles.badge}>
            <img src={upwork} alt="Upwork" style={{ width: '40px' }} />
            Top Rated
          </span>
          <span style={styles.badge}>
            <img src={fiverr} alt="Fiverr" style={{ width: '42px' }} />
            Level 2 Seller
          </span>
          <span style={styles.badge}>
            <img src={peopleperhour} alt="peopleperhour" style={{ width: '42px' }} />
            Level 5 Seller
          </span>
        </div>

        <h2 style={styles.heading2}>
          Delivering agency-level quality at freelancer-friendly rates.</h2>

        <p style={styles.subheading}>Full-Stack Developer | Web & Mobile Apps | 50+ Projects Delivered</p>
        <p style={styles.tagline}>
          Creating seamless, user-friendly websites and apps with strong, reliable backends.
        </p>

        <div style={styles.buttonGroup}>
         
          <button
            onClick={() => scrollTo('portfolio')}
            style={{ ...styles.button, background: 'none', border: `2px solid ${theme.primary}` }}
          >
            View Portfolio
          </button>
        

          <a

            href="https://wa.me/+923100609111" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"

          >

            <button
              onClick={() => {

              }}

              style={{ ...styles.button, background: 'none', border: `2px solid ${theme.primary}` }}>Chat on WhatsApp</button>
          </a>

          <a

            href={'https://www.upwork.com/freelancers/~010d76b63a789d9687'}
            target="_blank"
            rel="noopener noreferrer"

          >

            <button
              onClick={() => {

              }}

              style={styles.button}>Hire Me</button>
          </a>
          

        </div>
      </div>

      <div style={styles.imageWrapper}>
        <img
          src={dummyImage}
          alt="Shehbaz Yameen"
          style={{
            ...styles.image,
            border: 'none', // Remove any existing border
          }}
        />


        {/* Social Links */}
        <div style={styles.socialLinksContainer}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              <img
                src={link.icon}
                alt={link.name}
                style={styles.socialIcon}
              />
            </a>
          ))}
        </div>

      </div>



    </section>
  );
};