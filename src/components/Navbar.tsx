import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label:'About',      id:'about'      },
  { label:'Skills',     id:'skills'     },
  { label:'Projects',   id:'projects'   },
  { label:'Experience', id:'experience' },
  { label:'Contact',    id:'contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const nav = (id: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`wrap ${styles.inner}`}>
          <button className={styles.logo} onClick={() => nav('hero')}>
            <span className={styles.logoDot}>{'{'}</span>
            AK
            <span className={styles.logoDot}>{'}'}</span>
          </button>

          <nav className={styles.desktopNav}>
            {links.map(l => (
              <button key={l.id} onClick={() => nav(l.id)}>{l.label}</button>
            ))}
          </nav>

          <a href="mailto:amitbgs678@gmail.com" className={`btn btn-primary ${styles.hireBtn}`}>
            Hire Me
          </a>

          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span/><span/><span/>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerContent}>
          {links.map((l, i) => (
            <button key={l.id} className={styles.drawerLink} onClick={() => nav(l.id)}>
              <span className={styles.drawerNum}>0{i + 1}</span>
              {l.label}
            </button>
          ))}
          <a href="mailto:amitbgs678@gmail.com" className={`btn btn-primary ${styles.drawerCta}`}>
            Hire Me →
          </a>
        </div>
      </aside>
    </>
  );
}
