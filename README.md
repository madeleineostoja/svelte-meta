# Svelte Meta

[![NPM](https://img.shields.io/npm/v/svelte-meta)](https://www.npmjs.com/package/svelte-meta) [![License](https://img.shields.io/npm/l/svelte-meta)](https://github.com/peppercorntsudio/svelte-meta/blob/master/LICENSE.md)

Easily generate SEO metadata for Svelte.

### Features

- Automatically set relevant social meta tags common attributes like `title` and `description`
- Automatically set relevant JSON-LD metadata
- Shorthands for setting Open Graph and Twitter metadata
- Shorthands for setting URL, Sitemap, and other technical SEO data

### Usage

```sh
npm i svelte-meta
```

```svelte
<script>
  import Meta from 'svelte-meta';
</script>

<Meta
  title="My Page"
  description="It's a great page"
  image="/cover.png"
  siteUrl="https://website.com"
  url="https://website.com/page
/>
```

### Properties

| Property      | Type                                                                     | Description                             | Metadata Set                     |
| ------------- | ------------------------------------------------------------------------ | --------------------------------------- | -------------------------------- |
| `title`       | `string`                                                                 | Title of your project                   | `<title>`, `title`, `og:title`   |
| `description` | `string`                                                                 | Descriptoin of your project             | `description`, `og:description`  |
| `image`       | `string` or `{ url: string; width: number; height: number; alt: string}` | Image for social networks               | `og:image`                       |
| `url`         | `string`                                                                 | URL of the current page                 | `canonical`, `JSON-LD`, `og:url` |
| `siteUrl`     | `string`                                                                 | Root URL of your website                | `canonical`, `JSON-LD`, `og:url` |
| `logo`        | `string`                                                                 | Logo image for your brand               | `JSON-LD`                        |
| `search`      | `string`                                                                 | Search page base URL                    | `JSON-LD`                        |
| `sitemap`     | `string`                                                                 | URL of your sitemap                     | `sitemap`                        |
| `openGraph`   | Inherits other properties, plus custom `og:` properties, eg: `video`     | [OpenGraph properties](https://ogp.me/) | `og:`                            |

### Notes

- Twitter inherits Open Graph (`og:`) properties if `twitter:` specific metadata is not set, which is why `svelte-meta` doesn't include them
