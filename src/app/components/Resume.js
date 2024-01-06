import styles from './resume.module.css';
import MobileCard from './resumeCards/MobileCard';

import ResumeCard from './resumeCards/ResumeCard';

export default function Resume({ resumeRef, mediaQueries }) {
  return (
    <div ref={resumeRef} id='resume' className={styles.resume}>
      <div className={styles.cards_container}>
        <h3 className='heading'>education</h3>

        {mediaQueries.tablet || mediaQueries.lgPhone || mediaQueries.smPhone ? (
          <MobileCard />
        ) : (
          <ResumeCard />
        )}
      </div>
    </div>
  );
}
