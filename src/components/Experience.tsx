import { useRevealAll } from '../hooks/useReveal';
import { workExp, education, achievements } from '../data/resume';
import styles from './Experience.module.css';

export default function Experience() {
  const ref = useRevealAll();

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>}>
      <div className="wrap">
        <p className="s-eye reveal">Background</p>
        <h2 className="s-title reveal">Experience &amp; <span>Education</span></h2>

        <div className={styles.layout}>
          {/* Work */}
          <div>
            <p className={styles.colHead}>Work Experience</p>
            <div className={styles.timeline}>
              <div className={styles.tlDot} />
              <div className={`card ${styles.tlCard} reveal`}>
                <div className={styles.jobTop}>
                  <div>
                    <h3 className={styles.jobTitle}>{workExp.title}</h3>
                    <p className={styles.jobSub}>{workExp.sub}</p>
                  </div>
                  <span className={styles.jobBadge}>{workExp.period}</span>
                </div>
                <p className={styles.jobCo}>
                  <span className={styles.coDot} />
                  {workExp.company} — {workExp.location}
                </p>
                <ul className={styles.jobBuls}>
                  {workExp.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className={styles.jobChips}>
                  {workExp.tech.map(t => <span key={t} className="chip chip-rx">{t}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Education + achievements */}
          <div className={styles.rightCol}>
            <p className={styles.colHead}>Education</p>
            <div className={styles.eduList}>
              {education.map(e => (
                <div key={e.degree} className={`card ${styles.eduCard} reveal`}>
                  <div className={styles.eduTop}>
                    <span className={styles.eduDeg}>{e.degree}</span>
                    <span className={styles.eduYr}>{e.year}</span>
                  </div>
                  <p className={styles.eduInst}>{e.inst}</p>
                  {e.board && <p className={styles.eduBoard}>{e.board}</p>}
                </div>
              ))}
            </div>

            <p className={styles.colHead} style={{ marginTop: 36 }}>Achievements</p>
            <div className={`card ${styles.achCard} reveal`}>
              {achievements.map(a => (
                <div key={a.text} className={styles.achRow}>
                  <span className={styles.achIcon}>{a.icon}</span>
                  <span className={styles.achText}>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
