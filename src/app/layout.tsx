import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://tushar-singh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tushar Singh | Full Stack Web Developer",
    template: "%s | Tushar Singh",
  },
  description:
    "Full stack web developer specializing in MERN Stack, Next.js, React, and Node.js. Building production-ready e-commerce, admin systems, and SEO-friendly websites.",
  keywords: [
    "Tushar Singh",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Web Developer Mumbai",
    "Freelance Web Developer India",
  ],
  openGraph: {
    title: "Tushar Singh | Full Stack Web Developer",
    description:
      "Full stack web developer specializing in MERN Stack, Next.js, React, and Node.js. Building production-ready e-commerce, admin systems, and SEO-friendly websites.",
    type: "website",
    url: siteUrl,
    siteName: "Tushar Singh — Full Stack Developer Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tushar Singh — Full Stack Web Developer | MERN Stack, Next.js, React, Node.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Singh | Full Stack Web Developer",
    description:
      "Full stack web developer specializing in MERN Stack, Next.js, React, and Node.js.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tushar Singh",
  jobTitle: "Full Stack Web Developer",
  url: siteUrl,
  email: "tusharsingh6171@gmail.com",
  telephone: "+918218446921",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "India",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/tushar163",
    "https://www.linkedin.com/in/tushar-singh-746985335/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MERN Stack",
    "Full Stack Web Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web Developer",
    occupationalCategory: "15-1252.00",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tushar Singh — Full Stack Developer Portfolio",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "Tushar Singh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
