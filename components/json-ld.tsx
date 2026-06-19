export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Riseup.com",
    description:
      "Discover jobs, certifications, events, language resources, and mentorship across Europe and Africa.",
    url: "https://riseup.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Free tier with core resources",
    },
    creator: {
      "@type": "Organization",
      name: "Riseup.com",
      url: "https://riseup.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
