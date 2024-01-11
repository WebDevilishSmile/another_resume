import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.css';
import { portfolio } from './portfolio';
import { Grow } from '@mui/material';

export default function PortfolioCards({ activeIndex }) {
  const renderedPort = portfolio.map((port, index) => {
    return (
      <Grow key={index} in={activeIndex === 3} timeout={index * 1000 + 1000}>
        <div className={styles.card}>
          <Link className={styles.link} href={port.website} target='_blank'>
            <div className={styles.shadow}>
              <div className={styles.card_content}>
                <Image
                  className={styles.img}
                  src={port.img}
                  width={500}
                  height={500}
                  alt={`${port.title} image`}
                />
              </div>
            </div>
            <p className={styles.details}>{port.details}</p>
          </Link>
        </div>
      </Grow>
    );
  });

  return <div className={styles.card_container}>{renderedPort}</div>;
}
