import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from "../../components/header/header.jsx";

// Import images
import food1 from '../../assets/food1.jpeg';
import food2 from '../../assets/food2.jpeg';
import food3 from '../../assets/food3.jpeg';
import food4 from '../../assets/food4.jpeg';
import food5 from '../../assets/food5.jpeg';
import food6 from '../../assets/food6.jpeg';

import foodvid1 from '../../assets/foodvid1.mov';
import foodvid2 from '../../assets/foodvid2.mov';

// Custom icons
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
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

// Theme definition
const themes = {
  light: {
    primary: '#E76F51',     // Terra cotta
    secondary: '#F4A261',   // Sandy brown
    accent1: '#E9C46A',     // Khaki
    accent2: '#2A9D8F',     // Persian green
    light: '#FFFFFF',
    background: '#F8F9FC',
    text: '#2A2C3E',
    textLight: '#6C6F82',
    card: '#FFFFFF',
    border: '#E2E5EF'
  },
  dark: {
    primary: '#E76F51',
    secondary: '#F4A261',
    accent1: '#E9C46A',
    accent2: '#2A9D8F',
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
  
  @keyframes flip {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(180deg); }
  }
  
  @keyframes flipBack {
    0% { transform: rotateY(180deg); }
    100% { transform: rotateY(0deg); }
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

const HeroVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(231,111,81,0.4) 100%);
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
  text-shadow: 0 5px 30px rgba(231, 111, 81, 0.2);
  
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

// Flip cards
const FlipCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin: 40px 0;
`;

const FlipCard = styled.div`
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
`;

const FlipCardFront = styled(FlipCardFace)`
  background-color: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.border};
  
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  
  .content {
    padding: 15px;
  }
  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-bottom: 5px;
    color: ${props => props.theme.text};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.textLight};
  }
`;

const FlipCardBack = styled(FlipCardFace)`
  background-color: ${props => props.theme.card};
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
    color: ${props => props.theme.text};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.textLight};
    margin-bottom: 15px;
  }
  
  ul {
    list-style-position: inside;
    color: ${props => props.theme.textLight};
    font-size: 14px;
    
    li {
      margin-bottom: 5px;
    }
  }
`;

// Feature grid
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
    border-color: rgba(231, 111, 81, 0.3);
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
    background-image: url(${food5});
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
    background: linear-gradient(0deg, rgba(42, 44, 62, 0.85) 0%, rgba(231, 111, 81, 0.75) 100%);
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
  box-shadow: 0 4px 12px rgba(231, 111, 81, 0.3);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 111, 81, 0.4);
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

// Video background for feature section
const VideoBackground = styled.div`
  position: relative;
  padding: 80px 0;
  margin: 60px 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
    opacity: 0.7;
    z-index: 0;
  }
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const VideoContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

// Main component
function FlavourFlip() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('flavourFlipDarkMode', (!isDarkMode).toString());
  };

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('flavourFlipDarkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  // Get current theme based on dark mode state
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Recipe card data
  const recipeCards = [
    {
      id: 1,
      title: "Recipe Cards",
      image: food1,
      description: "Interactive recipe cards with elegant flip animations that transition between ingredient lists and cooking instructions.",
      details: [
        "Visual ingredient indicators",
        "Step-by-step instructions",
        "Cooking time estimates",
        "Difficulty rating"
      ]
    },
    {
      id: 2,
      title: "Meal Planner",
      image: food2,
      description: "Drag-and-drop meal planning calendar to visually organize your weekly cooking schedule with automatic shopping list adjustments.",
      details: [
        "Weekly & monthly views",
        "Nutritional balance tracking",
        "Automatic grocery lists",
        "Leftover management"
      ]
    },
    {
      id: 3,
      title: "Food Photography",
      image: food3,
      description: "Sophisticated food photography showcasing with optimised image loading and presentation to highlight the visual appeal of completed dishes.",
      details: [
        "Progressive image loading",
        "High-resolution zoom",
        "Step-by-step visuals",
        "User gallery submissions"
      ]
    },
    {
      id: 4,
      title: "Cooking Timers",
      image: food4,
      description: "Interactive cooking timer components assist users during the cooking process, with multiple concurrent timers possible for complex recipes.",
      details: [
        "Multiple concurrent timers",
        "Preset common times",
        "Audio notifications",
        "Temperature conversions"
      ]
    },
    {
      id: 5,
      title: "Ingredient Adjuster",
      image: food5,
      description: "Innovative ingredient quantity adjuster provides real-time visual feedback as users scale recipes up or down for different serving sizes.",
      details: [
        "Measurement conversions",
        "Proportion preservation",
        "Substitution suggestions",
        "Smart rounding"
      ]
    },
    {
      id: 6,
      title: "Recipe Search",
      image: food6,
      description: "Advanced search capabilities with filters for cuisine, diet restrictions, cooking time, available ingredients, and seasonal relevance.",
      details: [
        "Typo-tolerant search",
        "Ingredient-based filtering",
        "Preference learning",
        "Seasonal recommendations"
      ]
    }
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header />
      <PageContainer>
        <SubHeader>
          <NavMenu>
            <NavLink href="#"><IconBook size={16} /> About</NavLink>
            <NavLink href="#"><IconCalendar size={16} /> Features</NavLink>
            <NavLink href="#"><IconGlobe size={16} /> Languages</NavLink>
            <ThemeToggle onClick={toggleTheme} isDark={isDarkMode}>
              {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
            </ThemeToggle>
          </NavMenu>
        </SubHeader>

        <HeroSection>
          <HeroVideo>
            <video
              src={foodvid1}
              autoPlay
              loop
              muted
              playsInline
            />
          </HeroVideo>
          <HeroOverlay />
          <HeroContent>
            <TitleIcon><IconBook size={32} /></TitleIcon>
            <PageTitle>FLAVOUR FLIP</PageTitle>
            <PageSubtitle>A Culinary Journey: Interactive Recipe Management & Meal Planning</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentContainer>
          <IntroText>
            Imagine culinary organisation transformed into an engaging, visually appealing digital journey.
            This is the vision behind Flavour Flip - an interactive recipe manager that combines advanced frontend
            interactivity with robust backend infrastructure to deliver genuine utility to cooking enthusiasts.
          </IntroText>

          <SectionContainer>
            <SectionTitle>
              <IconBook size={24} /> Project Overview
            </SectionTitle>
            <SectionContent>
              <p>The Interactive Recipe Manager demonstrates an innovative approach to culinary organisation through a feature-rich, user-centric web application. By combining advanced frontend interactivity with robust backend infrastructure, this project showcases comprehensive full-stack development expertise while delivering genuine utility to cooking enthusiasts. The platform transforms the everyday experience of recipe management and meal planning into an engaging, visually appealing digital journey.</p>
            </SectionContent>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>
              <IconSearch size={24} /> Project Objectives
            </SectionTitle>
            <SectionContent>
              <p>This portfolio website demonstrates technical proficiency across multiple domains of web development through a practical application that solves real-world problems. By integrating interactive recipe management with intuitive meal planning tools, the project highlights advanced skills in frontend animation, state management, database design, search optimisation, and responsive user interface development.</p>
            </SectionContent>
          </SectionContainer>

          <FlipCardsContainer>
            {recipeCards.map(card => (
              <FlipCard key={card.id}>
                <FlipCardInner>
                  <FlipCardFront isDark={isDarkMode}>
                    <img src={card.image} alt={card.title} />
                    <div className="content">
                      <h3>{card.title}</h3>
                    </div>
                  </FlipCardFront>
                  <FlipCardBack isDark={isDarkMode}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <ul>
                      {card.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </FlipCardBack>
                </FlipCardInner>
              </FlipCard>
            ))}
          </FlipCardsContainer>

          <FeatureSection>
            <FeatureWrapper>
              <FeatureContent>
                <SectionTitle>
                  <IconCode size={24} /> Frontend Development Approach
                </SectionTitle>
                <SectionContent>
                  <p>The frontend of the application creates an immersive, intuitive user experience through thoughtful design and rich interactivity. Recipe cards will feature elegant flip animations that transition between ingredient lists and cooking instructions, providing a compact yet comprehensive view of each culinary creation. A drag-and-drop meal planning calendar will allow users to visually organize their weekly cooking schedule, with responsive feedback and automatic adjustments to shopping lists.</p>
                  <p>The system incorporates sophisticated food photography showcasing, with optimised image loading and presentation to highlight the visual appeal of completed dishes. Interactive cooking timer components assist users during the cooking process, with multiple concurrent timers possible for complex recipes. An innovative ingredient quantity adjuster provides real-time visual feedback as users scale recipes up or down to accommodate different serving sizes.</p>
                  <p>The user interface will implement a carefully designed dark/light mode system with smooth transitions, ensuring comfortable usage in various environments and times of day. All interactive elements will be designed with both aesthetics and functionality in mind, providing intuitive controls while maintaining visual coherence across the application.</p>
                </SectionContent>
              </FeatureContent>
              <FeatureImage isDark={isDarkMode}>
                <img src={food2} alt="Frontend interface showing recipe cards and meal planning calendar" />
              </FeatureImage>
            </FeatureWrapper>
          </FeatureSection>

          <VideoBackground>
            <video
              src={foodvid2}
              autoPlay
              loop
              muted
              playsInline
            />
            <VideoContent>
              <SectionTitle>
                <IconDatabase size={24} /> Backend Infrastructure
              </SectionTitle>
              <SectionContent>
                <p>The backend is built around a robust recipe database with sophisticated search and filtering capabilities. The system implements an advanced indexing approach to optimize query performance across multiple dimensions including ingredients, cooking times, dietary restrictions, and flavor profiles. A comprehensive user authentication system protects personal data while enabling personalized experiences.</p>
                <p>An efficient image storage and processing pipeline handles recipe photographs, implementing responsive image delivery and progressive loading techniques to ensure optimal performance across devices with varying capabilities and connection speeds. The API layer is designed with a RESTful architecture, providing consistent endpoints for recipe data and user preferences while implementing proper rate limiting and caching mechanisms to maintain performance under load.</p>
              </SectionContent>
            </VideoContent>
          </VideoBackground>

          <FeatureSection>
            <FeatureWrapper reverse>
              <FeatureImage isDark={isDarkMode}>
                <img src={food3} alt="Search interface with filtering options" />
              </FeatureImage>
              <FeatureContent>
                <SectionTitle>
                  <IconSearch size={24} /> Database and Search Implementation
                </SectionTitle>
                <SectionContent>
                  <p>Central to the project is a sophisticated database design that enables powerful search capabilities. The system leverages modern search technologies to provide instant, typo-tolerant recipe lookups with intelligent ranking based on ingredient availability, user preferences, and seasonal relevance. The database schema efficiently models complex relationships between recipes, ingredients, nutrition information, and user interactions.</p>
                  <p>The search functionality implements advanced filtering options, allowing users to discover recipes based on multiple criteria simultaneously, such as available ingredients, preparation time, dietary restrictions, and cuisine types. This showcases expertise in database optimisation and search algorithm implementation.</p>
                </SectionContent>
              </FeatureContent>
            </FeatureWrapper>
          </FeatureSection>

          <SectionContainer>
            <SectionTitle>
              <IconGlobe size={24} /> Multilingual and Accessibility Features
            </SectionTitle>
            <SectionContent>
              <p>The website supports two languages - English and German - providing an international user experience. A comprehensive internationalization framework ensures that all recipes, ingredients, instructions, and interface elements are properly translated and culturally appropriate.</p>
              <p>Accessibility is a core feature of the application, with proper semantic markup, keyboard navigation support, screen reader compatibility, and sufficient color contrast. The application implements WCAG 2.1 guidelines to ensure usability for people with various disabilities.</p>
            </SectionContent>
          </SectionContainer>

          <FeaturesGrid>
            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.primary}>
                <IconCode size={24} />
              </FeatureIcon>
              <FeatureTitle>Advanced Animations</FeatureTitle>
              <FeatureDescription>
                Elegant transitions and animations provide visual feedback and enhance the user experience across the application.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.secondary}>
                <IconSliders size={24} />
              </FeatureIcon>
              <FeatureTitle>State Management</FeatureTitle>
              <FeatureDescription>
                Complex state handling across interconnected components enables a seamless and responsive user interface.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={isDarkMode}>
              <FeatureIcon color={themes.light.accent1}>
                <IconCalendar size={24} />
              </FeatureIcon>
              <FeatureTitle>Drag-and-Drop</FeatureTitle>
              <FeatureDescription>
                Intuitive drag-and-drop interfaces allow users to easily organize meals and manage recipe collections.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>

          <SectionContainer>
            <SectionTitle>
              <IconCode size={24} /> Technical Skills Demonstration
            </SectionTitle>
            <SectionContent>
              <p>Beyond its functional capabilities, the project serves as a comprehensive portfolio piece showcasing expertise in:</p>
            </SectionContent>
            <TechList>
              <TechItem>Advanced frontend animation and transition techniques</TechItem>
              <TechItem>Complex state management across interconnected components</TechItem>
              <TechItem>Sophisticated drag-and-drop implementations</TechItem>
              <TechItem>Responsive design with device-specific optimizations</TechItem>
              <TechItem>Database design and search optimisation</TechItem>
              <TechItem>Image processing and delivery pipelines</TechItem>
              <TechItem>User authentication and profile management</TechItem>
              <TechItem>Performance optimization through caching and lazy loading</TechItem>
              <TechItem>Internationalisation and localisation</TechItem>
              <TechItem>Accessibility implementation</TechItem>
            </TechList>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>
              <IconCode size={24} /> Technology Stack
            </SectionTitle>
            <SectionContent>
              <p>The project is implemented using a modern web development stack:</p>
            </SectionContent>
            <TechList>
              <TechItem>Frontend: React with TypeScript, leveraging the Context API and custom hooks for state management</TechItem>
              <TechItem>Styling: Tailwind CSS with custom extensions for the design system</TechItem>
              <TechItem>Animation: Framer Motion for fluid component transitions</TechItem>
              <TechItem>Backend: Node.js with Express, implementing a structured middleware approach</TechItem>
              <TechItem>Database: MongoDB for recipe storage with Elasticsearch for advanced search capabilities</TechItem>
              <TechItem>Authentication: JWT-based auth flow with secure refresh token rotation</TechItem>
              <TechItem>Image Processing: Sharp for server-side image optimisation</TechItem>
              <TechItem>Internationalisation: i18next for language management</TechItem>
              <TechItem>Deployment: Docker containerisation with CI/CD pipeline</TechItem>
            </TechList>
          </SectionContainer>

          <CTASection>
            <CTATitle>Ready to Transform Your Culinary Experience?</CTATitle>
            <CTAText>
              Explore the full capabilities of Flavour Flip and discover a new way to manage recipes, plan meals, and enjoy cooking.
            </CTAText>
            <CTAButton
              href="https://www.flavourflip.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Flavour Flip <IconChevronDown size={18} />
            </CTAButton>
          </CTASection>

          <SectionContainer>
            <SectionTitle>
              <IconBook size={24} /> Conclusion
            </SectionTitle>
            <SectionContent>
              <p>This Interactive Recipe Manager represents more than just a technical showcase. It is a thoughtful digital solution to everyday culinary challenges, transforming complex technical capabilities into an intuitive, practical application. By combining cutting-edge web technologies with user-centred design principles, the project demonstrates not only coding expertise but a holistic approach to creating digital products that provide genuine value to users. The completed application stands as testament to my ability to conceptualise, design, and implement sophisticated web applications from start to finish.</p>
            </SectionContent>
          </SectionContainer>

          <Footer>
            <FooterText>
              © 2025 Flavour Flip - Transforming recipe management through innovative technology
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

export default FlavourFlip;