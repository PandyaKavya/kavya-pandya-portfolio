import { SITE, PUBLICATIONS } from "@/lib/site";

/** Render an author string, bolding Kavya's own name ("… Pandya"). */
export function Authors({ value }: { value: string }) {
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

/** External-link glyph for the card links (uses currentColor). */
export function ExtIcon() {
  return (
    <svg className="exti" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export function PubCard({ p }: { p: (typeof PUBLICATIONS)[number] }) {
  const hasTitle = p.title.trim().length > 0;
  return (
    <article className="card">
      <div className="card-top">
        <span className="card-badge">{p.badge}</span>
        <span className="card-year">{p.year}</span>
      </div>
      {hasTitle ? (
        <h3 className="card-title">
          {p.href
            ? <a href={p.href} target="_blank" rel="noopener noreferrer">{p.title}</a>
            : p.title}
        </h3>
      ) : (
        <h3 className="card-title card-title-pending">Title to be added</h3>
      )}
      <p className="card-authors"><Authors value={p.authors} /></p>
      <div className="card-links">
        {p.href ? (
          <a className="card-link" href={p.href} target="_blank" rel="noopener noreferrer">
            <ExtIcon /> Read paper
          </a>
        ) : <span />}
        <a className="card-link accent" href={SITE.scholar} target="_blank" rel="noopener noreferrer">
          Google Scholar →
        </a>
      </div>
    </article>
  );
}
