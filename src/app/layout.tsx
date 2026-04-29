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

export const metadata: Metadata = {
  metadataBase: new URL("https://tushar-singh.dev"),
  title: {
    default: "Tushar Singh | Full Stack Web Developer",
    template: "%s | Tushar Singh",
  },
  description:
    "Portfolio of Tushar Singh, a MERN stack full stack developer building production-ready e-commerce platforms, admin systems, CMS workflows, and SEO-friendly websites.",
  keywords: [
    "Tushar Singh",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
  ],
  openGraph: {
    title: "Tushar Singh | Full Stack Web Developer",
    description:
      "Production-ready Next.js, React, Node.js, admin systems, e-commerce platforms, and SEO-friendly websites.",
    type: "website",
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
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
