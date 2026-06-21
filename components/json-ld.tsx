export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riseup.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Riseup.com",
        "url": siteUrl,
        "logo": `${siteUrl}/icon-512.png`,
        "description": "Connecting talent with job opportunities, certifications, and language resources across Europe and Africa."
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Riseup.com",
        "description": "Your Bridge to Opportunity Across Europe & Africa",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        "url": siteUrl,
        "name": "Riseup.com — Your Bridge to Opportunity in Europe & Africa",
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#organization`
        },
        "description": "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa. Riseup.com brings everything you need to thrive abroad into one platform."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
