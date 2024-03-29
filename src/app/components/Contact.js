import Image from 'next/image';
import Link from 'next/link';

import styles from './contact.module.css';

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} id='contact' className={styles.contact}>
      <h2 className='heading'>contact</h2>
      <div className={styles.social_container}>
        <Link href='https://www.facebook.com/WebDevilishSmile' target='_blank'>
          <Image
            className={styles.social_logos}
            src='/icons/fb_icon.svg'
            width={200}
            height={200}
            alt='FaceBook logo'
          />
        </Link>
        <Link href='https://github.com/WebDevilishSmile' target='_blank'>
          <Image
            className={styles.social_logos}
            src='/icons/git_icon.svg'
            width={200}
            height={200}
            alt='GitHub logo'
          />
        </Link>
        <Link
          href='https://www.instagram.com/webdevilishsmile/'
          target='_blank'
        >
          {' '}
          <Image
            className={styles.social_logos}
            src='/icons/insta_icon.svg'
            width={200}
            height={200}
            alt='Instagram logo'
          />
        </Link>
        <Link
          href='https://www.linkedin.com/in/tiago-davila-461b6a298/'
          target='_blank'
        >
          <Image
            className={styles.social_logos}
            src='/icons/linked_icon.svg'
            width={200}
            height={200}
            alt='LinkedIn logo'
          />
        </Link>
        <Link href='mailto: webdevilishsmile@gmail.com'>
          <Image
            className={styles.social_logos}
            src='/icons/email.png'
            width={200}
            height={200}
            alt='LinkedIn logo'
          />
        </Link>
      </div>
    </div>
  );
}
