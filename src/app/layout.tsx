import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kavya Pandya — Biotechnology Researcher",
  description:
    "Kavya Pandya, Ph.D. — molecular cancer biologist studying the DNA-damage response and autophagy, bridging wet-lab biology and computational discovery.",
  keywords: [
    "Kavya Pandya", "Biotechnology", "Cancer Biology", "DNA damage response", "Autophagy",
    "MDC1", "Molecular Biology", "Computational Biology", "Bioinformatics",
    "Molecular Dynamics", "CRISPR-Cas", "Research Scientist",
  ],
  authors: [{ name: "Kavya Pandya" }],
  creator: "Kavya Pandya",
  metadataBase: new URL("https://pandyakavya.github.io"),
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: "Kavya Pandya — Biotechnology Researcher",
    description:
      "Molecular cancer biologist (Ph.D.) working at the interface of wet-lab experimentation and computational discovery.",
    siteName: "Kavya Pandya",
  },
  verification: { google: SITE.googleVerification },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kavya Pandya",
              jobTitle: "Biotechnology Researcher",
              description:
                "Ph.D. in Biotechnology specializing in the DNA-damage response, autophagy, and computational structural biology.",
              url: SITE.url,
              image: SITE.url + "profile.jpg",
              sameAs: [SITE.scholar, SITE.linkedin],
              alumniOf: [
                { "@type": "EducationalOrganization", name: "Institute of Advanced Research, Gandhinagar" },
                { "@type": "EducationalOrganization", name: "Nirma University" },
                { "@type": "EducationalOrganization", name: "St. Xavier's College, Ahmedabad" },
              ],
              knowsAbout: [
                "Cancer Biology", "DNA Damage Response", "Autophagy",
                "Molecular Biology", "Molecular Dynamics", "CRISPR-Cas Systems", "Bioinformatics",
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "Ph.D. in Biotechnology",
                credentialCategory: "degree",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
