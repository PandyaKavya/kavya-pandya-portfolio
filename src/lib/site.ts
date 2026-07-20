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
  url: "https://pandyakavya.github.io/kavya-pandya-portfolio/",
  email: "kavyaadi98@gmail.com",
  scholar: "https://scholar.google.com/citations?user=cR6thnUAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/kavya-pandya-23998118b/",
  cv: "cv.pdf", // relative on purpose: resolves under the basePath
  photo: "profile.jpg", // relative, same reason
  googleVerification: "vR0MHUqGDsFvNBkYnX5muEopmvKabsrcthb-7WDj6nI",
};

// Lead sentence at the top of the content column (supports <em> via markup in page)
export const LEAD =
  "I study how cells survive genotoxic stress — the DNA-damage response and autophagy — working at the bench and on the screen, and now bridging into computational, data-driven biology.";

export const ABOUT: string[] = [
  "I'm a molecular cancer biologist (Ph.D., 2025). My doctoral work asked how the DNA-damage-response protein MDC1 plays a non-canonical role in DNA repair through its interactions with the autophagy machinery — combining wet-lab experiments with structural and in-silico analysis.",
  "My methods span both worlds: western blotting, co-immunoprecipitation, immunocytochemistry, flow cytometry and cell-based assays alongside molecular docking, molecular-dynamics simulation, and an interest in CRISPR-based diagnostics. I'm now moving toward computational and quantitative biology.",
];

export const NEWS: { date: string; text: string }[] = [
  { date: "2025", text: "Completed my Ph.D. in Biotechnology at the Institute of Advanced Research, Gandhinagar." },
  { date: "2025", text: "Review on the DDR–autophagy cross-talk published in the Journal of Biological Chemistry." },
  { date: "2025", text: "Presented work on DDR–autophagy under oxidative stress at the AACR meeting (Cancer Research)." },
  { date: "2024", text: "Review on CRISPR-Cas molecular diagnostics published in Molecular Biotechnology." },
];

export const RESEARCH: { title: string; desc: string }[] = [
  { title: "DNA-damage response", desc: "MDC1 and the cellular response to genotoxic stress." },
  { title: "DDR–autophagy cross-talk", desc: "How the two pathways intersect under oxidative and drug-induced stress." },
  { title: "Structural & computational biology", desc: "Docking and molecular-dynamics of the MDC1–Beclin-1 interaction." },
  { title: "CRISPR-Cas diagnostics", desc: "Programmable nucleases for molecular diagnosis." },
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
    authors: "K Pandya, D Jagani, N Singh",
    year: "2024",
    title: "CRISPR-Cas systems: programmable nuclease revolutionizing the molecular diagnosis",
    venue: "Molecular Biotechnology, 66(8), 1739–1753",
    href: "https://link.springer.com/article/10.1007/s12033-023-00819-7",
    badge: "12 citations",
  },
  {
    authors: "K Pandya, N Singh",
    year: "2023",
    title: "In silico study reveals unconventional interactions between MDC1 of DDR and Beclin-1 of autophagy",
    venue: "Molecular Diversity, 27(6), 2789–2802",
    href: "https://link.springer.com/article/10.1007/s11030-022-10579-2",
  },
  {
    authors: "N Singh, K Pandya",
    year: "2025",
    title: "Decoding the DDR and autophagy cross-talk: a cellular response to genotoxic stress and its implications in cancer therapy",
    venue: "Journal of Biological Chemistry, 301(5)",
  },
  {
    authors: "KA Pandya, N Singh",
    year: "2025",
    title: "Unraveling the molecular interactions between DDR and autophagy in response to oxidative stress",
    venue: "Cancer Research, 85(8_S1), 4198",
    badge: "Conference",
  },
  {
    authors: "S Vyas, K Pandya, N Singh, R Mishra",
    year: "2025",
    title: "A turn-off fluorescent ionic liquid with carbazole fluorophore for sensing Fe²⁺ ions",
    venue: "Journal of Molecular Structure, 142732",
  },
  {
    authors: "S Rathore, R Bhatt, S Joshi, K Pandya, N Singh",
    year: "2024",
    title: "Applications and associated challenges of CRISPR-Cas technology in agriculture",
    venue: "CRISPR-Cas System in Translational Biotechnology, 265–280",
    href: "https://www.sciencedirect.com/science/article/abs/pii/B9780323918084000080",
    badge: "Book chapter",
  },
];

export const EDUCATION: { degree: string; inst: string; years: string }[] = [
  { degree: "Ph.D., Biotechnology", inst: "Institute of Advanced Research, Gandhinagar", years: "2020–2025" },
  { degree: "M.Sc., Biochemistry", inst: "Nirma University", years: "2018–2020" },
  { degree: "B.Sc., Biochemistry", inst: "St. Xavier's College, Ahmedabad", years: "2015–2018" },
];
