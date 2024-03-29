import styles from './hero.module.css';

import '../globals.css';
import { Fade } from '@mui/material';

export default function Hero({ homeRef }) {
  return (
    <div ref={homeRef} id='home' className={styles.hero}>
      <Fade in={true} appear={true} timeout={2000}>
        <div className={styles.content_container}>
          <div className={styles.heading_container}>
            <h1 className={styles.heading_primary}>
              I <span className={styles.heading_highlight}>am</span> Tiago
              Davila
            </h1>
            <h3 className={styles.heading_secondary}>
              web designer and developer.
            </h3>
          </div>

          <div className={styles.btn_container}>
            <a className='contact_button' href='#contact'>
              Contact
            </a>
            <a className={styles.learn_button} href='#about'>
              Learn More &darr;
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
