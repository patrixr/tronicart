// See https://observablehq.com/framework/config for documentation.

const BASE_URL = "https://tronica.io"
const DEFAULT_THUMB = `${BASE_URL}/_file/data/images/og-thumb.png`

export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Tronicart",

  pages: [
    {
      name: "Experiments",
      pages: [
        {
          name: "Raytracing with Go and Wasm",
          path: "/experiments/raytracing-wasm",
        },
        {
          name: "Three body problem",
          path: "/experiments/three-body-problem",
        },
        {
          name: "Hand-drawn lines",
          path: "/experiments/hand-drawn",
        },
        {
          name: "Bitwise creativity",
          path: "/experiments/bitwise-tiles",
        },
      ],
    },
    {
      name: "Creative algorithms",
      open: true,
      pages: [
        {
          name: "Composable sketches",
          path: "/algorithms/composition",
        },
        {
          name: "Differential growth",
          path: "/algorithms/differential-growth-basics",
        },
        {
          name: "Orbital mechanics",
          path: "/algorithms/orbital-mechanics",
        },
      ],
    },
    {
      name: "Articles",
      open: false,
      pages: [
        {
          name: "An outlook on state management",
          path: "/articles/state-management",
        },
        {
          name: "Custom React API hook",
          path: "/articles/custom-react-hook",
        },
        {
          name: "Observable SEO",
          path: "/articles/observable-seo",
        },
      ],
    },
    {
      name: "Playgrounds",
      open: false,
      pages: [
        {
          name: "Falling sand",
          path: "/playgrounds/falling-sand",
        },
        {
          name: "Triangles",
          path: "/playgrounds/triangles",
        },
        {
          name: "Hexmesh",
          path: "/playgrounds/hexmesh/index",
        },
      ],
    },
    {
      name: "Github",
      path: "https://github.com/patrixr",
    },
    {
      name: "Twitter",
      path: "https://x.com/tronicapps",
    },
    {
      name: "NFTs",
      path: "https://objkt.com/users/tz1dQEFRNPdx2TXqfcprr1XCKdcUfir9geTP",
    },
  ],

  // Some additional configuration options and their defaults:
  search: true,
  theme: "parchment", // try "light", "dark", "slate", etc.
  toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  root: "src", // path to the source root for preview
  output: "dist", // path to the output root for build
  head: ({ title, data, path }) => {
    const keywords = new Set(["creative", "code", "art", "github"])
    const { description = "Creative coding and art", keywords: kw = [] } = data

    for (const k in kw) {
      keywords.add(k)
    }

    return `
<meta name="description" content="${description}">
<meta name="keywords" content="${[...keywords].join(", ")}">
<meta name="author" content="Patrick Rabier">

<meta property="og:title" content="${title}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${path}" />
<meta property="og:image" content="${DEFAULT_THUMB}" />
<meta name="twitter:card" content="${description}" />
<meta name="twitter:site" content="@tronicapps" />
<meta name="twitter:creator" content="@tronicapps" />

<link rel="stylesheet" href="https://early.webawesome.com/webawesome@3.0.0-alpha.8/dist/styles/themes/default.css" />
<script type="module" src="https://early.webawesome.com/webawesome@3.0.0-alpha.8/dist/webawesome.loader.js"></script>

${GA_SCRIPT()}
`
  },
}

const GA_SCRIPT = () => {
  const GA_ID = process.env.GA_ID ?? ""

  if (!GA_ID) {
    return ""
  }

  return `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_ID}');
</script>
  `
}
