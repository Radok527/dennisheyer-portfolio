import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dennis Heyer – Backend Engineer | Portfolio",
  description:
    "Backend Engineer mit Fokus auf skalierbare Systeme, APIs und AI-gestützte Anwendungen. Portfolio und Projekte von Dennis Heyer.",
  keywords: [
    "Backend Engineer",
    "APIs",
    "skalierbare Systeme",
    "AI",
    "Docker",
    "Deployment",
  ],
  alternates: {
    canonical: "https://dennisheyer.dev",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dennis Heyer – Backend Engineer | Portfolio",
    description:
      "Backend Engineer mit Fokus auf skalierbare Systeme, APIs und AI-gestützte Anwendungen. Portfolio und Projekte von Dennis Heyer.",
    url: "https://dennisheyer.dev",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://dennisheyer.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dennis Heyer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Heyer – Backend Engineer | Portfolio",
    description:
      "Backend Engineer mit Fokus auf skalierbare Systeme, APIs und AI-gestützte Anwendungen. Portfolio und Projekte von Dennis Heyer.",
    images: ["https://dennisheyer.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dennis Heyer",
    url: "https://dennisheyer.dev",
    jobTitle: "Backend Engineer",
    sameAs: [
      "https://github.com/Radok527",
      "https://www.linkedin.com/in/dennis-heyer-4a92a6332",
    ],
    knowsAbout: ["Backend Development", "APIs", "AI", "Docker"],
  };

  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
