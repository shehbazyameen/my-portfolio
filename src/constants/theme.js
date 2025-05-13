// src/constants/theme.js
export const darkTheme = {
  background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
  text: '#f8fafc',
  primary: '#818cf8',
  secondary: '#60a5fa',
  sectionBg: 'rgba(30, 41, 59, 0.7)',
  border: 'rgba(71, 85, 105, 0.3)',
  badgeBg: 'rgba(129, 140, 248, 0.2)',
  badgeText: '#c7d2fe',
  shadow: 'rgba(0, 0, 0, 0.2)',
  quoteColor: '#4f46e5',
  imageBorder: '#334155',

  zIndices: {
    header: 1000,
    // ...
  }


};

export const reviews = [
  { id: 1, platform: require('../assets/upwork.png'), client: 'HKTM', project: 'Web Development', rating: 5, text: 'Shehbaz showed strong skills in web development. He handles complex situations well, communicates clearly, and delivers high-quality work. Highly recommended for any web development project!' },
  { id: 2, platform: require('../assets/fiverr.png'), client: 'Linda Sabic', project: 'Real Estate', rating: 5, text: 'Working with Shehbaz for my real estate marketing was a fantastic experience. He totally got what I needed from day one and was always super quick to answer any questions I had. His responsiveness and understanding made everything stress-free. If you are looking for someone amazing to boost your marketing game, I can not recommend Shehbaz enough! He is truly awesome!' },
  { id: 3, platform: require('../assets/peopleperhour.png'), client: 'Mustapha', project: 'Web Development', rating: 5, text: "Excellent freelance. Positive and calm; Good project, we will work together again for sure." }
  // Add other reviews...
];

// Example project structure
export const projects = [
  {
    id: 1,
    type: 'web', // Must match filter values ('web', 'mobile', 'design')
    title: 'E-commerce Platform',
    tech: 'React, Node.js, MongoDB',
    image: require('../assets/project1.jpg')
  },
  {
    id: 2,
    type: 'mobile',
    title: 'Fitness App',
    tech: 'React Native, Firebase',
    image: require('../assets/project1.jpg')
  },
  {
    id: 1,
    type: 'web', // Must match filter values ('web', 'mobile', 'design')
    title: 'E-commerce Platform',
    tech: 'React, Node.js, MongoDB',
    image: '../assets/project1.jpg'
  },
  {
    id: 2,
    type: 'mobile',
    title: 'Fitness App',
    tech: 'React Native, Firebase',
    image: '/project2.jpg'
  },
  {
    id: 1,
    type: 'web', // Must match filter values ('web', 'mobile', 'design')
    title: 'E-commerce Platform',
    tech: 'React, Node.js, MongoDB',
    image: '/project1.jpg'
  },
  {
    id: 2,
    type: 'mobile',
    title: 'Fitness App',
    tech: 'React Native, Firebase',
    image: '/project2.jpg'
  },

  // Add more projects with proper types
];
