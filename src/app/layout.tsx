import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MotionController } from "@/components/MotionController";
import { AmbientSilkBackground } from "@/components/AmbientSilkBackground";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Ghazariz — Technical Product Manager & Product Designer",
    template: "%s — Ghazariz"
  },
  description: siteConfig.description,
  keywords: [
    "Technical Product Manager",
    "Product Manager Indonesia",
    "Product Designer Indonesia",
    "Product and Technology Lead",
    "UX Product Strategy"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Ghazariz — Systems Beyond Screens",
    description: siteConfig.description,
    siteName: "Ghazariz Portfolio",
    images: [{ url: "/images/social/og-home.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghazariz — Systems Beyond Screens",
    description: siteConfig.description,
    images: ["/images/social/og-home.png"]
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: "Technical Product Manager and Product Designer"
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AmbientSilkBackground />
        <SmoothScroll />
        <MotionController />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
