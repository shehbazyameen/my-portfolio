// src/components/ClientReviews.js
import React, { useState } from 'react';
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
      backgroundcolor:"red",
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
      minHeight: '380px', // Increase min-height for rating space,
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
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '0.5rem'
    },
     paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: theme.text,
      opacity: 0.9,
      '@media (max-width: 768px)': { fontSize: '1rem' }
    },
    reviewText: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: theme.text,
      opacity: 0.9,
      minHeight: '80px',
      fontWeight:500,
    },
  };

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '4px', marginTop: '0.5rem' }}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={index < rating ? theme.primary : '#e4e5e9'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };
  const [expandedReviews, setExpandedReviews] = useState({});
  const MAX_CHARACTERS = 350;

  const toggleExpand = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const renderText = (text, reviewId) => {
    const isExpanded = expandedReviews[reviewId];

    if (text.length <= MAX_CHARACTERS) return text;

    return (
      <>
        {isExpanded ? text : `${text.substring(0, MAX_CHARACTERS)}...`}
        <button
          onClick={() => toggleExpand(reviewId)}
          style={{
            background: 'none',
            border: 'none',
            color: theme.primary,
            cursor: 'pointer',
            padding: '0 4px',
            marginLeft: '4px',
            fontWeight: 600
          }}
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </>
    );
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Client Voices</h2>
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
                  <div>
                    <p style={{ ...styles.paragraph, fontWeight: 600 }}>
                      {review.client} - {review.project}
                    </p>
                    {renderStars(review.rating)}
                  </div>
                </div>
                

                <p style={styles.reviewText}>
                  {renderText(review.text, review.id)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};