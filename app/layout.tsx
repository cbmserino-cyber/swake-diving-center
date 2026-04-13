import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/site-layout";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Swake Freedivers Siquijor",
    template: "%s | Swake Freedivers Siquijor",
  },
  description: site.description,
  keywords: [
    "freediving Siquijor",
    "freediving Philippines",
    "Siquijor freediving",
    "intro to freediving Siquijor",
    "line training Siquijor",
    "fundive Siquijor",
    "local freedive shop Siquijor",
    "local freediving center Siquijor",  
    "guided fundive Siquijor",
    "freedive Siquijor",
    "discover freediving Siquijor",
    "freedive certification",
    "Molchanovs certification Siquijor",
    "freediving certification Siquijor",  
    "learn freediving Siquijor",
    "local freediving Siquijor",
    "local freediver Siquijor",  
    ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.baseUrl,
    siteName: site.name,
    title: "Swake Freedivers Siquijor",
    description: site.description,
    locale: "en_PH",
    images: [
      {
        url: "/gallery/fundive-1.JPG",
        width: 1200,
        height: 630,
        alt: "Swake Freedivers Siquijor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swake Freedivers Siquijor",
    description: site.description,
    images: ["/gallery/fundive-1.JPG"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
