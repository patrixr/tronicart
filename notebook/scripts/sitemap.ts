import { readdirSync, createWriteStream, existsSync, writeFileSync } from "fs"
import { simpleSitemapAndIndex, EnumChangefreq } from "sitemap"
import config from "../observablehq.config"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const robotsPath = resolve(__dirname, "../dist/robots.txt")
const distPath = resolve(__dirname, "../dist")
const { pages } = config

/**
 * Finds and returns an array of sitemap files in the dist directory.
 *
 */
function findSitemapFiles(): string[] {
  const files = readdirSync(distPath)
  return files.filter(
    (file) => file.startsWith("sitemap") && file.endsWith(".xml"),
  )
}

/**
 * Generates a sitemap for the website.
 */
async function generateSitemap() {
  const existingSitemaps = findSitemapFiles()

  // Skip if any sitemap files already exist
  if (existingSitemaps.length > 0) {
    console.log("Sitemap files already exist. Skipping.")
    return
  }

  const urls = pages.flatMap((section) =>
    section.pages
      ? section.pages.map((page) => ({
          url: page.path,
          changefreq: EnumChangefreq.WEEKLY,
        }))
      : [],
  )

  try {
    await simpleSitemapAndIndex({
      hostname: "https://tronica.io",
      destinationDir: resolve(__dirname, "../dist"),
      sourceData: urls,
      gzip: false,
    })
    console.log("sitemap generated successfully")
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

/**
 * Generates a robots.txt file for the website.
 * Skips generation if robots.txt already exists.
 * Adds sitemap entries to the robots.txt content.
 */
async function generateRobotsTxt() {
  // Skip if robots.txt already exists
  if (existsSync(robotsPath)) {
    console.log("robots.txt already exists. Skipping.")
    return
  }

  try {
    // Generate robots.txt content
    let robotsContent = "User-agent: *\nAllow: /\n"

    // Add each sitemap file
    findSitemapFiles().forEach((file) => {
      robotsContent += `Sitemap: https://tronica.io/${file}\n`
    })

    // Write robots.txt
    writeFileSync(robotsPath, robotsContent)
    console.log("robots.txt generated successfully")
  } catch (e) {
    console.error("Error generating robots.txt:", e)
    process.exit(1)
  }
}

generateSitemap().then(() => generateRobotsTxt())
