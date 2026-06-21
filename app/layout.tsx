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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riseup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
    template: "%s | Riseup.com",
  },
  description:
    "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa. Riseup.com brings everything you need to thrive abroad into one platform.",
  keywords: [
    "jobs in europe",
    "jobs for africans in europe",
    "career opportunities europe",
    "work abroad opportunities",
    "europe relocation guide",
    "certifications in europe",
    "language learning europe",
    "career growth europe",
    "job seekers europe",
    "internships europe",
    "professional development europe",
    "estonia jobs",
    "finland jobs",
    "germany jobs",
    "netherlands jobs",
    "sweden jobs",
    "Nigerians In Europe Seeking for jobs",
    "Africans in Europe Seeking for jobs and developments and certifications",
    "Africans and other migrants in Europe seeking for Jobs and ways to learn a new and the local language",
    "Migrants in Europe looking to learn a new language",
    "Job seekers in Europe, Estonia, looking to learn the local language",
    "Russian seeking for a new job"
  ],
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
    }
  },
  authors: [{ name: "Riseup.com" }],
  openGraph: {
    title: "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
    description:
      "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa. Riseup.com brings everything you need to thrive abroad into one platform.",
    type: "website",
    locale: "en_US",
    siteName: "Riseup.com",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
    description:
      "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa. Riseup.com brings everything you need to thrive abroad into one platform.",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/icon-192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/icon-512.png',
      },
    ],
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
