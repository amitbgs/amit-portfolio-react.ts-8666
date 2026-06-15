import { useRevealAll } from '../hooks/useReveal';
import { personal, bio, infoItems } from '../data/resume';
import styles from './About.module.css';

export default function About() {
  const ref = useRevealAll();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="wrap">
        <p className="s-eye reveal">Who I Am</p>
        <h2 className="s-title reveal">About <span>Me</span></h2>
        <div className={styles.grid}>
          <div className={`${styles.textCol} reveal`}>
            {bio.map((p, i) => (
              <p key={i} className={styles.bioPara} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className={styles.chips}>
              {['Problem Solver','Team Mentor','Clean Code Advocate','API-First Thinker','Healthcare Tech'].map(t => (
                <span key={t} className="chip chip-rx">{t}</span>
              ))}
            </div>
          </div>
          <div className={`${styles.infoCol} reveal`}>
            <div className={styles.infoCard}>
              {infoItems.map(item => (
                <div key={item.label} className={styles.infoRow}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.infoLbl}>{item.label}</span>
                    <span className={styles.infoVal}>{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.btns}>
              <a href={`mailto:${personal.email}`} className="btn btn-primary">Hire Me →</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
