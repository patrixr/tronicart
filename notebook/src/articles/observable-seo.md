---
keywords: seo, observablehq, web
description: Improving the SEO rating of an Observable website
---

# Observable: SEO optimization

<div class="note">
    This article is a work in progress. I will be updating it as I progressively improve the SEO rating of this website.
</div>

If you're reading this, you should know you are looking at a website generated thanks to [Observable](https://observablehq.com/).
I can't express how much I **love** this platform. I get to write code, markdown pages, creative sketches all in one place. So I wanted to see how visible it would be to the world, with some SEO benchmarks.

At time of writing, the Observable documentation is a bit sparse on the subject, so I'll be experimenting a bit to improve the SEO rating of this website.

Before starting, I've given myself one key constaint: to keep the process of creating pages **as simple as possible**.
In practice, this mainly means that I don't want to have to manually add meta tags to each page manually.

## Determining the baseline

I used [SEO Site Checkup](https://seositecheckup.com/) to determine the website's current SEO rating. It provides a quick overview of SEO performance.
My initial score was **76/100**. Not bad!

![](/data/images/seo-score-jan-25.png)

Key recommendations are listed below. Click to see the full report.

<wa-details style="margin-bottom: 30px; background: rgba(0,0,0,0.1);" summary="Full Report">
  <table style="border-collapse: collapse; width: 100%;">
    <tbody>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="danger">High</wa-badge></td>
        <td>Add a <strong>meta description</strong> tag to provide a brief and informative summary of the page's content for search engines.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="danger">High</wa-badge></td>
        <td>To ensure that Search Engines can accurately identify the topic of this webpage, it is important to include the <strong>most common keywords</strong> in the title tag, meta description, and heading tags.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="danger">High</wa-badge></td>
        <td>Connect your webpage with <strong>social media</strong> networks using APIs or AddThis, as social signals are becoming increasingly important for search engines to validate a site's trustworthiness and authority.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="danger">High</wa-badge></td>
        <td>To improve the website experience for your visitors, it is recommended to eliminate any <strong>render-blocking resources</strong> on this webpage.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="danger">High</wa-badge></td>
        <td>Consider using <strong>structured data</strong> in your webpage as it can help search engines gain a better understanding of your content.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="warning">Medium</wa-badge></td>
        <td>Add a <strong>sitemap</strong> file to help search engine crawlers index content more thoroughly and quickly.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="warning">Medium</wa-badge></td>
        <td>Add a <strong>robots.txt</strong> file to properly communicate with web crawlers and prevent unwanted access to sensitive content.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="warning">Medium</wa-badge></td>
        <td>Add a <strong>Google Analytics</strong> script to this website to help in diagnosing potential SEO issues by monitoring site visitors and traffic sources.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="warning">Medium</wa-badge></td>
        <td>Using <strong>social media meta tags</strong> can improve the appearance and content of shared links on social media platforms, potentially increasing click-through rates and engagement with the page.</td>
      </tr>
      <tr>
        <td><wa-badge style="width: 60px" appearance="filled outlined" variant="warning">Medium</wa-badge></td>
        <td>Avoid performance and security issues by adding "rel=noopener" or "rel=noreferrer" to your "target=\_blank" links.</td>
      </tr>
    </tbody>
  </table>
</wa-details>

</details>

## Meta tags

Observable lets you customize the `<head>` tag via a [custom header function](https://observablehq.com/framework/config#head) in its configuration file.
This function accesses each page's [YAML front matter](https://observablehq.com/framework/markdown#front-matter) for meta tag information.

For example, this is how we can define the meta tags for this page:

```yaml
---
keywords: seo, observablehq, web
description: Improving the SEO rating of an Observable website
---
```

Although handy, I do want to support some defaults in the case I forget to add these.

After playing around with the `observablehq.config.ts` configuration, this is what I've come up with:

```typescript
export default {
  // ...

  head: ({ title, data, path }) => {
    // Some sensible default values
    const keywords = new Set(["creative", "code", "art", "github"])
    const { description = "Creative coding and art", keywords: kw = [] } = data

    for (const k in kw) {
      keywords.add(k)
    }

    // Return the head html
    return `
      <meta name="description" content="${description}">
      <meta name="keywords" content="${[...keywords].join(", ")}">
    `
  },
}
```

## Google analytics

SEO ratings are also influenced by the presence of Google Analytics on the website.
This can be achieved with a simple addition to the `<head>` using the same method as we did before:

First, we'll create a small helper in our configuration file:

```typescript
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
```

<div class="note">
  I am using a github secret to store the GA_ID, which is then injected into the build process.
  But that is not mandatory, you can simply replace `process.env.GA_ID` with your own ID.
</div>

Next we can include this in our `head` function:

```typescript
// head() function
return `
  <meta name="description" content="${description}">
  <meta name="keywords" content="${[...keywords].join(", ")}">

  ${GA_SCRIPT()}
`
```

## Sitemap and robots.txt

At time of writing, Observable does not appear to support sitemaps or robots.txt files. This is a bit of a bummer, but we can work around it.
It so happens that the observable config object contains a list of all the pages in the website, which is used to configure the sidebar.

With the help of a [custom script](https://github.com/patrixr/tronicart/blob/main/notebook/scripts/sitemap.ts) we can use that to generate a sitemap.

I won't go into the details of the script, but the important thing to note is that we can hook into the build process to generate the sitemap and robots.txt files.

```json
// package.json
{
  "scripts": {
    // Other scripts...
    "sitemap": "node generate-sitemap.js",
    "postbuild": "npm run sitemap"
  }
}
```

And voila ! We now have a sitemap and robots.txt file generated for our website.

## Adding a favicon

Another recommendation from the SEO Site Checkup report is to add a favicon to the website.
A quick p5 sketch was easy ebough to generate a favicon for the website:

![](/data/static/favicon-32x32.png)

Using this amazing favicon generator: [favicon.io](https://favicon.io/), I generated a few different sizes of the favicon and added them to the website's static folder.
Following the same method as before, we can add the favicon to the head of the website:

```typescript
export default {
  // ...
  head: ({ title, data, path }) => {
    return `
      <meta name="description" content="${description}">
      <meta name="keywords" content="${[...keywords].join(", ")}">

      ${GA_SCRIPT()}

      <link rel="icon" href="/_file/data/static/favicon.ico" sizes="32x32">
      <link rel="icon" href="/_file/data/static/facicon-32x32.png" sizes="32x32">
      <link rel="icon" href="/_file/data/static/facicon-16x16.png" sizes="16x16">
      <link rel="apple-touch-icon" href="/_file/data/static/apple-touch-icon.png">
      <link rel="manifest" href="/_file/data/static/manifest.json" />
    `
  },
}
```

## Adding structured data

Structured data is a way to provide search engines with more information about the content of the website.
Usually, this is done with JSON-LD scripts in the `<head>` of the website.

### Some limitations

In this instance, the _head()_ method does not have enough details of the page to generate a detailed JSON-LD script.
For example, we would need to know the author of the page, the date it was published, or even attach the whole content of the page.

### A temporay solution

For now, I've added a simple JSON-LD script to the head of the website, which provides some basic information about the website.

```typescript
return `
<!-- ... -->

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "${title}",
  "image": "${defaultImage},
  "keywords": "${[...keywords].join(" ")}",
  "publisher": "Tronica",
  "url": "${BASE_URL + path}",
  "description": "${title}",
  "author": {
    "@type": "Person",
    "name": "Patrick"
  }
}
</script>
`
```
