import styles from './resume.module.css';
import MobileCard from './resumeCards/MobileCard';

import arrow from '/public/icons/arrow.gif';

import ResumeCard from './resumeCards/ResumeCard';
import Image from 'next/image';

export default function Resume({ resumeRef, mediaQueries, activeIndex }) {
  return (
    <div ref={resumeRef} id='resume' className={styles.resume}>
      <div className={styles.cards_container}>
        <h3 className='heading'>education</h3>

        {mediaQueries.tablet || mediaQueries.lgPhone || mediaQueries.smPhone ? (
          <MobileCard />
        ) : (
          <ResumeCard />
        )}
        <div className={styles.swipe_gif}>
          <Image
            src={arrow}
            width={48}
            height={48}
            alt='Arrow GIF'
            style={{ mixBlendMode: 'multiply', transform: 'rotateY(180deg)' }}
          />
          <p>Swipe</p>
          <Image
            src={arrow}
            width={48}
            height={48}
            alt='Arrow GIF'
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>
    </div>
  );
}
