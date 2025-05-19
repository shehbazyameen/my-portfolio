// src/components/VideoSection.js
import React from 'react';

export const VideoSection = ({ theme }) => {
    const videos = [
        {
            id: 'MTHF6dwBcNw?si=oCqIXiAO2IjlhpjV', // Replace with your YouTube video ID
            title: 'Meet Shehbaz Yameen',
            description: 'Web & Mobile Apps Specialist'
          //  description: 'Full-Stack Developer | Web & Mobile Apps Specialist'
        },
       
    ];

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
        videoGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            '@media (min-width: 600px)': {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem'
            },
            '@media (min-width: 1024px)': {
                gap: '2rem'
            }
        },
        videoCard: {
            background: 'rgba(15, 23, 42, 0.3)',
            borderRadius: '16px',
            padding: '1rem',
            border: `1px solid ${theme.border}`,
            boxShadow: `0 4px 12px ${theme.shadow}`,
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 8px 24px ${theme.primary}30`
            },
            '@media (max-width: 768px)': {
                '&:hover': {
                    transform: 'none'
                }
            }
        },
        videoContainer: {
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', // 16:9 aspect ratio
            borderRadius: '8px',
            overflow: 'hidden'
        },
        iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
        },
        videoInfo: {
            padding: '1rem 0.5rem',
            '@media (min-width: 375px)': {
                padding: '1.5rem 1rem'
            }
        },
        videoTitle: {
            fontSize: '1.1rem',
            color: theme.text,
            margin: '0.5rem 0',
            fontWeight: 600,
            '@media (min-width: 375px)': {
                fontSize: '1.2rem'
            },
            '@media (min-width: 768px)': {
                fontSize: '1.3rem'
            }
        },
        videoDescription: {
            fontSize: '0.95rem',
            color: theme.text,
            opacity: 0.9,
            lineHeight: 1.6,
            margin: 0,
            '@media (min-width: 375px)': {
                fontSize: '1rem'
            }
        }
    };

    return (
        <section style={styles.section} id="videos">
            <h2 style={styles.sectionTitle}>My Video Content</h2>

            <div style={styles.videoGrid}>
                {videos.map((video) => (
                    <div key={video.id} style={styles.videoCard}>
                        <div style={styles.videoContainer}>
                            <iframe
                                style={styles.iframe}
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div style={styles.videoInfo}>
                            <h3 style={styles.videoTitle}>{video.title}</h3>
                            <p style={styles.videoDescription}>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};