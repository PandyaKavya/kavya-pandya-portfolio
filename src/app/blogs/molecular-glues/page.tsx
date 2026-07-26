import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Molecular Glues: The Tiny Matchmakers Rewriting the Rules of Drug Discovery — Kavya Pandya",
  description:
    "How molecular glues bring two proteins together to reshape drug discovery — from degraders like lenalidomide to natural glues such as auxin and rapamycin.",
  alternates: { canonical: SITE.url + "blogs/molecular-glues/" },
};

export default function MolecularGlues() {
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
        <p className="article-meta">Blog · July 2026</p>
        <h1 className="article-title">
          Molecular Glues: The Tiny Matchmakers Rewriting the Rules of Drug Discovery
        </h1>

        <figure className="fig-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="../../molecular-glue.gif" alt="A molecular glue bringing Protein A and Protein B together" />
          <figcaption>A molecular glue bridging two proteins, creating a new interaction surface.</figcaption>
        </figure>

        <p>
          Inside every cell, thousands of proteins move, collide and interact. Some repair DNA, others
          carry signals, and many work only when they meet the right partner. Since their dysregulation
          is often associated with diseases, proteins or their interactions are a major focus of drug
          discovery. For decades, drug discovery treated proteins mostly as individual machines: find a
          pocket, place a drug inside it and block the machine. The concept of &ldquo;Molecular
          glues&rdquo; offers a different possibility. Instead of blocking one protein on its own, they
          change who that protein binds. Like an unseen matchmaker, a tiny molecule can bring two
          proteins together and create a biological event which wasn&rsquo;t possible alone.
        </p>

        <p>
          A molecular glue is a small, usually single-part molecule that promotes or stabilizes an
          interaction between proteins. It may strengthen a weak natural interaction or create an
          entirely new one. This results in a three-member complex containing two proteins and the
          glue. Hence, this provides new avenues for drug designing, where a drug can be targeted to the
          new surface created when all three partners assemble, rather than just designing it to occupy
          an enzyme&rsquo;s active site. Based on the function, molecular glues can be classified into
          degradative glues, non-degradative interaction stabilizers and compounds that promote protein
          self-association.
        </p>

        <p>These mechanisms can be represented through a few simple schematic equations:</p>

        <ol className="mech-list">
          <li>
            <p><b>General molecular-glue mechanism:</b> The glue brings two proteins together or
              strengthens their interaction.</p>
            <p className="eq">Protein A + Glue + Protein B → Protein A–Glue–Protein B complex</p>
          </li>
          <li>
            <p><b>Non-degradative interaction stabilizer:</b> The glue stabilizes a useful interaction
              without destroying either protein.</p>
            <p className="eq">Protein A + Protein B + Glue → Stabilized protein complex → Altered or
              restored function</p>
          </li>
          <li>
            <p><b>Molecular-glue degrader:</b> The glue recruits the target to an E3 ligase, which marks
              it with ubiquitin for destruction.</p>
            <p className="eq">Target protein + Glue + E3 ligase → Target–Glue–E3 complex → Ubiquitinated
              target → Proteasomal degradation</p>
          </li>
        </ol>

        <p>
          One of the earliest and best-known examples of a molecular-glue mechanism was recognized in the
          plant hormone Auxin. Plants had already evolved and were using this strategy long before
          molecular glues became a focus of modern drug discovery. Auxin controls growth by promoting an
          interaction between the TIR1 ubiquitin-ligase receptor and Aux/IAA transcriptional repressors.
          By occupying a cavity at the interface of these proteins, auxin helps TIR1 recognize and
          capture the repressors, which are then marked for degradation. Their removal releases
          growth-related genes from repression. This natural system revealed the central principle of
          molecular glues: a small molecule can control cellular behavior not simply by switching a
          protein on or off, but by changing which proteins recognize and interact with one another.
        </p>

        <p>
          Natural products provide another chapter. Rapamycin, originally isolated from bacteria, is a
          well-known inhibitor of mTOR, a major promoter of cell growth and metabolism. On binding with
          FKBP12, mTOR gets recruited to its surface and inhibits its signaling. In this case, the glue
          doesn&rsquo;t destroy the protein, instead, it creates an inhibitory alliance. This shows
          another side of the molecular glue, where not each one of them are degraders.
        </p>

        <p>
          Out of all, the most therapeutically exciting glues may be molecular-glue degraders. As the
          name suggests, they direct the target proteins for degradation by redirecting cell&rsquo;s
          ubiquitin-proteasome system. It functions by bringing a disease-related protein in close
          proximity of E3 ubiquitin ligase, which then tags the protein with ubiquitin, flagging it for
          degradation by the proteasome. The glue does not destroy the protein directly, but it arranges the
          encounter; the cell performs the elimination. The recruited protein becomes a
          &ldquo;neosubstrate,&rdquo; one the ligase would not normally recognize. The story of
          lenalidomide shows why this mechanism became so important and has gained the attention of
          researchers. Lenalidomide, a thalidomide-related drug used in multiple myeloma, was clinically
          effective before its full mechanism was understood. Researchers later discovered that it binds
          cereblon, a substrate receptor within an E3 ubiquitin-ligase complex. Drug-bound cereblon gains
          the ability to recognize the transcription factors IKZF1 and IKZF3. These proteins are
          degraded, disrupting survival programs required by myeloma cells. A small molecule had
          effectively rewritten the ligase&rsquo;s list of acceptable substrates. Similar surprise
          emerged from indisulam, an anticancer compound whose selectivity was initially mysterious.
          Indisulam works through another ligase receptor, DCAF15, recruiting and degrading the
          RNA-splicing factor RBM39. The resulting disruption of RNA processing can suppress susceptible
          cancer cells. These are just a few examples, to name only a few, members of a rapidly expanding
          collection of natural and synthetic molecular glues.
        </p>

        <p>
          What makes this concept especially significant, in my view, is that it changes the traditional
          approach in drug discovery. Instead of just trying to find a way to block a protein, researchers
          can now ask &ldquo;can a new interaction change a protein&rsquo;s fate?&rdquo; This broadens the
          horizon, where a harmful protein might be destroyed, an overactive pathway restrained, or a
          weakened protective complex restored. This approach may open the door to targeting proteins that
          have long been considered extremely difficult to drug, including transcription factors,
          scaffolding proteins and partially disordered proteins.
        </p>

        <p>
          Recent research is trying to transform molecular-glue discovery from a largely serendipitous
          process into a more systematic one. Scientists are also exploring new E3 ligases to expand
          their use across tissues and diseases. Beyond degradation, molecular glues are being developed
          to stabilize beneficial interactions, restore mutation-disrupted complexes and alter protein
          assembly.
        </p>

        <p>
          Despite the considerable progress made in this field, translating molecular glues into
          effective therapeutics continues to pose major challenges. For degradation to occur, the
          proteins must be arranged in the correct orientation rather than simply brought into close
          proximity. Along with this precise positioning, the target protein must also contain an
          accessible lysine residue, which is required for the ubiquitin-transfer machinery to attach
          ubiquitin and initiate its destruction. This means that a molecular glue can successfully
          assemble the complex and can still fail to trigger efficient protein destruction.
        </p>

        <p>
          The cellular environment adds another layer of complexity. Beyond the structural requirements
          for degradation, molecular glues commonly face several challenges during therapeutic
          development. The required E3 ligase may be abundant in one tissue but scarce in another, causing
          the same compound to work effectively in some cells but not in others. A molecular glue may also
          recruit unintended proteins, leading to off-target effects and toxicity. Mutations in the target
          protein, the E3 ligase or the newly formed binding interface can further weaken or completely
          disrupt its activity. In addition, the compound must be able to reach the appropriate tissue and
          remain sufficiently stable to produce the intended effect. Together, these challenges continue
          to complicate the translation of molecular glues into safe and effective therapies.
        </p>

        <p>
          Molecular glues encourage us to view the cell not simply as a collection of individual drug
          targets, but as a highly interconnected network of protein interactions. Disease can emerge when
          abnormal interactions are formed, essential regulatory complexes are disrupted or harmful
          proteins escape normal quality-control mechanisms. By controlling how proteins associate,
          molecular glues offer a way to reshape these processes. Some can inhibit protein function,
          others can direct proteins for degradation, and still others may restore interactions that are
          weakened in disease. Their promise lies in this versatility: a small molecule can alter the fate
          of a protein not only by binding to it directly, but by changing how it interacts with the
          cellular machinery around it.
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
