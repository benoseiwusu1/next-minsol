/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.minsolltd.com", // Make sure this is your correct website URL
  generateRobotsTxt: true, // Generate a robots.txt file
  sitemapSize: 5000, // Max number of URLs per sitemap file
  exclude: ["/admin", "/dashboard"], // Exclude private pages if needed
  changefreq: "daily", // Tell search engines how often content updates
  priority: 0.7, // Default priority of pages
};
