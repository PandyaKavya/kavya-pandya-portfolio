import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "From Blocking Proteins to Rewiring Their Interactions — Kavya Pandya",
  description:
    "How drug discovery moved from blocking single proteins to encouraging new protein interactions — the shift in thinking that leads to molecular glues.",
  alternates: { canonical: SITE.url + "blogs/rewiring-protein-interactions/" },
};

export default function RewiringProteinInteractions() {
  return (
    <div className="page">
      {/* -------- top nav -------- */}
      <nav className="topnav">
        <Link href="/blogs/">← Blogs</Link>
        <Link href="/">Home</Link>
        <Link href="/#research">Research</Link>
        <Link href="/publications/">Publications</Link>
      </nav>

      <article className="article">
        <p className="article-meta">Blog · September 2026</p>
        <h1 className="article-title">
          From Blocking Proteins to Rewiring Their Interactions
        </h1>

        <figure className="fig-wide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="../../rewiring-interactions.gif"
            alt="Drug discovery evolving from single-protein targeting, through hard-to-drug targets, to rewiring protein interactions"
          />
          <figcaption>
            How drug discovery is evolving: from targeting single proteins, to hard-to-drug targets, to
            rewiring the interactions between proteins.
          </figcaption>
        </figure>

        <p>
          Have you ever wondered how a drug actually works once it enters the body? We usually describe
          medicines by their outcome: a painkiller reduces pain, an antibiotic clears an infection, and a
          cancer drug slows tumor growth. But those descriptions skip over the most interesting part.
          Inside the body, a drug enters an extraordinarily complex environment and somehow has to
          influence the right biological process. To understand how that happens, it helps to start with
          proteins.
        </p>

        <p>
          Proteins are molecules that carry out much of the work inside our cells. They help control
          signaling, DNA repair, metabolism, cell growth, and many other essential processes. When a
          protein becomes too active, stops working properly, or behaves abnormally, it can contribute to
          disease. That is why proteins have become such important drug targets.
        </p>

        <p>
          For much of modern drug discovery, the goal was to find a vulnerable spot on a disease-related
          protein and design a molecule that could bind there. If that binding changed the
          protein&rsquo;s activity, it could also change what was happening inside the cell. This
          strategy has led to many successful medicines and helped establish a familiar model: identify
          the protein involved in disease, find a useful binding site, and design a molecule that alters
          its activity.
        </p>

        <p>
          But not every protein cooperates. Some have no obvious pocket for a drug to bind, while others
          work mainly through interactions with other proteins rather than through a single active site.
          For years, many such targets were described as &ldquo;undruggable.&rdquo; KRAS became a classic
          example: its importance in cancer was clear, yet directly targeting it remained difficult for
          decades.
        </p>

        <p>
          Challenges like this pushed researchers to look at proteins in a different way. Inside a cell,
          proteins rarely work alone; they constantly interact with other proteins, form temporary
          complexes, move between different parts of the cell, and influence one another&rsquo;s
          activity. One protein may activate another, while a different partner may stabilize it, modify
          it, or help remove it when it is no longer needed. In other words, what a protein does often
          depends not only on the protein itself, but also on who it interacts with. The same is true in
          disease, where mutations can strengthen or weaken specific interactions and reorganize entire
          signaling networks.
        </p>

        <p>
          This realization widened the idea of what a drug target could be. Instead of focusing only on
          individual proteins, researchers began asking whether the interactions between proteins could
          also be controlled. At first, the goal was often to disrupt harmful interactions, but this
          introduced another challenge because the surfaces where proteins meet are often large and
          relatively flat rather than neat pockets that small molecules can easily occupy. In some cases,
          blocking those interactions works, but it is not always easy. This led to a more
          counterintuitive question: what if, instead of preventing two proteins from interacting, a small
          molecule could encourage them to interact?
        </p>

        <p>
          That question changes the logic of drug discovery. If a molecule can create or stabilize an
          interaction between two proteins, the resulting partnership may trigger an effect that would
          otherwise be weak, temporary, or absent altogether. One protein might alter the activity of
          another, a larger protein complex might form, or a protein could be redirected to another part
          of the cell. In some cases, one partner might even bring the other into contact with cellular
          machinery that modifies or destroys it. The drug itself does not necessarily need to perform the
          entire task; it may only need to create the right molecular encounter and allow the
          cell&rsquo;s own machinery to do the rest.
        </p>

        <p>
          This is a very different way of thinking about drug action. Instead of asking only where a drug
          can bind and what it can block, researchers can also ask what new biological event becomes
          possible because the molecule is present. Interestingly, this idea was not developed entirely
          through deliberate drug design. Scientists studying certain natural products and medicines
          discovered that some small molecules produced their effects by promoting interactions between
          proteins that would normally associate only weakly. Those observations revealed a broader
          principle: small molecules can reshape protein relationships inside cells.
        </p>

        <p>
          That principle has opened a new horizon in drug discovery, and molecular glues are one of the
          most exciting examples of it. Rather than relying only on direct inhibition, they offer a way to
          influence biology by changing who a protein interacts with and what can happen as a result of
          that new partnership. This expands the possibilities for reaching difficult targets and for
          using the cell&rsquo;s own machinery in ways that traditional drug strategies may not allow. If
          disease depends on networks of interacting proteins, perhaps medicines do not always need to
          block those networks. In some cases, they may be able to rewire them&mdash;and that is where
          the story of molecular glues begins.
        </p>

        <Link href="/blogs/" className="article-back">← Back to all blogs</Link>
      </article>

      <footer>
        <span>© 2026 {SITE.name}</span>
        <span><Link href="/">← Back to home</Link></span>
      </footer>
    </div>
  );
}
