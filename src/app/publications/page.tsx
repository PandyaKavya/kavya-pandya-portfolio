import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PUBLICATIONS } from "@/lib/site";
import { PubCard } from "@/components/PubCard";

export const metadata: Metadata = {
  title: "Publications — Kavya Pandya",
  description:
    "Complete list of Kavya Pandya's peer-reviewed papers, reviews, conference abstracts, and collaborations in cancer biology.",
  alternates: { canonical: SITE.url + "publications/" },
};

export default function Publications() {
  return (
    <div className="page">
      {/* -------- top nav -------- */}
      <nav className="topnav">
        <Link href="/">← Kavya Pandya</Link>
        <Link href="/#research">Research</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>

      <header className="page-head">
        <h1>Publications</h1>
        <p className="sec-lead">
          Every peer-reviewed paper, review, conference abstract, and collaboration.{" "}
          <a href={SITE.scholar} target="_blank" rel="noopener noreferrer">View all on Google Scholar →</a>
        </p>
      </header>

      <div className="cards">
        {PUBLICATIONS.map((p, i) => <PubCard key={i} p={p} />)}
      </div>

      <footer>
        <span>© 2026 {SITE.name}</span>
        <span><Link href="/">← Back to home</Link></span>
      </footer>
    </div>
  );
}
