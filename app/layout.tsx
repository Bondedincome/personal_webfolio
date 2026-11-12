import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniot Mihrete – Full-stack developer, backend and cloud",
  description:
    "Daniot Mihrete is a full-stack developer focused on backend systems, cloud, and reliable user experiences.",
  openGraph: {
    title: "Daniot Mihrete – Full-stack developer, backend and cloud",
    description:
      "Backend systems, cloud, and reliable user experiences. Based in Addis Ababa.",
    type: "website",
  },
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
      <body>{children}</body>
    </html>
  );
}
