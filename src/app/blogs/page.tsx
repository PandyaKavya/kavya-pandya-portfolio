import type { Metadata } from "next";
import Link from "next/link";
import { SITE, BLOGS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blogs — Kavya Pandya",
  description:
    "Writing by Kavya Pandya on cancer biology, the DNA-damage response, autophagy, and bridging wet-lab science with data.",
  alternates: { canonical: SITE.url + "blogs/" },
};

export default function Blogs() {
  return (
    <div className="page">
      {/* -------- top nav -------- */}
      <nav className="topnav">
        <Link href="/">← Kavya Pandya</Link>
        <Link href="/#research">Research</Link>
        <Link href="/publications/">Publications</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>

      <header className="page-head">
        <h1>Blogs</h1>
        <p className="sec-lead">
          Notes and essays on cancer biology — the DNA-damage response and autophagy — and on bridging
          wet-lab science with data.
        </p>
      </header>

      {BLOGS.length > 0 ? (
        <ol className="posts">
          {BLOGS.map((b, i) => (
            <li className="post" key={i}>
              <div className="post-date">{b.date}</div>
              <div className="post-body">
                <h2 className="post-title">
                  {b.href
                    ? <a href={b.href} target="_blank" rel="noopener noreferrer">{b.title}</a>
                    : b.title}
                </h2>
                {b.summary ? <p className="post-summary">{b.summary}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="empty">
          <p>Writing is on the way — new posts will show up here soon.</p>
        </div>
      )}

      <footer>
        <span>© 2026 {SITE.name}</span>
        <span><Link href="/">← Back to home</Link></span>
      </footer>
    </div>
  );
}
