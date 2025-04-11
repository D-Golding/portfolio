import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from "../../components/header/header.jsx";
import DeveloperSkillsSlider from '../../components/skillSlider/skillSlider.jsx'; // Adjust path as needed
import after from '../../assets/before.jpg';
import before from '../../assets/after.jpeg';

// Import images
import hero from '../../assets/hero.jpeg';
import profile from '../../assets/profile.jpeg';
import shutterpic1 from '../../assets/shutterpic1.jpeg';
import shutterpic2 from '../../assets/shutterpic2.jpeg';
import shutterpic3 from '../../assets/shutterpic3.jpeg';
import shutterpic4 from '../../assets/shutterpic4.jpeg';
import shutterpic5 from '../../assets/shutterpic5.jpeg';
import shutterpic6 from '../../assets/shutterpic6.jpeg';

// Custom icons
const IconCamera = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const IconPhoto = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const IconLayout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconZoomIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const IconMap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const IconServer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconSliders = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  </svg>
);

// Theme definition
const themes = {
  light: {
    primary: '#2C3E50',     // Dark blue
    secondary: '#1ABC9C',   // Teal
    accent1: '#3498DB',     // Blue
    accent2: '#E74C3C',     // Red accent
    light: '#FFFFFF',
    background: '#F8F9FC',
    text: '#2C3E50',
    textLight: '#7F8C8D',
    card: '#FFFFFF',
    border: '#ECF0F1'
  },
  dark: {
    primary: '#2C3E50',
    secondary: '#1ABC9C',
    accent1: '#3498DB',
    accent2: '#E74C3C',
    background: '#121318',
    text: '#ECF0F1',
    textLight: '#BDC3C7',
    card: '#1E1F26',
    border: '#2D2F3B'
  }
};

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    scroll-behavior: smooth;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }

  button {
    font-family: 'Inter', sans-serif;
  }
  
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes zoom {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

// Hero section styles
const HeroSection = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;
  color: ${props => props.theme.light};
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(44,62,80,0.7) 100%);
  z-index: 1;
`;

// Page container
const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.text};
  line-height: 1.6;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Header styles
const SubHeader = styled.header`
  position: relative;
  z-index: 10;
  padding: 20px 0;
  background-color: ${props => `${props.theme.background}E6`};
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavLink = styled.a`
  margin-left: 30px;
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.secondary};
    transform: translateY(-2px);
  }
  
  svg {
    stroke-width: 2px;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textLight};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 8px;
  margin-left: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    color: ${props => props.theme.text};
  }
`;

const TitleIcon = styled.div`
  font-size: 24px;
  color: ${props => props.theme.light};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  
  svg {
    animation: float 3s ease-in-out infinite;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(to right, 
    ${props => props.theme.light || '#FFFFFF'}, 
    ${props => props.theme.secondary}, 
    ${props => props.theme.accent1});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 30px rgba(26, 188, 156, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.accent1});
    border-radius: 2px;
  }`;

const PageSubtitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${props => props.theme.light};
  margin-bottom: 30px;
  font-weight: 400;
  letter-spacing: 0.5px;
  max-width: 700px;
  margin: 0 auto;
`;

// Main content styling
const IntroText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${props => props.theme.text};
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
`;

// Feature Image Section
const FeatureSection = styled.section`
  position: relative;
  padding: 80px 0;
  margin: 60px 0;
  overflow: hidden;
`;

const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  }
`;

const FeatureImage = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, ${props => props.isDark ? '0.4' : '0.15'});
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

// Section styling
const SectionContainer = styled.section`
  margin: 80px 0;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.text};
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.3s ease;
  
  svg {
    color: ${props => props.theme.secondary};
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, ${props => props.theme.border}, transparent);
    margin-left: 15px;
    transition: background 0.3s ease;
  }
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.theme.textLight};
  transition: color 0.3s ease;
  
  p {
    margin-bottom: 20px;
  }
  
  strong {
    color: ${props => props.theme.text};
    font-weight: 600;
    transition: color 0.3s ease;
  }
`;

// Gallery grid
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: masonry;
  grid-auto-flow: dense;
  gap: 20px;
  margin: 40px 0;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
  transition: all 0.3s ease;
  height: ${props => props.tall ? '500px' : '300px'};
  grid-column: ${props => props.wide ? 'span 2' : 'span 1'};
  grid-row: ${props => props.tall ? 'span 2' : 'span 1'};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, ${props => props.isDark ? '0.4' : '0.15'});
    
    img {
      transform: scale(1.1);
      filter: brightness(1.1);
    }
    
    .overlay {
      opacity: 1;
    }
    
    .content {
      transform: translateY(0);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    color: white;
    transform: translateY(20px);
    transition: transform 0.3s ease;
    
    h3 {
      font-size: 18px;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    p {
      font-size: 14px;
      opacity: 0.9;
      margin: 0;
    }
  }
  
  @media (max-width: 768px) {
    grid-column: span 1 !important;
    height: 300px !important;
  }
`;

// Feature cards grid
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin: 40px 0;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.card};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, ${props => props.isDark ? '0.2' : '0.05'});
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.border};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
    border-color: rgba(26, 188, 156, 0.3);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    ${props => props.color || props.theme.primary}20, 
    ${props => props.color || props.theme.secondary}10);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    color: ${props => props.color || props.theme.secondary};
    stroke-width: 1.5px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  color: ${props => props.theme.text};
  font-weight: 600;
  transition: color 0.3s ease;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.theme.textLight};
  margin: 0;
  transition: color 0.3s ease;
`;

// EXIF data display component
const EXIFDisplay = styled.div`
  background: ${props => props.theme.card};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, ${props => props.isDark ? '0.2' : '0.07'});
  margin: 40px 0;
  border: 1px solid ${props => props.theme.border};
  overflow: hidden;
`;

const EXIFHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const EXIFTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${props => props.theme.secondary};
  }
`;

const EXIFContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const EXIFItem = styled.div`
  padding: 12px;
  background: ${props => props.theme.background};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .label {
    font-size: 12px;
    color: ${props => props.theme.textLight};
    margin-bottom: 4px;
  }
  
  .value {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.text};
  }
`;

// Comparison slider component
const ComparisonSlider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 40px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, ${props => props.isDark ? '0.4' : '0.15'});
  
  .before, .after {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  .before {
    left: 0;
    background-image: url(${shutterpic5});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  
  .after {
    left: 0;
    background-image: url(${shutterpic6});
    background-size: cover;
    background-position: center;
    width: 50%;
    z-index: 2;
    border-right: 3px solid white;
  }
  
  .slider-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 40px;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ew-resize;
    
    &::after {
      content: '';
      height: 40px;
      width: 40px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
  .label {
    position: absolute;
    bottom: 20px;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 14px;
    border-radius: 6px;
    z-index: 3;
  }
  
  .before-label {
    right: 20px;
  }
  
  .after-label {
    left: 20px;
  }
`;

// Technologies list
const TechList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin: 30px 0;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${props => props.theme.text};
  transition: color 0.3s ease;
  
  &:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.accent1});
    margin-right: 10px;
  }
`;

// Call to action section
const CTASection = styled.div`
  margin: 80px 0 40px;
  padding: 80px 40px;
  position: relative;
  text-align: center;
  overflow: hidden;
  border-radius: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${shutterpic3});
    background-size: cover;
    background-position: center;
    opacity: 0.9;
    filter: saturate(1.2);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(26,188,156,0.6) 100%);
    z-index: 1;
  }
`;

const CTATitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  color: ${props => props.theme.light};
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
`;

const CTAText = styled.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto 30px;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 2;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.accent1});
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(26, 188, 156, 0.3);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 188, 156, 0.4);
    color: white;
  }
  
  svg {
    stroke-width: 2px;
  }
`;

// Footer styling
const Footer = styled.footer`
  margin-top: 80px;
  padding: 40px 0 20px;
  text-align: center;
  color: ${props => props.theme.textLight};
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.accent1});
    border-radius: 3px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.textLight};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.secondary};
    transform: translateY(-3px);
  }
`;

// Main component function
function ShutterSpace() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('portfolioDarkMode', (!isDarkMode).toString());
  };

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioDarkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  // Get current theme based on dark mode state
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Gallery items
  const galleryItems = [
    {
      id: 1,
      image: shutterpic1,
      title: "Responsive Gallery Layouts",
      description: "Adaptive grid, masonry, and carousel layouts with smooth transitions",
      wide: false,
      tall: false
    },
    {
      id: 2,
      image: shutterpic2,
      title: "Advanced Lightbox",
      description: "High-resolution zoom and pan capabilities for detailed image exploration",
      wide: true,
      tall: false
    },
    {
      id: 3,
      image: shutterpic3,
      title: "Client Access Portal",
      description: "Secure galleries with password protection and custom access levels",
      wide: false,
      tall: true
    },
    {
      id: 4,
      image: shutterpic4,
      title: "EXIF Data Visualization",
      description: "Elegant display of camera settings with interactive elements",
      wide: false,
      tall: false
    },
    {
      id: 5,
      image: shutterpic5,
      title: "Location Mapping",
      description: "Interactive maps showing photo locations with filtering options",
      wide: true,
      tall: false
    }
  ];

 return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header />
      <PageContainer>
        <SubHeader>
          <NavMenu>
            <NavLink href="#overview"><IconCode size={16} /> Overview</NavLink>
            <NavLink href="#features"><IconPhoto size={16} /> Features</NavLink>
            <NavLink href="#tech"><IconGlobe size={16} /> Technology</NavLink>
            <ThemeToggle onClick={toggleTheme} isDark={isDarkMode}>
              {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
            </ThemeToggle>
          </NavMenu>
        </SubHeader>

        <HeroSection>
          <HeroImage />
          <HeroOverlay />
          <HeroContent>
            <TitleIcon><IconCamera size={32} /></TitleIcon>
            <PageTitle>SHUTTER SPACE</PageTitle>
            <PageSubtitle>Capturing Moments, Crafted for Professionals: A Visual Storytelling Experience</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentContainer>
          <IntroText>
            Imagine a photography platform that doesn't just display images, but reveals the story behind every frame—elevating each photograph from a static capture to an immersive journey. This is the essence behind Shutter Space.
          </IntroText>

          <SectionContainer id="overview">
            <SectionTitle>
              <IconCamera size={24} /> Project Overview
            </SectionTitle>
            <SectionContent>
              <p>At its core, Shutter Space transcends the conventional portfolio website. It's a dedicated environment where professional photographers can showcase their work with the depth and context it deserves. By integrating advanced display technologies with intuitive navigation, Shutter Space creates a space where every image can be appreciated in its full visual and technical glory.</p>
              <p>The gallery experience goes far beyond basic image display. Using sophisticated frontend technologies, photographs come alive through responsive gallery layouts that adapt to any viewing device. The advanced lightbox feature doesn't simply enlarge images—it provides true high-resolution exploration with smooth zoom and pan capabilities that reveal the finest details of each composition.</p>
            </SectionContent>
          </SectionContainer>

          <GalleryGrid>
            {galleryItems.map(item => (
              <GalleryItem key={item.id} wide={item.wide} tall={item.tall} isDark={isDarkMode}>
                <img src={item.image} alt={item.title} />
                <div className="overlay"></div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </GalleryItem>
            ))}
          </GalleryGrid>

          <FeatureSection id="features">
            <FeatureWrapper>
              <FeatureContent>
                <SectionTitle>
                  <IconZoomIn size={24} /> Advanced Image Exploration
                </SectionTitle>
                <SectionContent>
                  <p>Photographers can demonstrate their editing prowess through the interactive before/after comparison slider, allowing viewers to appreciate the transformation from raw capture to final masterpiece with a simple gesture.</p>
                  <p>Users aren't just viewers—they're explorers. Shutter Space offers them the ability to delve into the technical aspects of each photograph through elegant EXIF data displays, revealing the precise camera settings behind each shot. For travel and landscape photographers, the location-based mapping feature places each image in its geographical context, creating a visual journey across continents and countries.</p>
                </SectionContent>
              </FeatureContent>
              <FeatureImage isDark={isDarkMode}>
                <img src={shutterpic2} alt="Advanced lightbox with zoom capabilities" />
              </FeatureImage>
            </FeatureWrapper>
          </FeatureSection>

          <SectionContainer>
            <SectionTitle>
              <IconSliders size={24} /> Before/After Comparison
            </SectionTitle>
            <SectionContent>
              <p>See the transformation from raw capture to final image with our interactive comparison slider.</p>
            </SectionContent>
            <DeveloperSkillsSlider
              frontendImage={after}
              backendImage={before}
            />
          </SectionContainer>

          <EXIFDisplay isDark={isDarkMode}>
            <EXIFHeader>
              <EXIFTitle>
                <IconSettings size={20} /> EXIF Data Visualization
              </EXIFTitle>
            </EXIFHeader>
            <EXIFContent>
              <EXIFItem>
                <div className="label">Camera</div>
                <div className="value">Canon EOS R5</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">Lens</div>
                <div className="value">RF 24-70mm f/2.8L</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">Focal Length</div>
                <div className="value">35mm</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">Shutter Speed</div>
                <div className="value">1/250 sec</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">Aperture</div>
                <div className="value">f/4.0</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">ISO</div>
                <div className="value">200</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">Date & Time</div>
                <div className="value">22 Apr 2023, 14:35</div>
              </EXIFItem>
              <EXIFItem>
                <div className="label">Location</div>
                <div className="value">48.8584° N, 2.2945° E</div>
              </EXIFItem>
            </EXIFContent>
          </EXIFDisplay>

          <FeatureSection>
            <FeatureWrapper reverse>
              <FeatureImage isDark={isDarkMode}>
                <img src={shutterpic4} alt="Map view of photo locations" />
              </FeatureImage>
              <FeatureContent>
                <SectionTitle>
                  <IconMap size={24} /> Location-Based Photography
                </SectionTitle>
                <SectionContent>
                  <p>For travel and landscape photographers, showcasing the geographical context of their work is crucial. Shutter Space integrates sophisticated mapping capabilities, allowing photographs to be organized and presented based on their location data.</p>
                  <p>Viewers can explore a photographer's work through an interactive map interface, discovering images from specific regions or following the path of a photographic journey. Each location marker reveals a preview of available images, creating a compelling visual narrative of place and perspective.</p>
                </SectionContent>
              </FeatureContent>
            </FeatureWrapper>
          </FeatureSection>

          <SectionContainer>
            <SectionTitle>
              <IconLock size={24} /> Client Access & Security
            </SectionTitle>
            <SectionContent>
              <p>For professional photographers working with clients, the secure access portal provides private, password-protected galleries where work can be shared confidentially. Advanced protection features including customizable watermarking and download restrictions safeguard intellectual property while still allowing meaningful preview and review.</p>
            </SectionContent>
          </SectionContainer>

          <FeaturesGrid>
            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.secondary}>
                <IconLayout size={24} />
              </FeatureIcon>
              <FeatureTitle>Responsive Gallery Layouts</FeatureTitle>
              <FeatureDescription>
                Grid, masonry, and carousel views that adapt perfectly to any device with smooth transitions between layouts.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.accent1}>
                <IconZoomIn size={24} />
              </FeatureIcon>
              <FeatureTitle>Advanced Lightbox</FeatureTitle>
              <FeatureDescription>
                High-resolution zoom and pan capabilities for exploring fine details in photographs with intuitive controls.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.accent2}>
                <IconSliders size={24} />
              </FeatureIcon>
              <FeatureTitle>Before/After Comparison</FeatureTitle>
              <FeatureDescription>
                Interactive slider to showcase editing work, allowing viewers to compare original and edited versions.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>

          <FeatureSection>
            <FeatureWrapper>
              <FeatureContent>
                <SectionTitle>
                  <IconServer size={24} /> Backend Infrastructure
                </SectionTitle>
                <SectionContent>
                  <p>Behind the scenes, an intelligent image optimization system automatically generates multiple responsive versions of each photograph, ensuring optimal loading times without sacrificing quality across all devices.</p>
                  <p>The backend infrastructure includes a sophisticated metadata storage system that preserves and organizes all EXIF data, making it searchable and displayable. A comprehensive categorization system allows photographers to organize their work by location, technique, subject matter, or custom taxonomies.</p>
                </SectionContent>
              </FeatureContent>
              <FeatureImage isDark={isDarkMode}>
                <img src={profile} alt="Backend infrastructure visualization" />
              </FeatureImage>
            </FeatureWrapper>
          </FeatureSection>

          <SectionContainer id="tech">
            <SectionTitle>
              <IconCode size={24} /> Technologies & Skills
            </SectionTitle>
            <SectionContent>
              <p>This project demonstrates expertise in several key technical areas:</p>
            </SectionContent>
            <TechList>
              <TechItem>Advanced image handling with lazy loading and progressive enhancement</TechItem>
              <TechItem>Interactive galleries with customizable display options</TechItem>
              <TechItem>Responsive design with device-specific optimizations</TechItem>
              <TechItem>Map integration with location-based filtering</TechItem>
              <TechItem>Metadata extraction and visualization from EXIF data</TechItem>
              <TechItem>Image processing including watermarking and optimization</TechItem>
              <TechItem>Secure client access system with granular permissions</TechItem>
              <TechItem>Custom download protection implementation</TechItem>
              <TechItem>Automated multi-resolution image generation</TechItem>
              <TechItem>Location and shoot categorization system</TechItem>
            </TechList>
          </SectionContainer>

          <CTASection>
            <CTATitle>Ready to Elevate Your Photography with Shutter Space?</CTATitle>
            <CTAText>
              Discover how Shutter Space can transform your photography presentation with advanced features and intuitive interfaces designed specifically for visual storytelling.
            </CTAText>
            <CTAButton
              href="https:/www.shutterspace.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo <IconChevronDown size={18} />
            </CTAButton>
          </CTASection>

          <SectionContainer>
            <SectionTitle>
              <IconCamera size={24} /> More Than a Portfolio
            </SectionTitle>
            <SectionContent>
              <p>This project represents my approach to development—seeing code as the foundation for creative expression. Every feature in Shutter Space is designed to showcase the photographer's vision and craft, transforming technical capabilities into an elegant, engaging presentation that honors the art of photography.</p>
              <p>While the current implementation of Shutter Space offers a comprehensive solution for professional photographers, the potential for enhancement continues. Future developments could explore AI-powered image tagging, integrated print fulfillment services, and even more sophisticated presentation options for specialized photography genres.</p>
            </SectionContent>
          </SectionContainer>
        </ContentContainer>

        <Footer>
          <FooterText>
            © 2025 Shutter Space - Elevating visual storytelling through innovative technology
          </FooterText>
          <SocialLinks>
            {/* Social icons would go here */}
          </SocialLinks>
        </Footer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default ShutterSpace;
