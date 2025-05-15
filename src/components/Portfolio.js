// src/components/Portfolio.js
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { projects } from '../constants/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Portfolio = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('mobile');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sliderRef = useRef(null);

  useEffect(() => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = sliderStyles;
  document.head.appendChild(styleElement);
  
  return () => {
    document.head.removeChild(styleElement);
  };
}, []);

  const sliderStyles = `
  
.slick-dots li.slick-active button:before {
  color: #3b82f6 !important;
  opacity: 1;
}
`;

  useEffect(() => {
    setFilteredProjects(
      projects.filter(project =>
        activeFilter === 'all' || project.type === activeFilter
      )
    );

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [activeFilter]);


  
  const sliderSettings = {
    dotsColor:'red',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, filteredProjects.length),
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, filteredProjects.length),
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: theme.text,
      position: 'relative',
      lineHeight: 1.3,
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-0.5rem',
        left: 0,
        width: '50px',
        height: '3px',
        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
        borderRadius: '2px',
      },
      '@media (min-width: 375px)': {
        fontSize: '2rem',
        marginBottom: '2rem',
        '&::after': {
          width: '60px',
          height: '4px'
        }
      },
      '@media (min-width: 768px)': {
        fontSize: '2.5rem',
        marginBottom: '2.5rem'
      }
    },
    filterButtons: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap',
      '@media (min-width: 375px)': {
        gap: '1rem',
        marginBottom: '2rem'
      }
    },
    filterButton: {
      background: 'none',
      border: `1px solid ${theme.border}`,
      color: theme.text,
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      '&:hover': {
        background: theme.primary,
        borderColor: theme.primary
      },
      '@media (min-width: 375px)': {
        padding: '0.6rem 1.5rem',
        fontSize: '1rem'
      }
    },
    activeFilter: {
      background: `${theme.primary}`,
      borderColor: `${theme.primary} !important`,
    },
    projectCard: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '16px',
      padding: '1rem',
      border: `1px solid ${theme.border}`,
      transition: 'all 0.3s ease',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      margin: '0 0.5rem',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 8px 24px ${theme.primary}30`
      },
      '@media (min-width: 375px)': {
        padding: '1.5rem',
        margin: '0 1rem'
      },
      '@media (max-width: 768px)': {
        '&:hover': {
          transform: 'none'
        }
      }
    },
    projectImage: {
      width: '100%',
      height: '160px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
      '@media (min-width: 375px)': {
        height: '180px'
      },
      '@media (min-width: 768px)': {
        height: '200px'
      }
    },
    sliderArrows: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: 'rgba(255,255,255,0.1)',
      border: `1px solid ${theme.border}`,
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: theme.primary
      },
      '@media (max-width: 768px)': {
        width: '32px',
        height: '32px',
        left: '10px',
        '&.next': {
          right: '10px'
        }
      }
    },
    arrowIcon: {
      width: '20px',
      height: '20px',
      filter: 'brightness(0) invert(1)',
      '@media (min-width: 768px)': {
        width: '24px',
        height: '24px'
      }
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Portfolio</h2>

      <div style={styles.filterButtons}>
        {['mobile', 'web', 'wordpress', 'shopify'].map((filter) => (
          <button
            key={filter}
            style={{
              ...styles.filterButton,
              ...(activeFilter === filter && styles.activeFilter)
            }}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div style={{ position: 'relative' }}>
          <button
            style={{ ...styles.sliderArrows, left: '-40px' }}
            onClick={() => sliderRef.current.slickPrev()}
            className="prev"
          >
            <img src={require('../assets/back-button.png')} alt="Previous" style={styles.arrowIcon} />
          </button>

          <Slider
            ref={sliderRef}
            key={activeFilter}
            {...sliderSettings}
          >
            {filteredProjects.map(project => (
              <div key={project.id}>
                <div style={styles.projectCard}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.projectImage}
                  />
                  <h3 style={{ color: theme.text, marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: theme.text, opacity: 0.8, fontSize: '0.9rem' }}>
                    {project.tech}
                  </p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <button style={{
                      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      color: '#fff',
                      marginTop: '1rem',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}>
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>

          <button
            style={{ ...styles.sliderArrows, right: '-40px' }}
            onClick={() => sliderRef.current.slickNext()}
            className="next"
          >
            <img src={require('../assets/right-arrows.png')} alt="Next" style={styles.arrowIcon} />
          </button>
        </div>
      ) : (
        <p style={{ color: theme.text, textAlign: 'center' }}>
          No projects found in this category
        </p>
      )}
    </section>
  );
};