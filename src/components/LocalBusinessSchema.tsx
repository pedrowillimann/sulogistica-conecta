export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "L-Prosp Comércio e Transporte",
    description: "Transporte rodoviário e logística agroindustrial no Sul do Brasil. Fretes para SC, RS e PR.",
    url: "https://id-preview--ea8d8547-ecce-4591-97c4-07ebffb13aa7.lovable.app",
    telephone: "+5549932463681",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SC-452, KM 39 - LIBERATA",
      addressLocality: "Fraiburgo",
      addressRegion: "SC",
      postalCode: "89580-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-27.028",
      longitude: "-50.92",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "R$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "-27.028",
        longitude: "-50.92",
      },
      geoRadius: "500 km",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
