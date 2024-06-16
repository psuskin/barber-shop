import Footer from "@/components/Shared/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { siteMetadata } from "@/data/siteMetaData";
import Head from "next/head";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
        width: 1200,
        height: 630,
        alt: "Hannis Friseursalon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    image: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
  },
};

export default function RootLayout({ children }) {
  const ogImage = metadata.openGraph.images && metadata.openGraph.images[0];
  
  return (
    <html lang="de">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {ogImage && (
          <>
            <meta property="og:image" content={ogImage.url} />
            <meta property="og:image:width" content={ogImage.width} />
            <meta property="og:image:height" content={ogImage.height} />
            <meta property="og:image:alt" content={ogImage.alt} />
          </>
        )}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
