import { Inter, Montserrat } from "next/font/google";
import { Suspense } from "react";
import SiteHeader from "./components/SiteHeader";
import { siteContent } from "@/graphql/siteData";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const siteTitle = `${siteContent.site.name.en} | Photography`;
const siteShareImage = siteContent.site.shareImage;

export const metadata = {
  metadataBase: new URL(siteContent.site.url),
  title: {
    default: siteTitle,
    template: `%s | ${siteContent.site.name.en}`,
  },
  description: siteContent.site.intro.en,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteContent.site.intro.en,
    type: "website",
    url: "/",
    siteName: siteContent.site.name.en,
    images: [siteShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteContent.site.intro.en,
    images: [
      {
        url: siteShareImage.url,
        alt: siteShareImage.alt,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Suspense>
          <SiteHeader />
        </Suspense>
        {children}
        <footer className="site-footer">
          <div>
            <span>{siteContent.site.footer}</span>
            <span>{siteContent.site.location.en}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
