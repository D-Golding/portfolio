import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from "../../components/header/header.jsx";
import myPhoto from '../../assets/douglasgolding.jpg';
import visualifyBack from '../../assets/visualifyBack.png';
import flavourBack from '../../assets/flavourBack.png';
import DeveloperSkillsSlider from "../../components/skillSlider/skillSlider.jsx";
import rachadHelalPhoto from '../../assets/backend.png';
import douglasGoldingPhoto from '../../assets/frontend.png';


// Custom icons
const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
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

const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Define theme objects for light and dark mode
const themes = {
  light: {
    primary: '#6C5CE7',     // Deep purple
    secondary: '#A29BFE',   // Lighter purple
    accent1: '#FD79A8',     // Pink
    accent2: '#00B894',     // Teal
    light: '#FFFFFF',
    background: '#F8F9FC',
    secondaryBackground: '#FFFFFF',
    text: '#2A2C3E',
    textLight: '#6C6F82',
    card: '#FFFFFF',
    border: '#E2E5EF'
  },
  dark: {
    primary: '#6C5CE7',
    secondary: '#A29BFE',
    accent1: '#FD79A8',
    accent2: '#00B894',
    light: '#FFFFFF',
    background: '#121318',
    secondaryBackground: '#1E1F26',
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
  
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
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
const NavHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 0;
  background-color: ${props => `${props.theme.background}E6`};
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavLogo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, 
    ${props => props.theme.primary}, 
    ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

// Hero Section
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 800px;
  width: 100%;
  overflow: hidden;
  padding: 100px 0;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BlobShape = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  background: ${props => props.color || props.theme.primary};
  animation: blob 20s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  transform-origin: center center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroTextContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
  
  .highlight {
    background: linear-gradient(to right, 
      ${props => props.theme.primary}, 
      ${props => props.theme.secondary}, 
      ${props => props.theme.accent1});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 32px;
  max-width: 500px;
  
  @media (max-width: 992px) {
    margin: 0 auto 32px;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
    color: white;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${props => props.theme.card};
  color: ${props => props.theme.text};
  border: 1px solid ${props => props.theme.border};
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.primary};
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 80%;
    margin: 0 auto;
  }
`;

const CodeWindowWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: all 0.5s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: perspective(1000px) rotateY(0) rotateX(0);
  }
`;

const CodeWindowHeader = styled.div`
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  padding: 12px 20px;
  display: flex;
  align-items: center;
`;

const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const WindowButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const CodeWindowContent = styled.div`
  background: ${props => props.theme.card};
  padding: 20px;
  height: 360px;
  overflow: hidden;
  position: relative;
`;

const CodeLine = styled.div`
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  color: ${props => props.color || props.theme.textLight};
  margin-bottom: 6px;
  display: flex;
  
  .line-number {
    color: ${props => props.theme.textLight};
    opacity: 0.5;
    width: 24px;
    margin-right: 12px;
    text-align: right;
  }
  
  .keyword {
    color: ${props => props.theme.primary};
  }
  
  .function {
    color: ${props => props.theme.secondary};
  }
  
  .string {
    color: ${props => props.theme.accent1};
  }
  
  .comment {
    color: ${props => props.theme.textLight};
    opacity: 0.6;
    font-style: italic;
  }
`;

// Section styling
const SectionContainer = styled.section`
  padding: 100px 0;
  position: relative;
  background: ${props => props.background || 'transparent'};
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  
  .highlight {
    background: linear-gradient(to right, 
      ${props => props.theme.primary}, 
      ${props => props.theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    margin: 16px auto 0;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
    border-radius: 2px;
  }
`;

const AboutSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  
  @media (max-width: 992px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ProfileImageFrame = styled.div`
  border: 2px solid transparent;
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary}) border-box;
  border-radius: 16px;
  padding: 4px;
  height: 100%;
  width: 100%;
`;

const ProfileImagePlaceholder = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background: ${props => props.theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 40%;
    height: 40%;
    color: ${props => props.theme.textLight};
    opacity: 0.3;
  }
`;

const AboutContent = styled.div``;

const AboutHeading = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${props => props.theme.text};
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 24px;
  line-height: 1.7;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
`;

const SkillCategory = styled.div``;

const SkillCategoryTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${props => props.theme.primary};
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 8px;
  
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
    margin-right: 10px;
  }
`;

// Projects Grid
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectHeader = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
`;

const ProjectBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, ${props => props.startColor || props.theme.primary}, ${props => props.endColor || props.theme.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: white;
`;

const ProjectIcon = styled.div`
  margin-bottom: 12px;
  
  svg {
    width: 40px;
    height: 40px;
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ProjectSubtitle = styled.p`
  font-size: 1rem;
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const ProjectTag = styled.span`
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${props => `${props.bgColor}20` || `${props.theme.primary}20`};
  color: ${props => props.color || props.theme.primary};
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 12px;
`;

const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  ${props => props.primary ? `
    background: ${props.theme.primary};
    color: white;
    
    &:hover {
      background: ${props.theme.secondary};
      color: white;
    }
  ` : `
    background: ${props.theme.card};
    color: ${props.theme.text};
    border: 1px solid ${props.theme.border};
    
    &:hover {
      background: ${props.theme.border};
    }
  `}
`;

const ViewAllButton = styled.a`
  display: block;
  width: fit-content;
  margin: 40px auto 0;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.3);
    color: white;
  }
`;

// Contact section
const ContactSection = styled.section`
  position: relative;
  padding: 100px 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${props => props.theme.card};
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const ContactInfoTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${props => props.theme.text};
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  gap: 16px;
`;

const ContactIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${props => `${props.theme.primary}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: ${props => props.theme.primary};
  }
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 4px;
`;

const ContactValue = styled.a`
  font-size: 1rem;
  color: ${props => props.theme.text};
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: ${props => props.theme.text};
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.card};
  color: ${props => props.theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => `${props.theme.primary}30`};
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.card};
  color: ${props => props.theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => `${props.theme.primary}30`};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 14px 24px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.3);
  }
`;

// Footer styling
const Footer = styled.footer`
  background: ${props => props.theme.card};
  padding: 60px 0 30px;
  position: relative;
  
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

const FooterContent = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
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
function Portfolio() {
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
    } else {
      // Check system preference
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  // Get current theme based on dark mode state
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header />
      <PageContainer>
        <NavHeader>
          <NavContent>
            <NavLogo>Douglas Golding</NavLogo>
            <NavMenu>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <ThemeToggle onClick={toggleTheme} isDark={isDarkMode}>
                {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
              </ThemeToggle>
            </NavMenu>
          </NavContent>
        </NavHeader>

        <HeroSection>
          <HeroBackground>
            <BlobShape color={currentTheme.primary} top="-200px" left="-100px" />
            <BlobShape color={currentTheme.secondary} top="200px" left="60%" delay="5s" />
            <BlobShape color={currentTheme.accent1} top="400px" left="20%" delay="10s" />
          </HeroBackground>

          <HeroContent>
            <HeroGrid>
              <HeroTextContent>
                <HeroTitle>
                  <span className="highlight">Frontend Developer</span>
                  Creating Beautiful Web Experiences
                </HeroTitle>
                <HeroSubtitle>
                  I design and build modern, responsive, and elegant web applications with exceptional user experiences.
                </HeroSubtitle>
                <ActionButtonsContainer>
                  <PrimaryButton href="#projects">
                    View Projects <IconArrowRight size={16} />
                  </PrimaryButton>
                  <SecondaryButton href="#contact">
                    Contact Me <IconMail size={16} />
                  </SecondaryButton>
                </ActionButtonsContainer>
              </HeroTextContent>

              <HeroImageContainer>
                <CodeWindowWrapper>
                  <CodeWindowHeader>
                    <WindowButtons>
                      <WindowButton color="#FF5F56" />
                      <WindowButton color="#FFBD2E" />
                      <WindowButton color="#27C93F" />
                    </WindowButtons>
                  </CodeWindowHeader>
                  <CodeWindowContent>
  <CodeLine>
    <span className="line-number">1</span>
    <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;
  </CodeLine>
  <CodeLine>
    <span className="line-number">2</span>
    <span className="keyword">import</span> styled <span className="keyword">from</span> <span className="string">'styled-components'</span>;
  </CodeLine>
  <CodeLine>
    <span className="line-number">3</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">4</span>
    <span className="comment">// Create a beautiful UI component</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">5</span>
    <span className="keyword">const</span> Card = styled.<span className="function">div</span>{"`"}
  </CodeLine>
  <CodeLine>
    <span className="line-number">6</span>
    <span className="string">  background: ${"${props => props.theme.card}"}</span>;
  </CodeLine>
  <CodeLine>
    <span className="line-number">7</span>
    <span className="string">  border-radius: 12px;</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">8</span>
    <span className="string">  padding: 24px;</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">9</span>
    <span className="string">  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">10</span>
    <span className="string">  transition: transform 0.3s ease;</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">11</span>
    <span className="string">  </span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">12</span>
    <span className="string">  &:hover {"{"}</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">13</span>
    <span className="string">    transform: translateY(-5px);</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">14</span>
    <span className="string">  {"}"}</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">15</span>
    <span className="string">{"`"}</span>;
  </CodeLine>
  <CodeLine>
    <span className="line-number">16</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">17</span>
    <span className="keyword">const</span> <span className="function">PortfolioProject</span> = {"() => {"}
  </CodeLine>
  <CodeLine>
    <span className="line-number">18</span>
    <span className="keyword">  return</span> (
  </CodeLine>
  <CodeLine>
    <span className="line-number">19</span>
    <span className="text">    {"<Card>"}</span>
  </CodeLine>
  <CodeLine>
    <span className="line-number">20</span>
    <span className="text">      {"<h2>"}My Awesome Project{"</h2>"}</span>
  </CodeLine>
</CodeWindowContent>
                </CodeWindowWrapper>
              </HeroImageContainer>
            </HeroGrid>
          </HeroContent>
        </HeroSection>

        <SectionContainer id="about" background={currentTheme.secondaryBackground}>
          <ContentContainer>
            <SectionTitle>
              <span className="highlight">About Me</span>
            </SectionTitle>

            <AboutSectionGrid>


        <ProfileImageContainer>
  <ProfileImageFrame>
    <img
      src={myPhoto}
      alt="Profile"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        objectFit: 'cover'
      }}
    />
  </ProfileImageFrame>
</ProfileImageContainer>

              <AboutContent>
                <AboutHeading>Frontend Developer & UI/UX Enthusiast</AboutHeading>
                <AboutText>
                  I'm a passionate frontend developer with 5+ years of experience creating engaging web experiences. My journey in web development started with a simple fascination with how websites work, and has evolved into a deep expertise in modern frontend technologies.
                </AboutText>
                <AboutText>
                  I specialize in building responsive, accessible, and performant web applications using React, with a focus on creating intuitive user interfaces and smooth interactions. I believe that great design should be both beautiful and functional, and I strive to achieve this balance in every project.
                </AboutText>

                <SkillsGrid>
                  <SkillCategory>
                    <SkillCategoryTitle>Frontend</SkillCategoryTitle>
                    <SkillsList>
                      <SkillItem>React / Next.js</SkillItem>
                      <SkillItem>JavaScript / TypeScript</SkillItem>
                      <SkillItem>HTML / CSS / Sass</SkillItem>
                      <SkillItem>Styled Components</SkillItem>
                    </SkillsList>
                  </SkillCategory>

                  <SkillCategory>
                    <SkillCategoryTitle>Tools & More</SkillCategoryTitle>
                    <SkillsList>
                      <SkillItem>Figma / Adobe XD</SkillItem>
                      <SkillItem>Git / GitHub</SkillItem>
                      <SkillItem>Redux / Context API</SkillItem>
                      <SkillItem>Jest / Testing Library</SkillItem>
                    </SkillsList>
                  </SkillCategory>
                </SkillsGrid>

                <SecondaryButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <IconBriefcase size={16} /> View Resume
                </SecondaryButton>
              </AboutContent>
            </AboutSectionGrid>
              <DeveloperSkillsSlider
  frontendImage={douglasGoldingPhoto}
  backendImage={rachadHelalPhoto}
/>

          </ContentContainer>
        </SectionContainer>

        <SectionContainer id="projects">
          <ContentContainer>





            <SectionTitle>
              <span className="highlight">Featured Projects</span>
            </SectionTitle>

            <ProjectsGrid>
              {/* Flavour Flip Card */}
              <ProjectCard>
                <ProjectHeader>
<ProjectBg style={{
  backgroundImage: `url(${flavourBack})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>                    <div>

                    </div>
                  </ProjectBg>
                </ProjectHeader>

                <ProjectContent>
                  <ProjectDescription>
                    A feature-rich, user-centric web application that transforms the everyday experience of recipe management and meal planning into an engaging, visually appealing digital journey.
                  </ProjectDescription>

                  <ProjectTags>
                    <ProjectTag bgColor="#E76F51" color="#E76F51">React</ProjectTag>
                    <ProjectTag bgColor="#F4A261" color="#F4A261">TypeScript</ProjectTag>
                    <ProjectTag bgColor="#E9C46A" color="#E9C46A">Styled Components</ProjectTag>
                    <ProjectTag bgColor="#2A9D8F" color="#2A9D8F">MongoDB</ProjectTag>
                  </ProjectTags>

                  <ProjectActions>
                    <ProjectButton primary href="/flavour-flip">
                      View Details
                    </ProjectButton>
                    <ProjectButton href="https://www.flavourflip.online" target="_blank" rel="noopener noreferrer">
                      Live Demo <IconExternalLink size={14} />
                    </ProjectButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>

              {/* Visualify Card */}
              <ProjectCard>
                <ProjectHeader>
<ProjectBg style={{
  backgroundImage: `url(${visualifyBack})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>                <div>


                    </div>
                  </ProjectBg>
                </ProjectHeader>

                <ProjectContent>
                  <ProjectDescription>
                    An innovative web application that transforms music into dynamic visual experiences, creating real-time visual representations that respond to every nuance of a musical track.
                  </ProjectDescription>

                  <ProjectTags>
                    <ProjectTag bgColor="#332FD0" color="#332FD0">React</ProjectTag>
                    <ProjectTag bgColor="#9254C8" color="#9254C8">Canvas API</ProjectTag>
                    <ProjectTag bgColor="#E15FED" color="#E15FED">Web Audio API</ProjectTag>
                    <ProjectTag bgColor="#6EDCD9" color="#6EDCD9">Spotify API</ProjectTag>
                  </ProjectTags>

                  <ProjectActions>
                    <ProjectButton primary href="/visualify">
                      View Details
                    </ProjectButton>
                    <ProjectButton href="https://www.visualify.online" target="_blank" rel="noopener noreferrer">
                      Live Demo <IconExternalLink size={14} />
                    </ProjectButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            </ProjectsGrid>

            <ViewAllButton href="/projects">
              View All Projects <IconArrowRight size={16} />
            </ViewAllButton>
          </ContentContainer>
        </SectionContainer>

        <SectionContainer id="contact" background={currentTheme.secondaryBackground}>
          <ContentContainer>
            <SectionTitle>
              <span className="highlight">Get In Touch</span>
            </SectionTitle>

            <ContactGrid>
              <ContactInfo>
                <ContactInfoTitle>Contact Information</ContactInfoTitle>
                <ContactInfoList>
                  <ContactInfoItem>
                    <ContactIconWrapper>
                      <IconMail size={20} />
                    </ContactIconWrapper>
                    <ContactDetails>
                      <ContactLabel>Email</ContactLabel>
                      <ContactValue href="mailto:hello@alexchen.dev">hello@alexchen.dev</ContactValue>
                    </ContactDetails>
                  </ContactInfoItem>

                  <ContactInfoItem>
                    <ContactIconWrapper>
                      <IconGithub size={20} />
                    </ContactIconWrapper>
                    <ContactDetails>
                      <ContactLabel>GitHub</ContactLabel>
                      <ContactValue href="https://github.com/alexchendev" target="_blank" rel="noopener noreferrer">
                        @alexchendev
                      </ContactValue>
                    </ContactDetails>
                  </ContactInfoItem>

                  <ContactInfoItem>
                    <ContactIconWrapper>
                      <IconLinkedin size={20} />
                    </ContactIconWrapper>
                    <ContactDetails>
                      <ContactLabel>LinkedIn</ContactLabel>
                      <ContactValue href="https://linkedin.com/in/alexchendev" target="_blank" rel="noopener noreferrer">
                        Alex Chen
                      </ContactValue>
                    </ContactDetails>
                  </ContactInfoItem>
                </ContactInfoList>
              </ContactInfo>

              <ContactForm>
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormInput type="text" id="name" name="name" placeholder="Your name" />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" name="email" placeholder="Your email" />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput type="text" id="subject" name="subject" placeholder="Subject" />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea id="message" name="message" rows={5} placeholder="Your message"></FormTextarea>
                </FormGroup>

                <SubmitButton type="submit">
                  Send Message <IconArrowRight size={16} />
                </SubmitButton>
              </ContactForm>
            </ContactGrid>
          </ContentContainer>
        </SectionContainer>

        <Footer>
          <ContentContainer>
            <FooterContent>
              <FooterText>
                © {new Date().getFullYear()} Alex Chen. All rights reserved.
              </FooterText>
              <SocialLinks>
                <SocialLink href="https://github.com/alexchendev" target="_blank" rel="noopener noreferrer">
                  <IconGithub size={20} />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/alexchendev" target="_blank" rel="noopener noreferrer">
                  <IconLinkedin size={20} />
                </SocialLink>
                <SocialLink href="https://twitter.com/alexchendev" target="_blank" rel="noopener noreferrer">
                  <IconTwitter size={20} />
                </SocialLink>
              </SocialLinks>
            </FooterContent>
          </ContentContainer>
        </Footer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Portfolio;