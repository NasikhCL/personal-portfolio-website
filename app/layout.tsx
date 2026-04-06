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
  title: "Nasikh Mahamood CL — Frontend Developer",
  description:
    "Frontend Developer with ~3 years of experience building large-scale SaaS and edTech applications. Currently at SurveySparrow.",
  keywords: ["Frontend Developer", "React", "TypeScript", "Next.js", "Portfolio"],
  openGraph: {
    title: "Nasikh Mahamood CL — Frontend Developer",
    description:
      "Frontend Developer building SaaS products that scale. Currently at SurveySparrow.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} dark`}
    >
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
