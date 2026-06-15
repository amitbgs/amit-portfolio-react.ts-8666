import { useRevealAll } from '../hooks/useReveal';
import { projects } from '../data/resume';
import styles from './Projects.module.css';

export default function Projects() {
  const ref = useRevealAll();

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>}>
      <div className="wrap">
        <p className="s-eye reveal">Portfolio</p>
        <h2 className="s-title reveal">Featured <span>Projects</span></h2>

        <div className={styles.list}>
          {projects.map(p => (
            <article key={p.num} className={`card ${styles.card} ${p.featured ? styles.featured : ''} reveal`}>
              {p.featured && (
                <div className={styles.featRibbon}>
                  <span>★ Featured Project</span>
                </div>
              )}
              <div className={styles.inner}>
                <div className={styles.head}>
                  <div className={styles.metaRow}>
                    <span className={styles.num}>{p.num}</span>
                    <span className={`chip chip-pu ${styles.domain}`}>{p.domain}</span>
                  </div>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                </div>
                <ul className={styles.bullets}>
                  {p.bullets.map(b => (
                    <li key={b}>
                      <span className={styles.arrow}>→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  {p.tech.map(t => (
                    <span key={t.l} className={`chip chip-${t.c}`}>{t.l}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
