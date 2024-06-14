import { siteMetadata } from "@/data/siteMetaData";


export default function sitemap() {
    const siteUrl = siteMetadata.siteUrl;
    const currentDate = new Date().toISOString().split("T")[0];

    const routes = [
        "",
        "about",
        "services",
        "contact",
    ].map((route) => ({
        url: `${siteUrl}/${route}`,
        lastModified: currentDate,
    }));

    return routes;
}
