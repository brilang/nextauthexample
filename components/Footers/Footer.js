import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href='/policy'>
            <a>Privacy Policy</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
