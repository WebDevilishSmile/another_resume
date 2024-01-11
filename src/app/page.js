'use client';

import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useScrollTrigger } from '@mui/material';

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
import { nearestIndex } from './components/ScrollHeader';

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const [activeIndex, setActiveIndex] = useState(0);
  const [links, setLinks] = useState([
    { title: 'home', location: '#home', headerRef: homeRef },
    { title: 'about', location: '#about', headerRef: aboutRef },
    { title: 'resume', location: '#resume', headerRef: resumeRef },
    { title: 'portfolio', location: '#portfolio', headerRef: portfolioRef },
    { title: 'contact', location: '#contact', headerRef: contactRef },
  ]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

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

  useEffect(() => {
    const handleScroll = (e) => {
      let index = nearestIndex(window.scrollY, links, 0, links.length - 1);
      setActiveIndex(index);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [links]);

  return (
    <main className={styles.main}>
      <Header
        links={links}
        mediaQueries={mediaQueries}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        trigger={trigger}
      />
      <Hero homeRef={homeRef} />
      <SectionDivider />
      <About aboutRef={aboutRef} activeIndex={activeIndex} />
      <Resume
        resumeRef={resumeRef}
        mediaQueries={mediaQueries}
        activeIndex={activeIndex}
      />
      <Portfolio portfolioRef={portfolioRef} activeIndex={activeIndex} />
      <Contact contactRef={contactRef} activeIndex={activeIndex} />
      <Footer />
    </main>
  );
}
