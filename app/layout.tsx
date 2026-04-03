import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/site-layout";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} | Freediving in Siquijor`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Freediving in Siquijor`,
    description: site.description,
    url: site.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
