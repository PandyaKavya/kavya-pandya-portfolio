import Link from "next/link";
import {
  SITE, LEAD, INTERESTS, ABOUT, PUBLICATIONS, EDUCATION,
} from "@/lib/site";
import { PubCard } from "@/components/PubCard";

/* --- inline link logos: white glyphs that sit inside the navy badges --- */
function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function IconCV() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

function Section({
  num, id, title, linkHref, linkLabel, children,
}: {
  num: string; id: string; title: string;
  linkHref?: string; linkLabel?: string; children: React.ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="sec-head">
        <div className="sec-head-main">
          <span className="sec-num">§ {num}</span>
          <h2>{title}</h2>
        </div>
        {linkHref && linkLabel ? (
          <Link href={linkHref} className="sec-link">{linkLabel} →</Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const research = PUBLICATIONS.filter((p) => p.research);

  return (
    <div className="page">
      {/* -------- top nav -------- */}
      <nav className="topnav">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <Link href="/publications/">Publications</Link>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* -------- hero: identity card (left) + intro (right) -------- */}
      <header className="hero">
        <aside className="idcard">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-photo" src={SITE.photo} alt={SITE.name} />
          <h1 className="id-name">{SITE.name}</h1>
          <p className="id-degree">{SITE.degree}</p>
          <p className="id-inst">{SITE.institute}</p>
          <div className="logos">
            <a className="logo" href={SITE.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><IconScholar /></a>
            <a className="logo" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconLinkedIn /></a>
            <a className="logo" href={`mailto:${SITE.email}`} aria-label="Email"><IconMail /></a>
            <a className="logo" href={SITE.cv} target="_blank" rel="noopener noreferrer" aria-label="Curriculum vitae"><IconCV /></a>
          </div>
        </aside>

        <div className="hero-text">
          <p className="intro">{LEAD}</p>
          <div className="chips">
            {INTERESTS.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
          <a className="btn-research" href="#research">View research <span aria-hidden="true">→</span></a>
        </div>
      </header>

      {/* -------- § 01 About -------- */}
      <Section num="01" id="about" title="About">
        {ABOUT.map((para, i) => <p key={i}>{para}</p>)}
      </Section>

      {/* -------- § 02 Research (own doctoral study) -------- */}
      <Section num="02" id="research" title="Research" linkHref="/publications/" linkLabel="All publications">
        <p className="sec-lead">
          Papers from my own doctoral research — the direction of my work on the DNA-damage response,
          autophagy, and cancer-cell survival.
        </p>
        <div className="cards">
          {research.map((p, i) => <PubCard key={i} p={p} />)}
        </div>
      </Section>

      {/* -------- § 03 Education -------- */}
      <Section num="03" id="education" title="Education">
        {EDUCATION.map((e, i) => (
          <div className="edu-line" key={i}>
            <span><b>{e.degree}</b> — {e.inst}</span>
            <span className="r">{e.years}</span>
          </div>
        ))}
      </Section>

      {/* -------- § 04 Contact -------- */}
      <section className="section" id="contact">
        <div className="sec-head">
          <div className="sec-head-main">
            <span className="sec-num">§ 04</span>
            <h2>Contact</h2>
          </div>
        </div>
        <div className="contact-row">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={SITE.cv} target="_blank" rel="noopener noreferrer">Curriculum vitae</a>
        </div>
      </section>

      <footer>
        <span>© 2026 {SITE.name}</span>
        <span>{SITE.location}</span>
      </footer>
    </div>
  );
}
