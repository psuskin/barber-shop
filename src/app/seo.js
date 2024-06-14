import { siteMetadata } from "@/data/siteMetaData";

export function generatePageMetadata({ title, description, ...rest }) {
    return {
        title,
        openGraph: {
            title: `${title} | ${siteMetadata.title}`,
            description: description || siteMetadata.description,
            url: siteMetadata.siteUrl,
            siteName: siteMetadata.title,
            locale: "en_US",
            type: "website",
        },
        twitter: {
            title: `${title} | ${siteMetadata.title}`,
            card: "summary_large_image",
        },
        ...rest,
    };
}