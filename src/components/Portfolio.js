



// src/components/Portfolio.js
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { projects } from '../constants/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fiverr from '../assets/fiverr.png';
import peopleperhour from '../assets/peopleperhour.png';

export const Portfolio = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState('mobile');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sliderRef = useRef(null);

  // Update filtered projects when filter changes
  useEffect(() => {
    setFilteredProjects(
      projects.filter(project => 
        activeFilter === 'all' || project.type === activeFilter
      )
    );
    
    // Reset slider to first slide when filter changes
    if(sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [activeFilter]);

  const sliderSettings = {
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
      '@media (max-width: 768px)': { padding: '1.5rem', borderRadius: '16px' }
    },
    filterButtons: {
      
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    },
    filterButton: {
      background: 'none',
      border: `1px solid ${theme.border}`,
      color: theme.text,
      padding: '0.6rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: theme.primary,
        borderColor: theme.primary
      },
    },
    activeFilter: {
      background: `${theme.primary}`,
      borderColor: `${theme.primary} !important`,
      
    },
    projectCard: {
      background: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '16px',
      padding: '1.5rem',
      border: `1px solid ${theme.border}`,
      transition: 'all 0.3s ease',
      boxShadow: `0 4px 12px ${theme.shadow}`,
      margin: '0 1rem',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 8px 24px ${theme.primary}30`
      }
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem'
    },
    sliderArrows: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: 'rgba(255,255,255,0.1)',
      border: `1px solid ${theme.border}`,
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: theme.primary
      }
    },
    prevArrow: {
      left: '-50px'
    },
    nextArrow: {
      right: '-50px'
    },
    arrowIcon: {
      width: '24px',
      height: '24px',
      filter: 'brightness(0) invert(1)'
    }
  };

  // ... keep styles the same ...

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Portfolio</h2>
      
      <div style={styles.filterButtons}>
        {['mobile', 'web', 'wordpress','shopify'].map((filter) => (
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
            style={{ ...styles.sliderArrows, ...styles.prevArrow }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src="/left-arrow.svg" alt="Previous" style={styles.arrowIcon} />
          </button>

          <Slider 
            ref={sliderRef} 
            key={activeFilter} // Force re-render on filter change
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
                  
                  <h3 style={{ color: theme.text, marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: theme.text, opacity: 0.8 }}>
                    {project.tech}
                  </p>

                  <a

                    href= {project.url}
                    target="_blank"
                    rel="noopener noreferrer"

                  >

                  <button style={{
                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    color: '#fff',
                    marginTop: '1rem',
                    cursor: 'pointer'
                  }}
                    
                  >
                    View Details
                    
                  </button>
                  /</a>
                </div>
              </div>
            ))}
          </Slider>

          <button 
            style={{ ...styles.sliderArrows, ...styles.nextArrow }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src="/right-arrow.svg" alt="Next" style={styles.arrowIcon} />
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