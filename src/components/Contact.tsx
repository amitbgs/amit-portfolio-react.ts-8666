import { useState } from 'react';
import { useRevealAll } from '../hooks/useReveal';
import { personal } from '../data/resume';
import styles from './Contact.module.css';

const contactItems = [
  { icon:'✉️', label:'Email',    val:personal.email,    href:`mailto:${personal.email}` },
  { icon:'📞', label:'Phone',    val:personal.phone,    href:`tel:${personal.phone}` },
  { icon:'📍', label:'Location', val:'Noida, India',    href:'#' },
  { icon:'🔗', label:'LinkedIn', val:'amit-a-297050199', href:personal.linkedin },
];

export default function Contact() {
  const ref = useRevealAll();
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg]     = useState('');
  const [sent, setSent]   = useState(false);

  const valid = name.trim().length > 1
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    && msg.trim().length > 5;

  const submit = () => {
    if (!valid) return;
    const s = encodeURIComponent(`Portfolio Enquiry from ${name}`);
    const b = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.open(`mailto:${personal.email}?subject=${s}&body=${b}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setName(''); setEmail(''); setMsg(''); }, 5000);
  };

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className="wrap">
        <p className="s-eye reveal">Get In Touch</p>
        <h2 className="s-title reveal">Let's <span>Work Together</span></h2>

        <div className={styles.grid}>
          {/* Left */}
          <div className={`${styles.left} reveal`}>
            <p className={styles.intro}>
              I'm actively looking for senior .NET + React roles. Whether you have a project,
              a team that needs a full-stack engineer, or just want to connect — my inbox is open.
            </p>
            <div className={styles.cItems}>
              {contactItems.map(ci => (
                <a
                  key={ci.label}
                  href={ci.href}
                  className={styles.cItem}
                  target={ci.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <div className={styles.cIcon}>{ci.icon}</div>
                  <div>
                    <span className={styles.cLbl}>{ci.label}</span>
                    <span className={styles.cVal}>{ci.val}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className={styles.availBox}>
              <span className={styles.availDot} />
              <div>
                <p className={styles.availT}>Available for new roles</p>
                <p className={styles.availS}>Full-time · Contract · Remote</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`card ${styles.formCard} reveal`}>
            {!sent ? (
              <div className={styles.formWrap}>
                <div className={styles.fGroup}>
                  <label htmlFor="f-name">Your Name</label>
                  <input id="f-name" type="text" placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
                </div>
                <div className={styles.fGroup}>
                  <label htmlFor="f-email">Email Address</label>
                  <input id="f-email" type="email" placeholder="jane@company.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
                </div>
                <div className={styles.fGroup}>
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" rows={5} placeholder="Tell me about the role or project…" value={msg} onChange={e => setMsg(e.target.value)} />
                </div>
                <button className={`btn btn-primary ${styles.sendBtn}`} disabled={!valid} onClick={submit}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message sent!</h3>
                <p>Your email client has been opened. Looking forward to connecting.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
