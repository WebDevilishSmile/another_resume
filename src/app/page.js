'use client';

import { useRef } from 'react';
import { useMediaQuery } from '@mui/material';

import styles from './page.module.css';

import './globals.css';

import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Header from '@/app/components/Header';
import Portfolio from '@/app/components/Portfolio';
import Resume from '@/app/components/Resume';
import Contact from '@/app/components/Contact';
import SectionDivider from './components/SectionDivider';
import Footer from './components/Footer';
import theme from '@/utilities/theme';

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const desktop = useMediaQuery(theme.breakpoints.up('xxl'));
  const laptop = useMediaQuery(theme.breakpoints.between('xl', 'xxl'));
  const tablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const lgPhone = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const smPhone = useMediaQuery(theme.breakpoints.between('xxs', 'sm'));

  const mediaQueries = {
    desktop: desktop,
    laptop: laptop,
    tablet: tablet,
    lgPhone: lgPhone,
    smPhone: smPhone,
  };

  const links = [
    { title: 'home', location: '#home', headerRef: homeRef },
    { title: 'about', location: '#about', headerRef: aboutRef },
    { title: 'resume', location: '#resume', headerRef: resumeRef },
    { title: 'portfolio', location: '#portfolio', headerRef: portfolioRef },
    { title: 'contact', location: '#contact', headerRef: contactRef },
  ];

  return (
    <main className={styles.main}>
      <Header links={links} mediaQueries={mediaQueries} />
      <Hero homeRef={homeRef} />
      <SectionDivider />
      <About aboutRef={aboutRef} />
      <Resume resumeRef={resumeRef} mediaQueries={mediaQueries} />
      <Portfolio portfolioRef={portfolioRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}
