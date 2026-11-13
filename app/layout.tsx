import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

const siteUrl = "https://www.daniotdev.com";
const title = "Daniot Mihrete – Full-stack developer, backend and cloud";
const description =
  "Daniot Mihrete is a full-stack developer focused on backend systems, cloud, and reliable user experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Daniot Mihrete",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description:
      "Backend systems, cloud, and reliable user experiences. Based in Addis Ababa.",
    url: "/",
    siteName: "Daniot Mihrete",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

// Structured data so search engines know the site's name, its owner, and
// which logo and profiles belong to him.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Daniot Mihrete",
      alternateName: "daniotdev",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Daniot Mihrete Woldetinsae",
      alternateName: "Daniot Mihrete",
      url: siteUrl,
      image: `${siteUrl}/icon1.png`,
      jobTitle: "Full-stack developer",
      worksFor: { "@type": "Organization", name: "MMCY" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Addis Ababa University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      sameAs: [
        "https://github.com/BondedIncome",
        "https://www.linkedin.com/in/daniot-woldetinsae-339286240",
      ],
    },
  ],
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
