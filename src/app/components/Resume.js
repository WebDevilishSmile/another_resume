import styles from './resume.module.css';

import ResumeCard from './resumeCards/ResumeCard';

export default function Resume({ resumeRef }) {
  return (
    <div ref={resumeRef} id='resume' className={styles.resume}>
      <div className={styles.cards_container}>
        <h3 className='heading'>education</h3>

        <ResumeCard />
      </div>
    </div>
  );
}
