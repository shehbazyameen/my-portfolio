// src/components/ClientReviews.js
import React from 'react';
import Slider from 'react-slick';
import { reviews } from '../constants/theme';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export const ClientReviews = ({ theme }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const styles = {
    section: {
      marginBottom: '5rem',
      padding: '2.5rem',
      background: theme.sectionBg,
      borderRadius: '24px',
      boxShadow: `0 8px 32px ${theme.shadow}`,
      backdropFilter: 'blur(12px)',
      border: `1px solid ${theme.border}`,
      overflow: 'hidden', // Add this
      '@media (max-width: 768px)': { 
        padding: '1.5rem',
        borderRadius: '16px'
      }
    },
    sliderContainer: {
      position: 'relative',
      padding: '0 2rem',
      '@media (max-width: 768px)': {
        padding: 0
      }
    },
    review: {
      background: 'rgba(15, 23, 42, 0.6)',
      padding: '2rem',
      borderRadius: '16px',
      margin: '0 10px',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      border: `1px solid ${theme.border}`,
      position: 'relative',
      minHeight: '250px',
      boxSizing: 'border-box', // Add this
      '&::before': {
        content: '"\\201C"',
        position: 'absolute',
        fontSize: '4rem',
        color: theme.quoteColor,
        top: '-1rem',
        left: '0.5rem',
        opacity: 0.5
      },
    },
     paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: theme.text,
      opacity: 0.9,
      '@media (max-width: 768px)': { fontSize: '1rem' }
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Client  </h2>
      <div style={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <div style={styles.review}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={`/${review.platform}-icon.svg`} 
                    alt={review.platform} 
                    style={{ width: '24px', filter: 'brightness(0) invert(1)' }} 
                  />
                  <p style={{...styles.paragraph, fontWeight: 600}}>
                    {review.client} - {review.project}
                  </p>
                </div>
                <p style={styles.paragraph}>"{review.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};