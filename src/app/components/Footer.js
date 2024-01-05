import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <p>Copyright &copy; 2024 Tiago Davila</p>
      </div>
      <Link href='#home'>
        <Image
          className={styles.logo}
          src='/logo.png'
          width={800}
          height={1200}
          alt='Tiago Logo'
        />
      </Link>

      <div>Thank you for visiting my website.</div>
    </div>
  );
}
