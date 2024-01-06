import Image from 'next/image';
import Link from 'next/link';

import { IconButton, Modal, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import styles from './mobile.module.css';
import { nearestIndex } from './ScrollHeader';
import { useEffect } from 'react';

export default function MobileMenu({
  activeIndex,
  setActiveIndex,
  mobileMenu,
  setMobileMenu,
  links,
}) {
  useEffect(() => {
    const handleScroll = (e) => {
      let index = nearestIndex(window.scrollY, links, 0, links.length - 1);
      setActiveIndex(index);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [links, setActiveIndex]);
  const renderedLinks = links.map((li, index) => {
    const navLinkStyle = activeIndex === index ? styles.active : null;
    return (
      <a
        key={index}
        href={`${li.location}`}
        className={`${styles.mobile_link} + ${navLinkStyle} `}
        onClick={() => setMobileMenu(false)}
      >
        {li.title}
      </a>
    );
  });

  return (
    <div className={styles.mobile_menu}>
      <IconButton onClick={() => setMobileMenu((prev) => !prev)}>
        <Image
          className={styles.menu_icon}
          src='/icons/menu.svg'
          width={50}
          height={50}
          alt='Menu Icon'
        />
      </IconButton>
      <Modal
        open={mobileMenu}
        onClose={() => setMobileMenu(false)}
        disableScrollLock={true}
      >
        <Slide direction='left' in={mobileMenu}>
          <div className={styles.open_menu}>
            <IconButton
              onClick={() => setMobileMenu(false)}
              sx={{
                position: 'absolute',
                top: '2%',
                right: '5%',
                color: '#000',
              }}
            >
              <CloseIcon fontSize='large' />
            </IconButton>
            {renderedLinks}
          </div>
        </Slide>
      </Modal>
    </div>
  );
}
