// src/components/ClientReviews.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { reviews } from '../constants/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ClientReviews = ({ theme }) => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const MAX_CHARACTERS = 300;

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
      '@media (max-width: 768px)': {
        padding: '1.5rem',
        borderRadius: '16px'
      }
    },
    sliderContainer: {
      position: 'relative',
      padding: '0 2rem',
      '@media (max-width: 768px)': { padding: 0 }
    },
    review: {
      background: 'rgba(15, 23, 42, 0.6)',
      padding: '2rem',
      borderRadius: '16px',
      margin: '0 10px',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      border: `1px solid ${theme.border}`,
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    clientHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    statusDot: {
      width: '12px',
      height: '12px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      flexShrink: 0
    },
    clientInfo: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.5rem',
      flexWrap: 'wrap'
    },
    clientName: {
      fontSize: '1.3rem',
      fontWeight: 600,
      color: theme.text,
      margin: 0
    },
    projectText: {
      fontSize: '1.1rem',
      color: theme.text,
      opacity: 0.9,
      margin: 0
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0.5rem 0'
    },
    ratingText: {
      fontSize: '1rem',
      color: theme.text,
      opacity: 0.8,
      marginLeft: '0.5rem'
    },
    reviewText: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: theme.text,
      opacity: 0.9,
      flexGrow: 1,
      fontWeight: 400
    },

  };

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={index < 5 ? theme.primary : '#e4e5e9'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        <span style={styles.ratingText}>({rating.toFixed(1)})</span>
      </div>
    );
  };

  const toggleExpand = (reviewId) => {
    setExpandedReviews(prev => ({ ...prev, [reviewId]: !prev[reviewId] }));
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
                <div>

                  <div style={styles.clientHeader}>
                    <img
                      src={review.platform}
                      alt={review.platform}
                      style={{ width: '40px' }}
                    />

                    <div style={styles.clientInfo}>
                      <h3 style={styles.clientName}>{review.client}</h3>
                      <span style={styles.projectText}>{review.country}</span>
                      <span style={styles.projectText}>| {review.project}</span>

                    </div>

                  </div>

                  {renderStars(review.rating)}
                  <p style={styles.reviewText}>
                    “{renderText(review.text, review.id)}”
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};