import Link from 'next/link';
import styles from './portfolio.module.css';
import Image from 'next/image';
import PortfolioCards from './portfolioCards/PortfolioCards';

export default function Portfolio({ portfolioRef }) {
  return (
    <div ref={portfolioRef} id='portfolio' className={styles.portfolio}>
      <h2 className='heading'>portfolio</h2>
      <PortfolioCards />
    </div>
  );
}
