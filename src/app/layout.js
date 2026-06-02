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

export const metadata = {
  metadataBase: new URL(siteContent.site.url),
  title: {
    default: `${siteContent.site.name.en} | Photography`,
    template: `%s | ${siteContent.site.name.en}`,
  },
  description: siteContent.site.intro.en,
  openGraph: {
    title: `${siteContent.site.name.en} | Photography`,
    description: siteContent.site.intro.en,
    type: "website",
    url: "/",
    siteName: siteContent.site.name.en,
    images: [siteContent.projects[0].cover],
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
