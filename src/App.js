// src/App.js
import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ClientReviews } from './components/ClientReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { darkTheme } from './constants/theme';

const App = () => {
  return (
    <div style={containerStyle}>
      <Hero theme={darkTheme} />
      <Services theme={darkTheme} />
      <Portfolio theme={darkTheme} />
      <ClientReviews theme={darkTheme} />
      <Contact theme={darkTheme} />
      <Footer theme={darkTheme} />
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
  '@media (max-width: 768px)': { padding: '1rem' }
};

export default App;