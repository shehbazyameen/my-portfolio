// src/App.js
import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ClientReviews } from './components/ClientReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoSection } from './components/VideoSection';

import { darkTheme } from './constants/theme';

const App = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const reviewsRef = useRef(null);
  const VideoRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    const refs = {
      hero: heroRef,
      services: servicesRef,
      portfolio: portfolioRef,
      reviews: reviewsRef,

      VideoSection: VideoRef,
      contact: contactRef
    };

    refs[section].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div style={containerStyleMain}>
      <div style={containerStyle}>
        <Header theme={darkTheme} scrollTo={scrollTo} />

        <div ref={heroRef}>
          <Hero theme={darkTheme} scrollTo={scrollTo} />
        </div>

        <div ref={servicesRef}>
          <Services theme={darkTheme} scrollTo={scrollTo} />
        </div>

        <div ref={portfolioRef}>
          <Portfolio theme={darkTheme} scrollTo={scrollTo} />
        </div>

        <div ref={reviewsRef}>
          <ClientReviews theme={darkTheme} scrollTo={scrollTo} />
        </div>

        <div ref={VideoRef}>
          <VideoSection theme={darkTheme} scrollTo={scrollTo} />
        </div>


        <div ref={contactRef}>
          <Contact theme={darkTheme} scrollTo={scrollTo} />
        </div>

        <Footer theme={darkTheme} scrollTo={scrollTo} />
      </div>
    </div>
  );
};

const containerStyle = {
  fontFamily: "'Inter', sans-serif",
  background: darkTheme.background,
  color: darkTheme.text,
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: '100vh',
  paddingTop: '80px', // Space for fixed header
  boxSizing: 'border-box',
  '@media (max-width: 768px)': {
    padding: '1.5rem',
    paddingTop: '70px'
  },
  '@media (max-width: 480px)': {
    padding: '1rem',
    paddingTop: '60px'
  },
  '@media (max-width: 375px)': { // iPhone SE specific
    padding: '0.75rem',
    paddingTop: '55px'
  }
};

const containerStyleMain = {
  background: 'linear-gradient(to bottom, rgb(2, 5, 35), rgb(57, 91, 133))',
  color: '#f8fafc',
  minHeight: '100vh',
  width: '100%',
  overflowX: 'hidden' // Prevent horizontal scrolling
};

export default App;