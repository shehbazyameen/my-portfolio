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
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      }
    ]
  };

  const styles = {
    section: {
      marginBottom: '4rem',
      padding: '1.5rem',
      background: theme.sectionBg,
      borderRadius: '20px',
      boxShadow: `0 4px 24px ${theme.shadow}`,
      backdropFilter: 'blur(12px)',
      border: `1px solid ${theme.border}`,
      '@media (min-width: 375px)': {
        padding: '2rem',
        marginBottom: '5rem'
      },
      '@media (min-width: 768px)': {
        padding: '2.5rem',
        borderRadius: '24px'
      }
    },
    sliderContainer: {
      position: 'relative',
      padding: '0 1rem',
      '@media (min-width: 375px)': {
        padding: '0 1.5rem'
      },
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },
    review: {
      background: 'rgba(15, 23, 42, 0.6)',
      padding: '1.5rem',
      borderRadius: '16px',
      margin: '0 8px',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      border: `1px solid ${theme.border}`,
      minHeight: '220px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '@media (min-width: 375px)': {
        margin: '0 10px',
        padding: '2rem',
        minHeight: '250px'
      }
    },
    clientHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '0.8rem',
      flexWrap: 'wrap'
    },
    statusDot: {
      width: '10px',
      height: '10px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      flexShrink: 0,
      '@media (min-width: 375px)': {
        width: '12px',
        height: '12px'
      }
    },
    clientInfo: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.5rem',
      flexWrap: 'wrap',
      rowGap: '0.25rem'
    },
    clientName: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: theme.text,
      margin: 0,
      '@media (min-width: 375px)': {
        fontSize: '1.2rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.3rem'
      }
    },
    projectText: {
      fontSize: '0.9rem',
      color: theme.text,
      opacity: 0.9,
      margin: 0,
      '@media (min-width: 375px)': {
        fontSize: '1rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.1rem'
      }
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0.5rem 0'
    },
    ratingText: {
      fontSize: '0.9rem',
      color: theme.text,
      opacity: 0.8,
      marginLeft: '0.5rem',
      '@media (min-width: 375px)': {
        fontSize: '1rem'
      }
    },
    reviewText: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: theme.text,
      opacity: 0.9,
      flexGrow: 1,
      fontWeight: 400,
      '@media (min-width: 375px)': {
        fontSize: '1rem'
      },
      '@media (min-width: 768px)': {
        fontSize: '1.1rem'
      }
    },
    expandButton: {
      background: 'none',
      border: 'none',
      color: theme.primary,
      cursor: 'pointer',
      padding: '4px 6px',
      marginLeft: '4px',
      fontWeight: 600,
      fontSize: '0.9rem',
      '@media (min-width: 375px)': {
        fontSize: '1rem',
        padding: '0 4px'
      }
    }
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
                      style={{
                        width: '32px',
                        '@media (min-width: 375px)': {
                          width: '40px'
                        }
                      }}
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