import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.css';
import { portfolio } from './portfolio';

export default function PortfolioCards() {
  const renderedPort = portfolio.map((port, index) => {
    return (
      <div key={index} className={styles.card}>
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
    );
  });

  return <div className={styles.card_container}>{renderedPort}</div>;
}
