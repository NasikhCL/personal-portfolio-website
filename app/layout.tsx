import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nasikhcl.com"),
  title: {
    default: "Nasikh Mahamood CL — Frontend Developer",
    template: "%s | Nasikh Mahamood CL",
  },
  description:
    "Frontend Developer with ~3 years of experience building large-scale SaaS and edTech applications generating over $1M in revenue. Currently at SurveySparrow, Kerala, India.",
  keywords: [
    "Nasikh Mahamood CL",
    "Nasikh CL",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "SaaS Developer",
    "Kerala",
    "India",
    "SurveySparrow",
    "ThriveSparrow",
    "Portfolio",
  ],
  authors: [{ name: "Nasikh Mahamood CL", url: "https://nasikhcl.com" }],
  creator: "Nasikh Mahamood CL",
  openGraph: {
    title: "Nasikh Mahamood CL — Frontend Developer",
    description:
      "Frontend Developer building SaaS products that scale. ~3 years of experience. Currently at SurveySparrow.",
    url: "https://nasikhcl.com",
    siteName: "Nasikh Mahamood CL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avatar.jpeg",
        width: 400,
        height: 400,
        alt: "Nasikh Mahamood CL — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nasikh Mahamood CL — Frontend Developer",
    description: "Frontend Developer building SaaS products that scale.",
    images: ["/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://nasikhcl.com",
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
    name: "Nasikh Mahamood CL",
    alternateName: "Nasikh CL",
    url: "https://nasikhcl.com",
    image: "https://nasikhcl.com/avatar.jpeg",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer with ~3 years of experience building large-scale SaaS and edTech applications generating over $1M in revenue.",
    email: "nasikcl@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/nasikh-cl",
      "https://github.com/nasikhCL",
      "https://buymeacoffee.com/nasikhcl",
    ],
    worksFor: {
      "@type": "Organization",
      name: "SurveySparrow",
      url: "https://surveysparrow.com",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Web Accessibility",
      "Core Web Vitals",
      "SaaS Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text-primary)" }}>
        {/* Mobile nav — visible on small screens */}
        <div className="lg:hidden">
          <MobileNav />
        </div>

        {/* Desktop layout */}
        <div className="lg:mr-[260px] pt-14 lg:pt-0">
          <main className="min-h-screen">
            {children}
          </main>
        </div>

        {/* Right sidebar — desktop only */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
