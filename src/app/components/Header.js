'use client';

import Image from 'next/image';

import { useScrollTrigger } from '@mui/material';

import styles from './header.module.css';
import { useEffect, useState } from 'react';
import { nearestIndex } from './ScrollHeader';
import Link from 'next/link';

export default function Header({ links, mediaQueries }) {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const headerStyle = trigger ? styles.scrolled : null;

  const renderedLinks = links.map((li, index) => {
    const navLinkStyle = activeIndex === index ? styles.active : null;
    return (
      <a
        key={index}
        href={`${li.location}`}
        className={`${styles.nav_link} + ${navLinkStyle} `}
      >
        {li.title}
      </a>
    );
  });

  return (
    <div className={`${styles.container} + ${headerStyle}`}>
      <a href='#home'>
        <Image
          className={styles.logo}
          src='/logo.png'
          width={150}
          height={40}
          alt='Logo'
        />
      </a>
      {mediaQueries.desktop || mediaQueries.laptop ? (
        <div className={styles.nav_links}>{renderedLinks}</div>
      ) : (
        <Link href='/'>
          <Image
            className={styles.menu}
            src='/icons/menu.svg'
            width={50}
            height={50}
            alt='Menu Icon'
          />
        </Link>
      )}
    </div>
  );
}
