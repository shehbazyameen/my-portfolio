// src/App.js
import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ClientReviews } from './components/ClientReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { darkTheme } from './constants/theme';

const App = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (section) => {
    const refs = {
      hero: heroRef,
      services: servicesRef,
      portfolio: portfolioRef,
      reviews: reviewsRef,
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
        <Hero theme={darkTheme} 

          scrollTo={scrollTo}
        />
      </div>

      <div ref={servicesRef}>
        <Services theme={darkTheme}
          scrollTo={scrollTo}

        />
      </div>

      <div ref={portfolioRef}>
        <Portfolio theme={darkTheme}
          scrollTo={scrollTo}
        />
      </div>

      <div ref={reviewsRef}>
        <ClientReviews theme={darkTheme}
          scrollTo={scrollTo}
        />
      </div>

      <div ref={contactRef}>
        <Contact theme={darkTheme} 
          scrollTo={scrollTo}
        />
      </div>

      <Footer theme={darkTheme} 
        scrollTo={scrollTo}
      />
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
  '@media (max-width: 768px)': {
    padding: '1rem',
    paddingTop: '70px'
  }
};



const containerStyleMain = {
  background: 'linear-gradient(to bottom,rgb(2, 5, 35),rgb(57, 91, 133))',
  color: '#f8fafc',
};



export default App;