/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ger4pol.site",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  additionalPaths: async () => [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/kursy", changefreq: "weekly", priority: 0.9 },
    { loc: "/cennik", changefreq: "weekly", priority: 0.8 },
    { loc: "/o-nas", changefreq: "monthly", priority: 0.6 },
    { loc: "/kontakt", changefreq: "monthly", priority: 0.7 },
    { loc: "/polityka-prywatnosci", changefreq: "yearly", priority: 0.3 },
    { loc: "/regulamin", changefreq: "yearly", priority: 0.3 },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
    ],
    additionalSitemaps: ["https://ger4pol.site/sitemap.xml"],
  },
};
