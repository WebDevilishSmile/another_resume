'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { useScrollTrigger } from '@mui/material';

import styles from './header.module.css';

import { nearestIndex } from './ScrollHeader';

import MobileMenu from './MobileMenu';

export default function Header({
  links,
  mediaQueries,
  activeIndex,
  setActiveIndex,
  trigger,
}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const headerStyle = trigger ? styles.scrolled : '';

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
        <MobileMenu
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          links={links}
        />
      )}
    </div>
  );
}
