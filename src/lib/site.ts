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

// Publications shown as cards. `badge` = short venue/type label (monospace pill);
// `desc` and `topics` were drafted from each title — edit freely. An empty title
// renders a "title to be added" placeholder (the two 2026 papers, titles pending).
// Names ("K Pandya", "KA Pandya") are auto-bolded on render.
export const PUBLICATIONS: {
  authors: string;
  year: string;
  title: string;
  badge: string;
  desc: string;
  topics: string[];
  href?: string;
}[] = [
  {
    authors: "K Pandya, N Singh",
    year: "2026",
    title: "",
    badge: "European Journal of Cell Biology",
    desc: "Cell-based study of how the DNA-repair protein MDC1 engages the autophagy machinery to help cancer cells survive oxidative and chemotherapeutic stress.",
    topics: ["DNA-damage response", "Autophagy", "MDC1", "Cancer cell survival"],
    href: "https://www.sciencedirect.com/science/article/pii/S0171933526000117",
  },
  {
    authors: "KA Pandya, N Singh",
    year: "2026",
    title: "",
    badge: "Cancer Research · AACR 2026",
    desc: "Conference abstract on the DDR–autophagy cross-talk as a survival mechanism in cancer cells.",
    topics: ["DDR", "Autophagy", "Cancer", "Conference"],
    href: "https://aacrjournals.org/cancerres/article/86/7_Supplement/1739/781190",
  },
  {
    authors: "N Singh, K Pandya",
    year: "2025",
    title: "Decoding the DDR and autophagy cross-talk: a cellular response to genotoxic stress and its implications in cancer therapy",
    badge: "Journal of Biological Chemistry",
    desc: "A review mapping how the DNA-damage response and autophagy intersect under genotoxic stress, and what that means for cancer therapy.",
    topics: ["DDR", "Autophagy", "Cancer therapy", "Review"],
    href: "https://www.jbc.org/article/S0021-9258(25)00475-2/fulltext",
  },
  {
    authors: "KA Pandya, N Singh",
    year: "2025",
    title: "Unraveling the molecular interactions between DDR and autophagy in response to oxidative stress",
    badge: "Cancer Research · AACR 2025",
    desc: "Conference work dissecting the molecular interactions between the DNA-damage response and autophagy triggered by oxidative stress.",
    topics: ["DDR", "Autophagy", "Oxidative stress", "Conference"],
    href: "https://aacrjournals.org/cancerres/article/85/8_Supplement_1/4198/759194",
  },
  {
    authors: "S Vyas, K Pandya, N Singh, R Mishra",
    year: "2025",
    title: "A turn-off fluorescent ionic liquid with carbazole fluorophore for sensing Fe²⁺ ions",
    badge: "Journal of Molecular Structure",
    desc: "A carbazole-based fluorescent ionic liquid that works as a turn-off sensor for Fe²⁺ ions.",
    topics: ["Fluorescent sensing", "Ionic liquids", "Fe²⁺ detection"],
  },
  {
    authors: "K Pandya, D Jagani, N Singh",
    year: "2024",
    title: "CRISPR-Cas systems: programmable nuclease revolutionizing the molecular diagnosis",
    badge: "Molecular Biotechnology",
    desc: "A review of how programmable CRISPR-Cas nucleases are transforming molecular diagnostics.",
    topics: ["CRISPR-Cas", "Molecular diagnostics", "Review"],
    href: "https://link.springer.com/article/10.1007/s12033-023-00819-7",
  },
  {
    authors: "S Rathore, R Bhatt, S Joshi, K Pandya, N Singh",
    year: "2024",
    title: "Applications and associated challenges of CRISPR-Cas technology in agriculture",
    badge: "Book chapter · Elsevier",
    desc: "A book chapter reviewing the applications and challenges of CRISPR-Cas technology in agriculture.",
    topics: ["CRISPR-Cas", "Agriculture", "Book chapter"],
    href: "https://www.sciencedirect.com/science/article/abs/pii/B9780323918084000080",
  },
  {
    authors: "K Pandya, N Singh",
    year: "2023",
    title: "In silico study reveals unconventional interactions between MDC1 of DDR and Beclin-1 of autophagy",
    badge: "Molecular Diversity",
    desc: "Computational docking and molecular-dynamics predicting a non-canonical MDC1–Beclin-1 interaction that links DNA repair and autophagy.",
    topics: ["In silico", "Molecular docking", "MDC1", "Beclin-1"],
    href: "https://link.springer.com/article/10.1007/s11030-022-10579-2",
  },
];

export const EDUCATION: { degree: string; inst: string; years: string }[] = [
  { degree: "Ph.D., Biotechnology", inst: "Institute of Advanced Research, Gandhinagar", years: "2020–2025" },
  { degree: "M.Sc., Biochemistry", inst: "Nirma University", years: "2018–2020" },
  { degree: "B.Sc., Biochemistry", inst: "St. Xavier's College, Ahmedabad", years: "2015–2018" },
];
