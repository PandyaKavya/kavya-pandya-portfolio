import {
  SITE, LEAD, ABOUT, NEWS, RESEARCH, METHODS, PUBLICATIONS, EDUCATION,
} from "@/lib/site";

/** Render an author string, bolding Kavya's own name ("… Pandya"). */
function Authors({ value }: { value: string }) {
  const parts = value.split(", ");
  return (
    <>
      {parts.map((a, i) => (
        <span key={i}>
          {a.includes("Pandya") ? <span className="me">{a}</span> : a}
          {i < parts.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="wrap">
      {/* -------- left sidebar -------- */}
      <aside className="side">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="photo" src={SITE.photo} alt={SITE.name} />
        <p className="name">{SITE.name}</p>
        <p className="degree">{SITE.degree}</p>
        <div className="expertise">
          <span className="lbl">Expertise</span>
          <span className="val">{SITE.expertise}</span>
        </div>
        <ul className="side-links">
          <li><span className="ico">◈</span><a href={SITE.scholar}>Google Scholar</a></li>
          <li><span className="ico">in</span><a href={SITE.linkedin}>LinkedIn</a></li>
          <li><span className="ico">✉</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li><span className="ico">⬇</span><a href={SITE.cv}>Curriculum vitae</a></li>
        </ul>
      </aside>

      {/* -------- content column -------- */}
      <main className="main">
        <p className="lead">{LEAD}</p>

        <section id="about">
          <h2>About</h2>
          {ABOUT.map((para, i) => <p key={i}>{para}</p>)}
        </section>

        <section id="news">
          <h2>News</h2>
          <ul className="news">
            {NEWS.map((n, i) => (
              <li key={i}><span className="date">{n.date}</span><span>{n.text}</span></li>
            ))}
          </ul>
        </section>

        <section id="research">
          <h2>Research</h2>
          <ul className="research">
            {RESEARCH.map((r, i) => (
              <li key={i}><b>{r.title}.</b> <span>{r.desc}</span></li>
            ))}
          </ul>
        </section>

        <section id="methods">
          <h2>Methods</h2>
          <div className="methods">
            <div>
              <h3>Experimental</h3>
              <p>{METHODS.experimental.join(" · ")}</p>
            </div>
            <div>
              <h3>Computational</h3>
              <p>{METHODS.computational.join(" · ")}</p>
            </div>
          </div>
        </section>

        <section id="publications">
          <h2>Publications</h2>
          <ol className="pubs">
            {PUBLICATIONS.map((p, i) => (
              <li key={i}>
                <Authors value={p.authors} /> ({p.year}).{" "}
                {p.href
                  ? <a className="t" href={p.href} target="_blank" rel="noopener noreferrer">{p.title}.</a>
                  : <span className="t">{p.title}.</span>}{" "}
                <span className="v">{p.venue}.</span>
                {p.badge ? <span className="badge">{p.badge}</span> : null}
              </li>
            ))}
          </ol>
        </section>

        <section id="education">
          <h2>Education</h2>
          {EDUCATION.map((e, i) => (
            <div className="edu-line" key={i}>
              <span><b>{e.degree}</b> — {e.inst}</span>
              <span className="r">{e.years}</span>
            </div>
          ))}
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-row">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.scholar}>Google Scholar</a>
            <a href={SITE.linkedin}>LinkedIn</a>
            <a href={SITE.cv}>Curriculum vitae</a>
          </div>
        </section>

        <footer>
          <span>© 2026 {SITE.name}</span>
          <span>{SITE.location}</span>
        </footer>
      </main>
    </div>
  );
}
