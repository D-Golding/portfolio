import React, { useState, useEffect } from 'react';
import MusicVisualizerCarousel from "../../components/visualisers/swiperComponent.jsx";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from "../../components/header/header.jsx";

// Import images with correct filenames
import pic1 from '../../assets/pic3.jpeg'; // Tech innovation
import pic2 from '../../assets/pic2.jpeg'; // Multilingual
import pic3 from '../../assets/pic5.jpeg'; // Ready to experience
import pic4 from '../../assets/pic4.jpeg'; // header
import myVideo from '../../assets/vid2.mov';

// Define custom icon components
const IconMusic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

const IconPalette = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5"></circle>
    <circle cx="17.5" cy="10.5" r=".5"></circle>
    <circle cx="8.5" cy="7.5" r=".5"></circle>
    <circle cx="6.5" cy="12.5" r=".5"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
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

const IconMaximize = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
  </svg>
);

const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconHeadphones = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
);

const IconZap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const IconLayers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const IconMousePointer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    <path d="M13 13l6 6"></path>
  </svg>
);

const IconBarChart2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

// Create theme objects for light and dark mode
const themes = {
  light: {
    primary: '#332FD0',
    secondary: '#9254C8',
    accent1: '#E15FED',
    accent2: '#6EDCD9',
    light: '#FFFFFF',
    background: '#F8F9FC',
    text: '#2A2C3E',
    textLight: '#6C6F82',
    card: '#FFFFFF',
    border: '#E2E5EF'
  },
  dark: {
    primary: '#332FD0',
    secondary: '#9254C8',
    accent1: '#E15FED',
    accent2: '#6EDCD9',
    light: '#FFFFFF',
    background: '#121318',
    text: '#E2E5EF',
    textLight: '#A0A4B8',
    card: '#1E1F26',
    border: '#2D2F3B'
  }
};

// Global styles including animations
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
  background-image: url(${pic4});
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
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
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(51,47,208,0.4) 100%);
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

// Removed BackgroundGraphic and CircleAccent components

// Header and title styles
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
    color: ${props => props.theme.primary};
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

const PageTitleWrapper = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(to right, 
    ${props => props.theme.primary}, 
    ${props => props.theme.secondary}, 
    ${props => props.theme.accent1}, 
    ${props => props.theme.accent2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 30px rgba(225, 95, 237, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.accent2});
    border-radius: 2px;
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

// Visualizer container with enhanced styling - removed background image
const VisualizerSection = styled.section`
  position: relative;
  padding: 50px 0;
  margin: 40px 0;
`;

const CustomVisualizerWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.12'});
  background: linear-gradient(145deg, #18181f, #0d0d0d);
  position: relative;
  z-index: 2;
  
  /* Create a subtle colored border effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      ${props => props.theme.primary}, 
      ${props => props.theme.secondary}, 
      ${props => props.theme.accent1}, 
      ${props => props.theme.accent2});
    z-index: -1;
    border-radius: 18px;
    filter: blur(10px);
    opacity: 0.7;
  }
  
  /* Ensure the wrapper doesn't add constraints in fullscreen mode */
  .visualizer-container:fullscreen & {
    max-width: 100%;
    width: 100%;
    border-radius: 0;
    margin: 0;
    height: 100vh;
    
    &::before {
      display: none;
    }
  }
`;

const VisualizerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  svg {
    stroke-width: 1.5px;
  }
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  
  .track-art {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin-right: 10px;
    background: linear-gradient(45deg, ${props => props.theme.secondary}, ${props => props.theme.accent1});
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .track-details {
    .track-name {
      font-weight: 500;
      font-size: 14px;
    }
    
    .track-artist {
      font-size: 12px;
      opacity: 0.7;
    }
  }
`;

// Feature Image Section - removed background gradient
const FeatureImageSection = styled.section`
  position: relative;
  padding: 80px 0;
  margin: 60px 0;
  overflow: hidden;
`;

const FeatureImageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
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
    transform: scale(1.02);
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

// Feature Video Section - removed background gradient
const FeatureVideoSection = styled.section`
  position: relative;
  padding: 80px 0;
  margin: 60px 0;
  overflow: hidden;
`;

const FeatureVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const FeatureVideo = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, ${props => props.isDark ? '0.4' : '0.15'});
  max-width: 500px;

  video {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
    border-radius: 16px;
  }

  &:hover video {
    transform: scale(1.02);
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const FeatureVideoContent = styled.div`
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
    border-color: rgba(146, 84, 200, 0.3);
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
    color: ${props => props.color || props.theme.primary};
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

// New carousel navigation styling
const CarouselNav = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  display: flex;
  gap: 10px;
`;

const CarouselButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(110, 220, 217, 0.6);
    transform: translateY(-2px);
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

// Call to action - keeping the overlay for contrast but simplifying
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
    background-image: url(${pic3});
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(42, 44, 62, 0.85) 0%, rgba(51, 47, 208, 0.75) 100%);
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
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(51, 47, 208, 0.3);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(51, 47, 208, 0.4);
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
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.accent2});
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
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

// Additional styles for fullscreen mode
const FullscreenPageStyles = createGlobalStyle`
  /* Hide page content when visualizer is in fullscreen mode */
  .visualizer-container:fullscreen ~ * {
    display: none;
  }
  
  /* Ensure visualizer takes full height and width */
  .visualizer-container:fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: #000;
    padding: 0;
    margin: 0;
    width: 100vw !important;
    height: 100vh !important;
    max-width: none;
  }
  
  /* Ensure canvas container fills available space */
  .visualizer-container:fullscreen .canvas-container {
    height: 100vh !important;
    border-radius: 0;
  }
`;

function Visualify() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeVisualizer, setActiveVisualizer] = useState(0);

    // Toggle dark mode function
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('visualifyDarkMode', (!isDarkMode).toString());
    };

    // Load saved theme preference on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('visualifyDarkMode');
        if (savedTheme !== null) {
            setIsDarkMode(savedTheme === 'true');
        }
    }, []);

    // Toggle fullscreen function
    const toggleFullscreen = () => {
        const visualizerElement = document.querySelector('.visualizer-container');

        if (!document.fullscreenElement) {
            if (visualizerElement) {
                visualizerElement.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable fullscreen: ${err.message}`);
                });
                setIsFullscreen(true);
            } else {
                // If the swiper component is active, find the swiper container
                const swiperContainer = document.querySelector('.swiper-container') ||
                                        document.querySelector('.swiper') ||
                                        document.querySelector('.swiper-wrapper');

                if (swiperContainer) {
                    swiperContainer.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable fullscreen: ${err.message}`);
                    });
                    setIsFullscreen(true);
                }
            }
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Fullscreen change event listener
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Get current theme based on dark mode state
    const currentTheme = isDarkMode ? themes.dark : themes.light;

    return (
       <ThemeProvider theme={currentTheme}>
    <GlobalStyle />
    <Header />
    <PageContainer>
        <SubHeader>
            <NavMenu>
                <NavLink href="#"><IconCode size={16} /> About</NavLink>
                <NavLink href="#"><IconMusic size={16} /> Features</NavLink>
                <NavLink href="#"><IconGlobe size={16} /> Languages</NavLink>
                <ThemeToggle onClick={toggleTheme} isDark={isDarkMode}>
                    {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
                </ThemeToggle>
            </NavMenu>
        </SubHeader>

        <HeroSection>
            <HeroImage />
            <HeroOverlay />
            <HeroContent>
                <TitleIcon><IconMusic size={32} /></TitleIcon>
                <PageTitle>VISUALIFY</PageTitle>
                <PageSubtitle>Breathing Life into Music: A Digital Canvas of Sound and Motion</PageSubtitle>
            </HeroContent>
        </HeroSection>

        <ContentContainer>
            {/* Removed BackgroundGraphic and CircleAccent */}

            <IntroText>
                Imagine music that doesn't just play, but comes alive visually—transforming every beat, every frequency
                into a dynamic, breathing landscape of colour and movement. This is the core vision behind my Interactive
                Spotify Music Visualiser.
            </IntroText>

            <VisualizerSection isDark={isDarkMode}>
                <CustomVisualizerWrapper isDark={isDarkMode}>
                    <VisualizerControls>
                        <TrackInfo>
                            <div className="track-art">
                                <IconHeadphones size={16} />
                            </div>
                            <div className="track-details">
                                <div className="track-name">VISUALIFY Demo</div>
                                <div className="track-artist">Multiple Visualizers</div>
                            </div>
                        </TrackInfo>
                        <div>
                            <ControlButton>
                                <IconSettings size={18} />
                            </ControlButton>
                            <ControlButton onClick={toggleFullscreen}>
                                <IconMaximize size={18} />
                            </ControlButton>
                        </div>
                    </VisualizerControls>
                    <MusicVisualizerCarousel />
                </CustomVisualizerWrapper>
            </VisualizerSection>

            <SectionContainer>
                <SectionTitle>
                    <IconPalette size={24} /> The Concept
                </SectionTitle>
                <SectionContent>
                    <p>At its heart, this web application is more than just a technical demonstration. It's an exploration of
                        how technology can transform our perception of music. By leveraging the <strong>Spotify Web Playback SDK</strong> and
                        advanced audio analysis techniques, the application creates real-time visual experiences that respond to
                        every nuance of a musical track.</p>
                    <p>With multiple visualization styles to choose from, users can experience music in completely different ways -
                        from traditional bar visualizers to particle systems and vinyl-inspired circular displays. Each visualization
                        offers a unique interpretation of the same audio data.</p>
                </SectionContent>
            </SectionContainer>

            <FeatureVideoSection>
                <FeatureVideoWrapper>
                    <FeatureVideo isDark={isDarkMode}>
                        <video
                            src={myVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </FeatureVideo>

                    <FeatureVideoContent>
                        <SectionTitle>
                            <IconZap size={24} /> Technical Innovation
                        </SectionTitle>
                        <SectionContent>
                            <p>The visualisation engine goes far beyond simple visual effects. Using canvas and SVG technologies, it
                                generates complex visual representations that dynamically respond to musical characteristics. Imagine
                                particles that dance to a track's rhythm, geometric shapes that morph with frequency changes, and colour
                                palettes that shift with the mood of the music.</p>
                            <p>Users aren't just passive observers—they're active participants. The application offers granular
                                customisation, allowing individuals to create their own unique visualisation styles. Want a minimalist
                                geometric representation or an explosive particle system? The choice is yours.</p>
                        </SectionContent>
                    </FeatureVideoContent>
                </FeatureVideoWrapper>
            </FeatureVideoSection>

            <FeaturesGrid>
                <FeatureCard isDark={isDarkMode}>
                    <FeatureIcon colour={themes.light.primary}>
                        <IconBarChart2 size={24} />
                    </FeatureIcon>
                    <FeatureTitle>Frequency Analysis</FeatureTitle>
                    <FeatureDescription>
                        Advanced audio processing that breaks down music into its component frequencies, creating detailed visual mappings.
                    </FeatureDescription>
                </FeatureCard>

                <FeatureCard isDark={isDarkMode}>
                    <FeatureIcon colour={themes.light.secondary}>
                        <IconLayers size={24} />
                    </FeatureIcon>
                    <FeatureTitle>Multiple Visualizers</FeatureTitle>
                    <FeatureDescription>
                        Choose from several distinct visualization styles, each with unique aesthetics and approaches to representing audio data.
                    </FeatureDescription>
                </FeatureCard>

                <FeatureCard isDark={isDarkMode}>
                    <FeatureIcon colour={themes.light.accent1}>
                        <IconMousePointer size={24} />
                    </FeatureIcon>
                    <FeatureTitle>User Interaction</FeatureTitle>
                    <FeatureDescription>
                        Interactive elements allow users to modify visualisations in real-time, creating a personalised experience.
                    </FeatureDescription>
                </FeatureCard>
            </FeaturesGrid>

            <SectionContainer>
                <SectionTitle>
                    <IconCode size={24} /> Behind the Scenes
                </SectionTitle>
                <SectionContent>
                    <p>Developing this application required solving multiple complex technical challenges. The Spotify API
                        integration involves a robust OAuth authentication system, ensuring secure and seamless access to
                        musical data. A sophisticated caching mechanism optimises performance, reducing unnecessary API calls
                        and providing a smooth user experience.</p>
                </SectionContent>
            </SectionContainer>

            <FeatureImageSection>
                <FeatureImageWrapper>
                    <FeatureContent>
                        <SectionTitle>
                            <IconGlobe size={24} /> Multilingual and Accessible Design
                        </SectionTitle>
                        <SectionContent>
                            <p>Understanding that technology should be inclusive, the application supports both English and German
                                interfaces. A carefully implemented internationalisation framework ensures that every user, regardless
                                of their primary language, can fully engage with the experience.</p>
                            <p>Accessibility extends to the visual experience as well. A thoughtfully designed dark mode goes beyond
                                simple colour inversion, creating an alternative visual environment that maintains the integrity of the
                                musical visualisations while providing comfort in various lighting conditions.</p>
                        </SectionContent>
                    </FeatureContent>
                    <FeatureImage isDark={isDarkMode}>
                        <img src={pic2} alt="Audio waveform visualisation in purple and blue" />
                    </FeatureImage>
                </FeatureImageWrapper>
            </FeatureImageSection>

            <SectionContainer>
                <SectionTitle>
                    <IconPalette size={24} /> More Than Code: A Creative Expression
                </SectionTitle>
                <SectionContent>
                    <p>This project represents my approach to web development—seeing code not just as a technical tool, but as a
                        medium for creative expression. Each line of code is an opportunity to create something that connects
                        with users on an emotional level, transforming abstract technical capabilities into an intuitive,
                        engaging experience.</p>
                    <p>The carousel interface adds another dimension to this expression, allowing users to seamlessly switch between
                        different interpretations of the same audio input. This makes the connection between sound and visual
                        even more apparent as users can compare how different algorithms translate the same musical moments.</p>
                </SectionContent>
            </SectionContainer>

            <SectionContainer>
                <SectionTitle>
                    <IconCode size={24} /> Technologies at Play
                </SectionTitle>
                <TechList>
                    <TechItem>Advanced canvas and SVG animations</TechItem>
                    <TechItem>React.js front-end architecture</TechItem>
                    <TechItem>Spotify Web Playback SDK</TechItem>
                    <TechItem>Web Audio API</TechItem>
                    <TechItem>Swiper.js carousel integration</TechItem>
                    <TechItem>Robust API integration</TechItem>
                    <TechItem>OAuth authentication</TechItem>
                    <TechItem>Internationalisation (i18n)</TechItem>
                    <TechItem>Responsive design principles</TechItem>
                    <TechItem>Multiple visualization algorithms</TechItem>
                </TechList>
            </SectionContainer>

            <CTASection>
                <CTATitle>Ready to Experience Music in a New Dimension?</CTATitle>
                <CTAText>
                    Launch the full application and transform your favourite tracks into stunning visual landscapes. Customise, explore, and share your unique music visualisations.
                </CTAText>
                <CTAButton
                    href="https://www.visualify.online"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Launch Visualify <IconChevronDown size={18} />
                </CTAButton>
            </CTASection>

            <Footer>
                <FooterText>
                    © 2025 Visualify - Bringing sound to life through digital art
                </FooterText>
                <SocialLinks>
                    {/* Social icons unchanged */}
                </SocialLinks>
            </Footer>
        </ContentContainer>
        <FullscreenPageStyles />
    </PageContainer>
</ThemeProvider>

    );
}

export default Visualify;