/* eslint-disable import/no-anonymous-default-export */
export const siteMetadata = {
    title: "Hannis Friseursalon",
    siteUrl: "https://barber-shop-rho-eight.vercel.app",
    socialBanner: "/Images/og.jpg",
    description:
        "Hannis-Hamburg bietet eine breite Palette professioneller Schönheitsdienstleistungen, darunter Haarschnitte, Haarspe, medizinische Fußpflege, Kosmetik und ästhetische Behandlungen. Unser engagiertes Team sorgt dafür, dass Sie die beste Pflege und ein entspannendes Erlebnis erhalten.",
    keywords: [
        "Hannis-Hamburg",
        "Schönheitssalon",
        "Friseursalon",
        "Nagelstudio",
        "Spa",
        "Schönheitsdienstleistungen",
        "Haarpflege",
        "Hautpflege",
        "Maniküre",
        "Pediküre",
    ],
    social: {
        email: "info@hannis-hamburg.com",
        twitter: "https://twitter.com/hannis_hamburg",
        instagram: "https://www.instagram.com/hannis_hamburg",
        facebook: "https://www.facebook.com/hannis.hamburg",
    },
};

// Schema-Markup-Beispiel für verbessertes SEO
export const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hannis Friseursalon",
    url: "https://barber-shop-rho-eight.vercel.app/",
    sameAs: [
        "https://twitter.com/hannis_hamburg",
        "https://www.linkedin.com/company/hannis-hamburg",
        "https://www.instagram.com/hannis_hamburg",
        "https://www.facebook.com/hannis.hamburg",
    ],
    description:
        "Hannis-Hamburg bietet eine breite Palette professioneller Schönheitsdienstleistungen, darunter Haarschnitte, Haarspe, medizinische Fußpflege, Kosmetik und ästhetische Behandlungen. Unser engagiertes Team sorgt dafür, dass Sie die beste Pflege und ein entspannendes Erlebnis erhalten.",
    email: "info@hannis-hamburg.com",
    image: "https://barber-shop-rho-eight.vercel.app/images/og.jpg",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Schönheitsweg 123",
        addressLocality: "Hamburg",
        addressRegion: "HH",
        postalCode: "20095",
        addressCountry: "DE",
    },
    telephone: "+494012345678",
    openingHours: [
        "Mo,Di,Mi,Do,Fr 09:00-18:00",
        "Sa 09:00-14:00"
    ],
    geo: {
        "@type": "GeoCoordinates",
        latitude: "53.551086",
        longitude: "9.993682",
    },
    priceRange: "$$",
};

export default { siteMetadata, schemaMarkup };
