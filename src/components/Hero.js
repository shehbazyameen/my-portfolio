// src/components/Hero.js
import React, { useEffect, useState } from 'react';


import { TypeAnimation } from 'react-type-animation';
// Import statements
import {
  FaAndroid,        // Android
  FaApple,          // iOS
  FaCode,           // Coding
  FaGlobe,          // Web Development
  FaNodeJs,         // Node.js
  FaMobileAlt,      // Mobile App
  FaLaptopCode      // General Coding
} from 'react-icons/fa';

import {
  SiReact,          // React.js
  SiJavascript,     // JavaScript
  SiFirebase,       // Firebase
  SiWordpress,      // WordPress
  SiShopify,        // Shopify
  SiNextdotjs,      // Next.js
  SiTypescript      // TypeScript (common with Next.js)
} from 'react-icons/si';

import dummyImage from '../assets/profile.png';
import upwork from '../assets/upwork.png';
import fiverr from '../assets/fiverr.png';
import peopleperhour from '../assets/peopleperhour.png';



export const Hero = ({ theme, scrollTo }) => {

  const [isHoverPortfolio, setIsHoverPortfolio] = useState(false);
  const [isHoverWhatsApp, setIsHoverWhatsApp] = useState(false);
  const [isHoverHire, setIsHoverHire] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Function to generate random positions
  const randomPosition = () => ({
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`
  });



  
  // Example usage in your tech stack array
  const techStack = [
   // { icon: <FaMobileAlt />, name: 'Mobile App', animation: 'spin' },
    { icon: <FaAndroid />, name: 'Android', animation: 'spin' },
    { icon: <FaApple />, name: 'iOS', animation: 'spin' },
//    { icon: <FaGlobe />, name: 'Web Dev', animation: 'spin' },
    { icon: <FaCode />, name: 'Coding', animation: 'spin' },
    { icon: <SiReact />, name: 'React', animation: 'spin' },
    { icon: <SiJavascript />, name: 'JavaScript', animation: 'spin' },
   // { icon: <FaNodeJs />, name: 'Node.js', animation: 'spin' },
    //{ icon: <SiFirebase />, name: 'Firebase', animation: 'float' },
    //{ icon: <SiWordpress />, name: 'WordPress', animation: 'spin' },
   // { icon: <SiShopify />, name: 'Shopify', animation: 'spin' },
    //{ icon: <SiNextdotjs />, name: 'Next.js', animation: 'spin' },
    //{ icon: <FaLaptopCode />, name: 'Development', animation: 'spin' }
  ];


  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shehbaz-yameen/', icon: require('../assets/linkedin.png') },
    { name: 'GitHub', url: 'https://github.com/shehbazyameen', icon: require('../assets/github.png') },
    { name: 'Instagram', url: 'https://www.instagram.com/shehbazyameen/', icon: require('../assets/instagram.png') },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Shehbaz-Yameen/100010091083500/', icon: require('../assets/facebook.png') },
    { name: 'Twitter', url: 'https://x.com/43shehbaz', icon: require('../assets/twitter.png') },


  ];



  const styles = {
    techSpinners: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none',
      display: 'grid',  // Changed to grid layout
      gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
      gap: '2rem', // Space between icons
      padding: '1rem',
    },

    techIcon: {
      opacity: 0.15,
      color: theme.primary,
      fontSize: '2.5rem',
      margin: '1rem', // Add margin around each icon
      animationDuration: '20s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      // Add minimum spacing constraints
      minWidth: '60px',
      minHeight: '60px',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem',
        opacity: 0.1,
        margin: '0.5rem', // Smaller margin on mobile
        minWidth: '40px',
        minHeight: '40px',
      }
    },
    
    // Animation keyframes
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    '@keyframes spinReverse': {
      '0%': { transform: 'rotate(360deg)' },
      '100%': { transform: 'rotate(0deg)' }
    },
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' }
    },
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2)' }
    },
    '@keyframes bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' }
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    '@keyframes spinReverse': {
      '0%': { transform: 'rotate(360deg)' },
      '100%': { transform: 'rotate(0deg)' }
    },
    '@keyframes float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' }
    },
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2)' }
    },
    '@keyframes bounce': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' }
    },

    expertiseContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      margin: '2rem 0',
      padding: '1.5rem',
      background: `linear-gradient(145deg, ${theme.primary}15, ${theme.secondary}10)`,
      borderRadius: '16px',
      border: `1px solid ${theme.primary}30`,
      position: 'relative',
      overflow: 'hidden',
      '@media (min-width: 768px)': {
        justifyContent: 'space-between'
      }
    },

    expertiseItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.8rem 1.2rem',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 4px 15px ${theme.primary}30`
      }
    },

    expertiseIcon: {
      width: '24px',
      height: '24px',
      filter: `drop-shadow(0 2px 4px ${theme.primary}30)`
    },

    expertiseText: {
      fontSize: '0.95rem',
      background: `linear-gradient(45deg, ${theme.text}, ${theme.primary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 600,
      margin: 0,
      '@media (min-width: 768px)': {
        fontSize: '1.1rem'
      }
    },

    expertiseSeparator: {
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'block',
        color: theme.primary,
        opacity: 0.5,
        margin: '0 1rem'
      }
    },
    mainHeading: {
      fontSize: '1.8rem',
      fontWeight: 800,
      background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.2,
      margin: '0 0 1rem',
      position: 'relative',
      '@media (min-width: 375px)': { fontSize: '2rem' },
      '@media (min-width: 768px)': {
        fontSize: '3.5rem',
        lineHeight: 1.3
      }
    },

    dynamicTagline: {
      fontSize: '1.2rem',
      fontWeight: 700,
      background: `linear-gradient(45deg, ${theme.secondary}, ${theme.primary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.3,
      margin: '1rem 0',
      padding: '0.5rem 1rem',
      display: 'inline-block',
      borderRadius: '8px',
      border: `2px solid ${theme.primary}30`,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 4px 15px ${theme.primary}30`
      },
      '@media (min-width: 768px)': {
        fontSize: '1.5rem',
        margin: '1.5rem 0'
      }
    },

    animatedSubheading: {
      fontSize: '1.1rem',
      color: theme.text,
      margin: '1.5rem 0',
      padding: '1.5rem',
      background: `linear-gradient(145deg, ${theme.primary}15, ${theme.secondary}10)`,
      borderRadius: '12px',
      border: `1px solid ${theme.primary}30`,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${theme.primary}15, transparent)`,
        transition: 'left 0.6s ease'
      },
      '&:hover::before': {
        left: '100%'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.3rem',
        padding: '2rem'
      }
    },


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
      transition: 'all 0.3s ease',
     
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
      transition: 'all 0.3s ease',
     
    },

    primaryButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: `0 5px 15px ${theme.primary}80`
    },

    secondaryButtonHover: {
      transform: 'scale(1.05)',
      background: `${theme.primary}20`
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
      // marginTop: '1.5rem',
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
    },

  };

  return (
    <section style={styles.hero}>



      {/* Tech Spinner Background */}
      <div style={styles.techSpinners}>
        {techStack.map((tech, index) => (
          <div
            key={index}
            style={{
              ...styles.techIcon,
              ...randomPosition(),
              animationName: tech.animation
            }}
            aria-hidden="true"
          >
            {tech.icon}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '2rem 1rem' : '4rem 2rem',
          gap: '2rem',
          position: 'relative',
          zIndex: 1 // Ensure content stays on top
        }}
      >

        {/* Left Column - Content */}


        <div style={{ flex: 1, ...styles.contentWrapper }}>
          <TypeAnimation
            sequence={['Hi there! 👋', 1000, "Hi! I'm Shehbaz Yameen 👋", 1000]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={styles.greetingText}
          />

          <h1 style={styles.mainHeading}>Top-Rated Freelance Developer</h1>
          <h1 style={{
            fontSize: '1rem',
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
          }}>
          AI-Driven. Industry-Tested. Results-Focused. </h1>


          <div style={styles.platformBadgesContainer}>
            <a href="https://www.upwork.com/freelancers/~010d76b63a789d9687" style={{ textDecoration: 'none' }}>
              <span style={styles.platformBadge}>
                <img src={upwork} alt="Upwork" style={{ width: '32px' }} />
                <span style={{ display: 'inline-block' }}>Top Rated</span>
              </span>
            </a>
            <a href="https://www.fiverr.com/shehbazfiver786" style={{ textDecoration: 'none' }}>
              <span style={styles.platformBadge}>
                <img src={fiverr} alt="Fiverr" style={{ width: '32px' }} />
                <span style={{ display: 'inline-block' }}>Top Rated</span>
              </span>

            </a>

            {/* <a href="http://pph.me/shehbazyameen" style={{ textDecoration: 'none' }}>

              <span style={styles.platformBadge}>
                <img src={peopleperhour} alt="PPH" style={{ width: '32px' }} />
                <span style={{ display: 'inline-block' }}>Top Rated</span>
              </span>
            </a> */}


          </div>

          <div style={styles.animatedSubheading}>
            ✨ Delivering <strong>agency-level quality</strong> at <br />
            <strong>freelancer-friendly rates</strong> with 100% client satisfaction
          </div>



          <div style={styles.expertiseContainer}>
            <div style={styles.expertiseItem}>
              
              <p style={styles.expertiseText}>React Native & React js (3+ Years)</p>
            </div>

            <span style={styles.expertiseSeparator}>|</span>

            <div style={styles.expertiseItem}>
             
              <p style={styles.expertiseText}>Web & Mobile Apps Expert</p>
            </div>

            <span style={styles.expertiseSeparator}>|</span>

            <div style={styles.expertiseItem}>
             
              <p style={styles.expertiseText}>10+ Projects Delivered</p>
            </div>

            <span style={styles.expertiseSeparator}>|</span>

            <div style={styles.expertiseItem}>
             
              <p style={styles.expertiseText}>Excellence in Every Line of Code</p>
            </div>
          </div>
          <div style={styles.ctaButtonGroup}>
            <button
              style={{
                ...styles.primaryButton,
                ...styles.secondaryButton,
                ...(isHoverPortfolio && styles.secondaryButtonHover)
              }}
              onClick={() => scrollTo('portfolio')}
              onMouseEnter={() => setIsHoverPortfolio(true)}
              onMouseLeave={() => setIsHoverPortfolio(false)}
            >
              View Portfolio
            </button>

            <a href="https://wa.me/+923100609111" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  ...styles.primaryButton,
                  ...styles.secondaryButton,
                  ...(isHoverWhatsApp && styles.secondaryButtonHover)
                }}
                onMouseEnter={() => setIsHoverWhatsApp(true)}
                onMouseLeave={() => setIsHoverWhatsApp(false)}
              >
                WhatsApp Chat
              </button>
            </a>

            <a href="https://www.upwork.com/freelancers/~010d76b63a789d9687" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  ...styles.primaryButton,
                  ...(isHoverHire && styles.primaryButtonHover)
                }}
                onMouseEnter={() => setIsHoverHire(true)}
                onMouseLeave={() => setIsHoverHire(false)}
              >
                Hire Me Now
              </button>
            </a>
          </div>
          <p style={styles.statsText}>

            📌 Freelance | 📁 Project-Based | 🕒 Full/Part Time
          </p>
        </div>



        

        {/* Right Column -  Profile Image */}

        <div style={styles.profileColumn}>
        
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
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

        

      </div>


   
    </section>
  );
};