#!/usr/bin/env node

import { hideBin } from "yargs/helpers"
import yargs from "yargs/yargs"
import fs from "fs"
import path from "path"

const domain = "tronica.io"

const __dirname = path.dirname(new URL(import.meta.url).pathname)

type Image =
  | "candybar"
  | "cheerfulorange"
  | "renownedred"
  | "unmatchedeclipse"
  | "virtualshapes"
  | "flawlessaffinity"
  | "prettyheroic"
  | "irritablehero"
  | "circleacquired"
  | "descendsun"
  | "shatteredfeelings"

/**
 * Example usage:
 *
 * $ thumbnail generate myimage "My Title" "My Subtitle" --protocol http --font arial --image cheerfulorange --color blue
 */
yargs(hideBin(process.argv))
  .command(
    "generate [name] [title] [subtitle]",
    "Generate an OG image",
    (yargs) => {
      return yargs
        .positional("name", {
          describe: "Name of the image file",
          type: "string",
          demandOption: true,
        })
        .positional("title", {
          describe: "Title for the OG image",
          type: "string",
          demandOption: true,
        })
        .positional("subtitle", {
          describe: "Subtitle for the OG image",
          type: "string",
          demandOption: true,
        })
        .option("protocol", {
          describe: "Protocol to use",
          type: "string",
          default: "https",
        })
        .option("font", {
          describe: "Font to use",
          type: "string",
          default: "atkinson",
        })
        .option("bg", {
          describe: "Background image",
          type: "string",
          choices: [
            "candybar",
            "cheerfulorange",
            "renownedred",
            "unmatchedeclipse",
            "virtualshapes",
            "flawlessaffinity",
            "prettyheroic",
            "irritablehero",
            "circleacquired",
            "descendsun",
            "shatteredfeelings",
          ],
          default: "candybar",
        })
        .option("color", {
          describe: "Color to use",
          type: "string",
          default: "black",
        })
    },
    (argv) => {
      generateOGImage(argv.name, {
        title: argv.title,
        subtitle: argv.subtitle,
        protocol: argv.protocol,
        font: argv.font,
        bg: argv.bg as Image,
        color: argv.color,
      })
    },
  )
  .help().argv

export async function generateOGImage(
  name: string,
  params: {
    title: string
    subtitle: string
    protocol?: string
    font?: string
    bg?: Image
    color?: string
  },
) {
  const {
    title,
    subtitle,
    protocol = "https",
    font = "menlo",
    bg = "candybar",
    color = "black",
  } = params

  const url = encodeURI(
    `https://og-image.xyz/og/${title}/${subtitle}/${domain}/${protocol}/${font}/${bg}/${color}/data.png`,
  )

  const folder = "/data/images/page-thumbnails"
  const filepath = path.join(folder, name + ".png")
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`)
  }
  const buffer = new Uint8Array(await response.arrayBuffer())
  const imagePath = path.join(__dirname, "../src/", filepath)

  fs.writeFileSync(imagePath, buffer)

  console.log("https://" + domain + "/_file" + filepath)
}
