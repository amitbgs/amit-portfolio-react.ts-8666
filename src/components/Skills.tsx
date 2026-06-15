import { useRevealAll } from '../hooks/useReveal';
import { useSkillBars } from '../hooks/useSkillBars';
import { skillGroups, techStack } from '../data/resume';
import styles from './Skills.module.css';

const COLOR_MAP: Record<string, string> = { rx: 'var(--rx)', dn: 'var(--dn)', pu: 'var(--pu)' };

export default function Skills() {
  const sectionRef = useRevealAll();
  const { ref: barRef, animated } = useSkillBars();

  return (
    <section id="skills" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="wrap">
        <p className="s-eye reveal">Expertise</p>
        <h2 className="s-title reveal">Technical <span>Skills</span></h2>

        <div className={styles.grid} ref={barRef}>
          {skillGroups.map(g => (
            <div key={g.cat} className={`card ${styles.skillCard} reveal`}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon}>{g.icon}</span>
                <h3 className={styles.cardCat}>{g.cat}</h3>
                <span
                  className={styles.colorPill}
                  style={{ background: COLOR_MAP[g.color], color: '#06060e' }}
                >
                  {g.color === 'dn' ? '.NET' : g.color === 'rx' ? 'React' : 'Cloud'}
                </span>
              </div>
              <div className={styles.bars}>
                {g.bars.map(b => (
                  <div key={b.name} className={styles.barRow}>
                    <div className={styles.barMeta}>
                      <span className={styles.barName}>{b.name}</span>
                      <span className={styles.barPct} style={{ color: COLOR_MAP[g.color] }}>{b.pct}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{
                          width: animated ? `${b.pct}%` : '0%',
                          background: `linear-gradient(90deg, ${COLOR_MAP[g.color]}99, ${COLOR_MAP[g.color]})`,
                          transition: 'width 1.3s cubic-bezier(.4,0,.2,1)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.stackCloud} reveal`}>
          <p className="s-eye" style={{ justifyContent:'center' }}>Full Tech Stack</p>
          <div className={styles.stackWrap}>
            {techStack.map(t => (
              <span key={t.l} className={`chip chip-${t.c}`}>{t.l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
