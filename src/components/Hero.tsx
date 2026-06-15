import { useTypewriter } from '../hooks/useTypewriter';
import { personal, stats, roles } from '../data/resume';
import styles from './Hero.module.css';

export default function Hero() {
  const typed = useTypewriter(roles);

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.section} id="hero">
      {/* Radial glow orbs */}
      <div className={styles.orbRx} aria-hidden />
      <div className={styles.orbDn} aria-hidden />

      <div className={`wrap ${styles.grid}`}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <div className={styles.available}>
            <span className={styles.ping} />
            <span>Open to new opportunities</span>
          </div>

          <h1 className={styles.name}>
            {personal.name.split(' ').map((w, i) => (
              <span key={i} className={i === 1 ? styles.nameAccent : undefined}>{w}</span>
            ))}
          </h1>

          <div className={styles.twWrap}>
            <span className={styles.twBracket}>&lt;</span>
            <span className={styles.twText}>{typed}</span>
            <span className={styles.twCursor}>▌</span>
            <span className={styles.twBracket}>/&gt;</span>
          </div>

          <p className={styles.bio}>
            Senior Full Stack Engineer with <strong>3.6+ years</strong> shipping
            production apps with <strong>ASP.NET Core</strong> &amp; <strong>React.js</strong>.
            Specialised in healthcare platforms, REST API design, and real-time telehealth solutions.
          </p>

          <div className={styles.actions}>
            <button className="btn btn-primary" onClick={() => scroll('projects')}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="5 12 12 5 19 12"/><polyline points="5 19 12 12 19 19"/></svg>
              View Projects
            </button>
            <button className="btn btn-ghost" onClick={() => scroll('contact')}>
              Let's Talk
            </button>
            <a
              href="https://linkedin.com/in/amit-a-297050199"
              target="_blank" rel="noreferrer"
              className={`btn btn-ghost ${styles.liBtn}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>

          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: IDE window ── */}
        <div className={styles.right}>
          <div className={styles.ideWrap}>
            {/* IDE chrome */}
            <div className={styles.ideBar}>
              <span className={`${styles.dot} ${styles.dotR}`}/>
              <span className={`${styles.dot} ${styles.dotY}`}/>
              <span className={`${styles.dot} ${styles.dotG}`}/>
              <span className={styles.ideTitle}>amit.profile.ts</span>
              <span className={styles.ideLang}>TypeScript</span>
            </div>
            {/* line numbers + code */}
            <div className={styles.ideBody}>
              <div className={styles.lineNums}>
                {Array.from({length:19},(_,i)=><span key={i}>{i+1}</span>)}
              </div>
              <pre className={styles.code}><code>
<span className={styles.cComment}>{'// Senior Software Engineer'}</span>{'\n'}
<span className={styles.cKw}>const</span> <span className={styles.cVar}> amit</span> <span className={styles.cOp}>=</span> {'{'}{'\n'}
{'  '}<span className={styles.cKey}>name</span><span className={styles.cOp}>:</span>        <span className={styles.cStr}>"Amit Kumar Akela"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>role</span><span className={styles.cOp}>:</span>        <span className={styles.cStr}>"Senior SWE"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>location</span><span className={styles.cOp}>:</span>    <span className={styles.cStr}>"Noida, India"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>experience</span><span className={styles.cOp}>:</span>  <span className={styles.cStr}>"3.6+ years"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>backend</span><span className={styles.cOp}>:</span>     <span className={styles.cStr}>"ASP.NET Core"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>frontend</span><span className={styles.cOp}>:</span>    <span className={styles.cStr}>"React.js"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>database</span><span className={styles.cOp}>:</span>    <span className={styles.cStr}>"SQL Server"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>stack</span><span className={styles.cOp}>:</span> {'['}{'\n'}
{'    '}<span className={styles.cStr}>"C#"</span><span className={styles.cOp}>,</span> <span className={styles.cStr}>"TypeScript"</span><span className={styles.cOp}>,</span>{'\n'}
{'    '}<span className={styles.cStr}>"Redux"</span><span className={styles.cOp}>,</span> <span className={styles.cStr}>"JWT"</span><span className={styles.cOp}>,</span>{'\n'}
{'    '}<span className={styles.cStr}>"AWS S3"</span><span className={styles.cOp}>,</span> <span className={styles.cStr}>"Twilio"</span><span className={styles.cOp}>,</span>{'\n'}
{'  ],'}{'\n'}
{'  '}<span className={styles.cKey}>domain</span><span className={styles.cOp}>:</span>      <span className={styles.cStr}>"Healthcare"</span><span className={styles.cOp}>,</span>{'\n'}
{'  '}<span className={styles.cKey}>available</span><span className={styles.cOp}>:</span>   <span className={styles.cBool}>true</span><span className={styles.cOp}>,</span>{'\n'}
{'};'}
              </code></pre>
            </div>
            {/* scan line effect */}
            <div className={styles.scanLine} aria-hidden />
          </div>

          {/* floating chips */}
          <div className={`${styles.floatChip} ${styles.fc1} chip chip-rx`}>React.js</div>
          <div className={`${styles.floatChip} ${styles.fc2} chip chip-dn`}>.NET Core</div>
          <div className={`${styles.floatChip} ${styles.fc3} chip chip-pu`}>SQL Server</div>
          <div className={`${styles.floatChip} ${styles.fc4} chip chip-dn`}>C#</div>
        </div>
      </div>

      {/* scroll cue */}
      <div className={styles.scrollCue} aria-hidden>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollBall}/>
        </div>
        <span>scroll</span>
      </div>
    </section>
  );
}
