import { site } from "@/lib/site-data";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.name,
    alternateName: site.legalName,
    url: site.baseUrl,
    description: site.description,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Brgy. Tubod",
      addressLocality: "San Juan",
      addressRegion: "Siquijor",
      addressCountry: "PH",
    },
    sameAs: [site.contact.instagram, site.contact.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
