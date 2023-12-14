export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    // sitemap: "https://acme.com/sitemap.xml",
  };
}
