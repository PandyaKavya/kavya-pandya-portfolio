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
  "Hi, I'm Kavya! I study how cancer cells rewire signaling pathways to survive chemotherapy, with the goal of uncovering new therapeutic vulnerabilities. If this interests you, let's connect.";

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
  "Understanding this connection is important because cancer cells often evade treatment by adapting their stress-response pathways. My goal is to identify these survival mechanisms and uncover vulnerabilities that could lead to more effective therapies.",
];

// Publications shown as cards. `badge` = short venue/type label (monospace pill).
// `research: true` marks papers from Kavya's own doctoral study — those appear in
// the "Research" section; every entry appears in the full "Publications" list.
// Names ("K Pandya", "KA Pandya") are auto-bolded on render.
export const PUBLICATIONS: {
  authors: string;
  year: string;
  title: string;
  badge: string;
  href?: string;
  research?: boolean;
}[] = [
  {
    authors: "K Pandya, N Singh",
    year: "2026",
    title: "MDC1 promotes nuclear localization of Beclin-1 and supports its role in ATM pathway in response to oxidative stress",
    badge: "European Journal of Cell Biology",
    href: "https://www.sciencedirect.com/science/article/pii/S0171933526000117",
    research: true,
  },
  {
    authors: "K Pandya, N Singh",
    year: "2026",
    title: "Abstract 1739: Deciphering the molecular links between DNA damage response and autophagy in cancer: Implications for chemotherapy resistance",
    badge: "Cancer Research · AACR 2026",
    href: "https://aacrjournals.org/cancerres/article/86/7_Supplement/1739/781190",
    research: true,
  },
  {
    authors: "N Singh, K Pandya",
    year: "2025",
    title: "Decoding the DDR and autophagy cross-talk: a cellular response to genotoxic stress and its implications in cancer therapy",
    badge: "Journal of Biological Chemistry",
    href: "https://www.jbc.org/article/S0021-9258(25)00475-2/fulltext",
    research: true,
  },
  {
    authors: "K Pandya, N Singh",
    year: "2025",
    title: "Unraveling the molecular interactions between DDR and autophagy in response to oxidative stress",
    badge: "Cancer Research · AACR 2025",
    href: "https://aacrjournals.org/cancerres/article/85/8_Supplement_1/4198/759194",
    research: true,
  },
  {
    authors: "S Vyas, K Pandya, N Singh, R Mishra",
    year: "2025",
    title: "A turn-off fluorescent ionic liquid with carbazole fluorophore for sensing Fe²⁺ ions",
    badge: "Journal of Molecular Structure",
    href: "https://doi.org/10.1016/j.molstruc.2025.142732",
  },
  {
    authors: "K Pandya, D Jagani, N Singh",
    year: "2024",
    title: "CRISPR-Cas systems: programmable nuclease revolutionizing the molecular diagnosis",
    badge: "Molecular Biotechnology",
    href: "https://link.springer.com/article/10.1007/s12033-023-00819-7",
  },
  {
    authors: "S Rathore, R Bhatt, S Joshi, K Pandya, N Singh",
    year: "2024",
    title: "Applications and associated challenges of CRISPR-Cas technology in agriculture",
    badge: "Book chapter · Elsevier",
    href: "https://www.sciencedirect.com/science/article/abs/pii/B9780323918084000080",
  },
  {
    authors: "K Pandya, N Singh",
    year: "2023",
    title: "In silico study reveals unconventional interactions between MDC1 of DDR and Beclin-1 of autophagy",
    badge: "Molecular Diversity",
    href: "https://link.springer.com/article/10.1007/s11030-022-10579-2",
    research: true,
  },
];

// Shown as a horizontal timeline (oldest → newest); `grad` is the graduation year.
export const EDUCATION: { inst: string; degree: string; grad: string; current?: boolean }[] = [
  { inst: "St. Xavier's College", degree: "B.Sc., Biochemistry", grad: "2018" },
  { inst: "Nirma University", degree: "M.Sc., Biochemistry", grad: "2020" },
  { inst: "Institute of Advanced Research", degree: "Ph.D., Biotechnology", grad: "2026", current: true },
];
