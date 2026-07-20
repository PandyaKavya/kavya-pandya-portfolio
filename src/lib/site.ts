// ---------------------------------------------------------------------------
// Single source of truth for the site's content.
// Edit this file to update text, links, publications, etc. — no JSX required.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Kavya Pandya",
  role: "Biotechnology Researcher, Ph.D.",
  location: "Gandhinagar, India",
  // shown under the name in the sidebar
  degree: "Ph.D. Biotechnology",
  expertise: "Cell and Molecular Biology",
  institute: "Institute of Advanced Research, India",
  url: "https://pandyakavya.github.io/kavya-pandya-portfolio/",
  email: "kavyaadi98@gmail.com",
  scholar: "https://scholar.google.com/citations?user=cR6thnUAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/kavya-pandya-23998118b/",
  cv: "cv.pdf", // relative on purpose: resolves under the basePath
  photo: "profile.jpg", // relative, same reason
  googleVerification: "vR0MHUqGDsFvNBkYnX5muEopmvKabsrcthb-7WDj6nI",
};

// Intro shown in the hero (right column)
export const LEAD =
  "Hi, I'm Kavya! I explore how cancer cells rewire their signaling and DNA repair pathways to survive chemotherapy, and how these adaptations can be exposed as therapeutic vulnerabilities. Let's connect and talk about cancer biology, treatment resistance, and new strategies for more effective therapies.";

// Research-interest chips shown under the intro
export const INTERESTS: string[] = [
  "Genome stability",
  "Autophagy",
  "Cellular stress response",
  "PROTACs",
  "Synthetic vulnerabilities in cancer",
  "Functional genomics & gene regulation",
];

export const ABOUT: string[] = [
  "I'm a molecular cancer biologist with a Ph.D. in Biotechnology. My doctoral research explored how MDC1, a key DNA-repair protein, interacts with the autophagy machinery to help cancer cells survive oxidative and chemotherapeutic stress. By combining cell-based experiments with structural and computational analyses, I uncovered a non-canonical link between DNA repair and autophagy.",
  "Understanding this connection is important because cancer cells often evade treatment by adapting their stress-response pathways. My goal is to identify these survival mechanisms and uncover vulnerabilities that could lead to more effective therapies. I am now expanding my work toward computational and quantitative biology.",
];

export const NEWS: { date: string; text: string }[] = [
  { date: "2025", text: "Completed my Ph.D. in Biotechnology at the Institute of Advanced Research, Gandhinagar." },
  { date: "2025", text: "Review on the DDR–autophagy cross-talk published in the Journal of Biological Chemistry." },
  { date: "2025", text: "Presented work on DDR–autophagy under oxidative stress at the AACR meeting (Cancer Research)." },
  { date: "2024", text: "Review on CRISPR-Cas molecular diagnostics published in Molecular Biotechnology." },
];

export const METHODS = {
  experimental: [
    "Western blotting", "Immunocytochemistry", "Co-immunoprecipitation", "Flow cytometry",
    "Cell culture", "qRT-PCR", "SDS-PAGE", "Cell-based assays",
  ],
  computational: [
    "Molecular docking", "Molecular-dynamics simulation", "Protein–protein interaction analysis", "Bioinformatics",
  ],
};

// authors: her name variants ("K Pandya", "KA Pandya", "Pandya, K.") are auto-bolded on render.
export const PUBLICATIONS: {
  authors: string;
  year: string;
  title: string;
  venue: string;
  href?: string;
  badge?: string;
}[] = [
  {
    authors: "K Pandya, N Singh",
    year: "2026",
    title: "", // TODO: exact title pending — journal blocks automated lookup; confirm with Kavya
    venue: "European Journal of Cell Biology",
    href: "https://www.sciencedirect.com/science/article/pii/S0171933526000117",
    badge: "Research article",
  },
  {
    authors: "KA Pandya, N Singh",
    year: "2026",
    title: "", // TODO: exact title pending — AACR abstract, confirm with Kavya
    venue: "Cancer Research, 86(7 Suppl), 1739 — AACR Annual Meeting",
    href: "https://aacrjournals.org/cancerres/article/86/7_Supplement/1739/781190",
    badge: "Abstract",
  },
  {
    authors: "N Singh, K Pandya",
    year: "2025",
    title: "Decoding the DDR and autophagy cross-talk: a cellular response to genotoxic stress and its implications in cancer therapy",
    venue: "Journal of Biological Chemistry, 301(5)",
    href: "https://www.jbc.org/article/S0021-9258(25)00475-2/fulltext",
  },
  {
    authors: "KA Pandya, N Singh",
    year: "2025",
    title: "Unraveling the molecular interactions between DDR and autophagy in response to oxidative stress",
    venue: "Cancer Research, 85(8_S1), 4198",
    href: "https://aacrjournals.org/cancerres/article/85/8_Supplement_1/4198/759194",
    badge: "Abstract",
  },
  {
    authors: "K Pandya, N Singh",
    year: "2023",
    title: "In silico study reveals unconventional interactions between MDC1 of DDR and Beclin-1 of autophagy",
    venue: "Molecular Diversity, 27(6), 2789–2802",
    href: "https://link.springer.com/article/10.1007/s11030-022-10579-2",
  },
];

export const EDUCATION: { degree: string; inst: string; years: string }[] = [
  { degree: "Ph.D., Biotechnology", inst: "Institute of Advanced Research, Gandhinagar", years: "2020–2025" },
  { degree: "M.Sc., Biochemistry", inst: "Nirma University", years: "2018–2020" },
  { degree: "B.Sc., Biochemistry", inst: "St. Xavier's College, Ahmedabad", years: "2015–2018" },
];
