import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
  description:
    "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa. Riseup.com brings everything you need to thrive abroad into one platform.",
  keywords: [
    "jobs in Europe",
    "Africa opportunities",
    "career abroad",
    "certifications",
    "mentorship",
    "language resources",
    "diaspora",
    "work abroad",
  ],
  authors: [{ name: "Riseup.com" }],
  openGraph: {
    title: "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
    description:
      "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa.",
    type: "website",
    locale: "en_US",
    siteName: "Riseup.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
    description:
      "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
