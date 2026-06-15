import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.rx}>{'{'}</span>AK<span className={styles.rx}>{'}'}</span>
        </button>
        <p className={styles.copy}>Amit Kumar Akela · Senior .NET + React Developer · Noida, India</p>
        <p className={styles.credit}>© {new Date().getFullYear()} — Built with React &amp; TypeScript</p>
      </div>
    </footer>
  );
}
