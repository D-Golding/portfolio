import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from "../../components/header/header.jsx";

// Import images (assuming these are in the assets folder)
import hero from '../../assets/tone1.jpeg';
import tone2 from '../../assets/tone2.jpeg';
import tone3 from '../../assets/tone3.jpeg';
import tone4 from '../../assets/tone4.jpeg';
import tone5 from '../../assets/tone5.jpeg';
import tone6 from '../../assets/tone6.jpeg';
import tone7 from '../../assets/tone7.jpeg';
import bodysil from '../../assets/bodysil.jpg';

import workoutVideo from '../../assets/tone8.jpeg'; // Assuming this is a video, named as image for now

// Custom icons
const IconDumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 12V5m0 14v-7m12-7v7m0 0v7M1 5h8M1 19h8m6-14h8m-8 14h8m-8-7H9"></path>
  </svg>
);

const IconGraph = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const IconTrophy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const IconBody = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 3a2.5 2.5 0 0 0 2.45 2.5"></path>
    <path d="M2.5 7.5a2.5 2.5 0 0 0 2.45 2.5"></path>
    <path d="M11 3a2.5 2.5 0 0 1-2.46 2.5M11 19.9V13c0-2.21 0-3.47.7-4.28a2.94 2.94 0 0 1 1.1-.99C13.53 7.33 14 7.37 14 7.37h0c1.17.09 2.38.26 3.53.5"></path>
    <path d="M21.5 5.5c-1.5 0-2.5 1.5-2.5 1.5"></path>
    <path d="M18.5 9.5c1.5 0 3-1 3-3"></path>
    <path d="M18.5 13c2 .5 3.5-2 3.5-2"></path>
    <path d="M17 16.5c1.5 0 4 0 4-2"></path>
    <path d="M17 20c3 0 5-2 5-2"></path>
    <path d="M11 13h.5"></path>
    <path d="M2 13h6"></path>
    <path d="M5 13v6"></path>
    <path d="M11 19c-1.5.5-2 .5-3 0"></path>
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
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

const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconFolder = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
  </svg>
);

const IconActivity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconLayout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

// Theme definition
const themes = {
  light: {
    primary: '#FF6B6B',     // Coral red
    secondary: '#4ECDC4',   // Teal
    accent1: '#F4A261',     // Sandy brown
    accent2: '#1A535C',     // Dark teal
    light: '#FFFFFF',
    background: '#F8F9FC',
    text: '#2A2C3E',
    textLight: '#6C6F82',
    card: '#FFFFFF',
    border: '#E2E5EF'
  },
  dark: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent1: '#F4A261',
    accent2: '#1A535C',
    light: '#FFFFFF',
    background: '#121318',
    text: '#E2E5EF',
    textLight: '#A0A4B8',
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
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,107,107,0.5) 100%);
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
  text-shadow: 0 5px 30px rgba(255, 107, 107, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
    border-radius: 2px;
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
    border-color: rgba(255, 107, 107, 0.3);
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

// Interactive Progress Demo
const ProgressDemo = styled.div`
  background: ${props => props.theme.card};
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, ${props => props.isDark ? '0.2' : '0.07'});
  margin: 40px auto; /* Changed from '40px 0' to '40px auto' to center horizontally */
  border: 1px solid ${props => props.theme.border};
  position: relative;
  overflow: hidden;
  width: 60%;
`;

const ProgressHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const ProgressTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: 10px;
`;

const ProgressDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textLight};
  max-width: 600px;
  margin: 0 auto;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 250px;
  padding: 20px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${props => props.theme.border};
  }
`;

const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 40px;
  position: relative;
  
  .percentage {
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text};
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .bar-container {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }
  
  .label {
    font-size: 12px;
    color: ${props => props.theme.textLight};
    margin-top: 8px;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: ${props => props.percentage}%;
  background: ${props => props.color || props.theme.primary};
  border-radius: 6px 6px 0 0;
  transition: height 1s cubic-bezier(0.65, 0, 0.35, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:hover {
    transform: scaleY(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Achievement Badges
const BadgesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
`;

const Badge = styled.div`
  width: 120px;
  text-align: center;
  transition: all 0.3s ease;
  
  .badge-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${props => props.color || props.theme.primary}, ${props => props.gradientColor || props.theme.secondary});
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border-radius: 50%;
      background: linear-gradient(135deg, ${props => props.color || props.theme.primary}, transparent 70%);
      opacity: 0.5;
      z-index: -1;
      transition: all 0.3s ease;
    }
    
    svg {
      stroke-width: 1.5px;
      color: white;
      width: 40px;
      height: 40px;
      transition: all 0.3s ease;
    }
  }
  
  .badge-name {
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin-bottom: 4px;
    transition: color 0.3s ease;
  }
  
  .badge-desc {
    font-size: 12px;
    color: ${props => props.theme.textLight};
    transition: color 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    
    .badge-icon {
      width: 88px;
      height: 88px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      
      &::after {
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        opacity: 0.7;
      }
      
      svg {
        width: 44px;
        height: 44px;
      }
    }
    
    .badge-name {
      color: ${props => props.color || props.theme.primary};
    }
  }
`;

// Body visualization
const BodyMetricsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const BodyImage = styled.div`
  width: 240px; /* Make it square */
  height: 240px;
  background: linear-gradient(135deg, ${props => props.theme.primary}20, ${props => props.theme.secondary}20);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px; /* Add rounded corners to the image */
    transition: transform 0.3s ease; /* Add transition for smooth effect */
  }
  
  &:hover img {
    transform: scale(1.05); /* Apply zoom effect on hover, same as other images */
  }
`;
const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  max-width: 300px;
`;

const MetricItem = styled.div`
  background: ${props => props.theme.card};
  border-radius: 10px;
  padding: 12px;
  border: 1px solid ${props => props.theme.border};
  
  .metric-label {
    font-size: 12px;
    color: ${props => props.theme.textLight};
    margin-bottom: 4px;
  }
  
  .metric-value {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.text};
    display: flex;
    align-items: baseline;
    
    .unit {
      font-size: 12px;
      margin-left: 2px;
      color: ${props => props.theme.textLight};
    }
    
    .trend {
      font-size: 12px;
      margin-left: 8px;
      color: ${props => props.positive ? '#4ADE80' : '#F87171'};
    }
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
    background: linear-gradient(to right, ${props => props.theme.secondary}, ${props => props.theme.primary});
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
    background-image: url(${tone7});
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
    background: linear-gradient(0deg, rgba(42, 44, 62, 0.85) 0%, rgba(255, 107, 107, 0.75) 100%);
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
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
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
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
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

// Main component
function TonePro() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('toneDarkMode', (!isDarkMode).toString());
  };

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('toneDarkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
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
            <NavLink href="#overview"><IconDumbbell size={16} /> Overview</NavLink>
            <NavLink href="#features"><IconCode size={16} /> Features</NavLink>
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
            <TitleIcon><IconDumbbell size={32} /></TitleIcon>
            <PageTitle>TONE PRO</PageTitle>
            <PageSubtitle>Transforming Exercise into Experience: A Personalized Journey to Fitness</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentContainer>
          <IntroText>
            Imagine a fitness companion that doesn't just count your reps, but understands your journey—transforming every workout, every achievement into a dynamic, personalized path toward your goals. This is the core vision behind Tone Pro.
          </IntroText>

          <SectionContainer id="overview">
            <SectionTitle>
              <IconDumbbell size={24} /> The Concept
            </SectionTitle>
            <SectionContent>
              <p>At its heart, Tone Pro is more than just another fitness application. It's an exploration of how technology can transform our relationship with physical wellness. By leveraging advanced animation techniques and sophisticated tracking algorithms, the application creates intuitive, engaging experiences that respond to every aspect of a user's fitness journey.</p>
              <p>The exercise platform goes far beyond simple workout logging. Using advanced animation sequences and interactive visualizations, it generates comprehensive fitness experiences that dynamically adapt to user progress. Imagine exercises that demonstrate perfect form through fluid animations, workout plans that adjust to your performance, and achievement systems that celebrate your milestones in meaningful ways.</p>
            </SectionContent>
          </SectionContainer>

          <FeatureSection>
            <FeatureWrapper>
              <FeatureContent>
                <SectionTitle>
                  <IconTrophy size={24} /> Technical Innovation
                </SectionTitle>
                <SectionContent>
                  <p>Users aren't just passive followers—they're active architects of their fitness. The application offers granular customization, allowing individuals to create their own unique workout routines. Want a high-intensity interval session or a focused strength-building program? The intuitive drag-and-drop workout builder makes this possible with just a few interactions.</p>
                  <p>Developing Tone Pro required solving multiple complex technical challenges. The progress tracking system involves sophisticated statistical analysis, ensuring accurate and motivating feedback on user performance. A comprehensive exercise database with detailed categorization powers the platform, while intelligent algorithms adapt workout suggestions based on user history and goals.</p>
                </SectionContent>
              </FeatureContent>
              <FeatureImage isDark={isDarkMode}>
                <img src={tone2} alt="Woman performing plank exercise in gym" />
              </FeatureImage>
            </FeatureWrapper>
          </FeatureSection>

          <FeaturesGrid>
            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.primary}>
                <IconDumbbell size={24} />
              </FeatureIcon>
              <FeatureTitle>Exercise Library</FeatureTitle>
              <FeatureDescription>
                Comprehensive collection of exercises with instructional animations demonstrating proper form and technique.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.secondary}>
                <IconLayout size={24} />
              </FeatureIcon>
              <FeatureTitle>Drag-and-Drop Builder</FeatureTitle>
              <FeatureDescription>
                Intuitive workout planner with drag-and-drop functionality for creating customized exercise routines.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.accent1}>
                <IconGraph size={24} />
              </FeatureIcon>
              <FeatureTitle>Progress Tracking</FeatureTitle>
              <FeatureDescription>
                Interactive charts and visualizations that illustrate your fitness journey and celebrate achievements.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>

          <SectionContainer id="features">
            <SectionTitle>
              <IconGraph size={24} /> Progress Visualization
            </SectionTitle>
            <SectionContent>
              <p>One of Tone Pro's standout features is its innovative approach to progress tracking. Rather than presenting users with lifeless numbers and tables, the application transforms workout data into engaging visual narratives that tell the story of your fitness journey.</p>
            </SectionContent>

            <ProgressDemo isDark={isDarkMode}>
              <ProgressHeader>
                <ProgressTitle>Your Fitness Progress</ProgressTitle>
                <ProgressDescription>Interactive charts adapt to your personal stats, showing improvements over time while identifying areas with growth potential.</ProgressDescription>
              </ProgressHeader>

              <ChartContainer>
                <BarGroup>
                  <span className="percentage">65%</span>
                  <div className="bar-container">
                    <Bar percentage={65} color={currentTheme.primary} />
                  </div>
                  <div className="label">Strength</div>
                </BarGroup>
                <BarGroup>
                  <span className="percentage">85%</span>
                  <div className="bar-container">
                    <Bar percentage={85} color={currentTheme.secondary} />
                  </div>
                  <div className="label">Cardio</div>
                </BarGroup>
                <BarGroup>
                  <span className="percentage">72%</span>
                  <div className="bar-container">
                    <Bar percentage={72} color={currentTheme.accent1} />
                  </div>
                  <div className="label">Flexibility</div>
                </BarGroup>
                <BarGroup>
                  <span className="percentage">78%</span>
                  <div className="bar-container">
                    <Bar percentage={78} color={currentTheme.accent2} />
                  </div>
                  <div className="label">Balance</div>
                </BarGroup>
                <BarGroup>
                  <span className="percentage">92%</span>
                  <div className="bar-container">
                    <Bar percentage={92} color={currentTheme.primary} />
                  </div>
                  <div className="label">Endurance</div>
                </BarGroup>
              </ChartContainer>
            </ProgressDemo>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>
              <IconTrophy size={24} /> Achievement System
            </SectionTitle>
            <SectionContent>
              <p>Understanding that motivation is key to fitness success, Tone Pro incorporates a comprehensive gamification system. Users earn badges and unlock milestones that celebrate both major achievements and consistent habit-building.</p>
            </SectionContent>

            <BadgesSection>
              <Badge color={currentTheme.primary} gradientColor={currentTheme.secondary}>
                <div className="badge-icon">
                  <IconTrophy size={24} />
                </div>
                <div className="badge-name">First Mile</div>
                <div className="badge-desc">Complete your first workout</div>
              </Badge>

              <Badge color={currentTheme.secondary} gradientColor={currentTheme.accent1}>
                <div className="badge-icon">
                  <IconActivity size={24} />
                </div>
                <div className="badge-name">Consistency</div>
                <div className="badge-desc">7-day streak</div>
              </Badge>

              <Badge color={currentTheme.accent1} gradientColor={currentTheme.accent2}>
                <div className="badge-icon">
                  <IconShield size={24} />
                </div>
                <div className="badge-name">Strength Master</div>
                <div className="badge-desc">Reach strength goal</div>
              </Badge>

              <Badge color={currentTheme.accent2} gradientColor={currentTheme.primary}>
                <div className="badge-icon">
                  <IconDumbbell size={24} />
                </div>
                <div className="badge-name">100 Workouts</div>
                <div className="badge-desc">Century milestone</div>
              </Badge>
            </BadgesSection>
          </SectionContainer>

          <FeatureSection>
            <FeatureWrapper reverse>
              <FeatureImage isDark={isDarkMode}>
                <img src={tone3} alt="Woman lifting weights in gym" />
              </FeatureImage>
              <FeatureContent>
                <SectionTitle>
                  <IconBody size={24} /> Body Metric Visualization
                </SectionTitle>
                <SectionContent>
                  <p>Tone Pro takes a holistic approach to fitness tracking by providing intuitive visualizations of body metrics. Rather than focusing solely on weight, the application helps users understand their body composition, proportions, and overall physical health.</p>
                  <p>The body metric visualization tool presents data in a visually appealing and accessible format, helping users understand how their fitness journey is transforming their body beyond simple numbers on a scale.</p>
                </SectionContent>
              </FeatureContent>
            </FeatureWrapper>
          </FeatureSection>

          <BodyMetricsContainer>
            <BodyImage>
              <img src={bodysil} alt="Body silhouette" />
            </BodyImage>

            <MetricsGrid>
              <MetricItem>
                <div className="metric-label">Weight</div>
                <div className="metric-value">
                  68.5<span className="unit">kg</span>
                  <span className="trend">-2.3</span>
                </div>
              </MetricItem>

              <MetricItem>
                <div className="metric-label">Body Fat %</div>
                <div className="metric-value">
                  18.2<span className="unit">%</span>
                  <span className="trend">-1.5</span>
                </div>
              </MetricItem>

              <MetricItem>
                <div className="metric-label">Muscle Mass</div>
                <div className="metric-value">
                  32.1<span className="unit">kg</span>
                  <span className="trend positive">+0.8</span>
                </div>
              </MetricItem>

              <MetricItem>
                <div className="metric-label">BMI</div>
                <div className="metric-value">
                  22.4<span className="unit"></span>
                  <span className="trend">-0.6</span>
                </div>
              </MetricItem>
            </MetricsGrid>
          </BodyMetricsContainer>

          <SectionContainer id="tech">
            <SectionTitle>
              <IconFolder size={24} /> Backend Infrastructure
            </SectionTitle>
            <SectionContent>
              <p>Behind the sleek user interface lies a powerful backend system that makes Tone Pro's intelligent features possible. User profiles store detailed fitness data securely, while the exercise database categorizes movements by muscle group, equipment required, and difficulty level.</p>
              <p>Advanced algorithms track progress and calculate achievements, while social sharing functionality enables users to safely share accomplishments with friends and workout partners.</p>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>
              <IconCode size={24} /> Skills Highlighted
            </SectionTitle>
            <TechList>
              <TechItem>Animation sequences for exercise demonstrations</TechItem>
              <TechItem>Interactive progress visualization using modern charting libraries</TechItem>
              <TechItem>Gamification elements including badges and milestone tracking</TechItem>
              <TechItem>Drag-and-drop interfaces for workout planning</TechItem>
              <TechItem>User profile management with secure authentication</TechItem>
              <TechItem>Comprehensive exercise database design</TechItem>
              <TechItem>Progress calculation algorithms and statistical analysis</TechItem>
              <TechItem>Body metric visualization techniques</TechItem>
              <TechItem>Responsive design for multi-device compatibility</TechItem>
              <TechItem>Social sharing functionality with privacy controls</TechItem>
            </TechList>
          </SectionContainer>

          <CTASection>
            <CTATitle>Ready to Transform Your Fitness Journey?</CTATitle>
            <CTAText>
              Experience a new approach to exercise with intelligent tracking, motivating visualizations, and personalized guidance that evolves with you.
            </CTAText>
            <CTAButton
              href="https://www.tonepro.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Journey <IconChevronDown size={18} />
            </CTAButton>
          </CTASection>

          <SectionContainer>
            <SectionTitle>
              <IconDumbbell size={24} /> More Than a Workout App
            </SectionTitle>
            <SectionContent>
              <p>This project represents my approach to fitness technology—seeing code not just as a functional tool, but as a medium for health transformation. Each feature is an opportunity to create something that connects with users on a motivational level, turning abstract fitness concepts into an intuitive, engaging experience.</p>
              <p>While the current version delivers a powerful fitness companion, the potential for expansion is immense. Future iterations could explore more advanced exercise recognition algorithms, expanded workout templates, and even more sophisticated ways of visualizing and celebrating fitness achievements.</p>
            </SectionContent>
          </SectionContainer>

          <Footer>
            <FooterText>
              © 2025 Tone Pro - Transforming fitness through intelligent technology
            </FooterText>
            <SocialLinks>
              {/* Social icons would go here */}
            </SocialLinks>
          </Footer>
        </ContentContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default TonePro;