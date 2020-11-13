# Svelte Meta

Easily generate SEO metadata for Svelte.

## Installation

```sh
npm i svelte-meta
```

## Usage

```svelte
<script>
  import Meta from 'svelte-meta';
</script>

<Meta
  title="My Page"
  description="It's a great page"
  image="/cover.png"
  url="https://mypage.com/"
/>
```

`svelte-meta` will automatically set relevant HTML meta and `og:` properties, along with a `<title>` tag if a `title` is specified.

## Properties

| Property         | Type    | Metadata Set                    | Default                                                                                 |
| -------------    | ------- | ------------------------------- | --------------------------------------------------------------------------------------- |
| `title`          | string  | `<title>`, `title`, `og:title`  | undefined                                                                               |
| `description`    | string  | `description`, `og:description` | undefined                                                                               |
| `image`          | string  | `og:image`                      | undefined                                                                               |
| `url`            | string  | `canonical`, `og:url`           | undefined                                                                               |
| `logoUrl`        | string  | `JSON-LD`                       | `${url}/logo.png` || undefined                                                          |
| `searchUrl`      | string  | `JSON-LD`                       | undefined                                                                               |
| `sitemapUrl`     | string  | `sitemap`                       | `${url}/sitemap.xml` || undefined                                                       |
| `facebookAppId`  | string  | `fb:app_id`                     | undefined                                                                               |
| `twitter`        | object  | `twitter:`                      | { card: 'summary_large_image', site: undefined, creator: undefined }                    |
| `openGraph`      | object  | `og:`                           | { type: undefined, imageWidth: undefined, imageHeight: undefined, locale: 'en_US' }     |

## Notes

- Twitter inherits Open Graph (`og:`) properties if `twitter:` specific metadata is not set, which is why `svelte-meta` doesn't include them
- `searchUrl` must include a query param with the name `search_term_string` e.g. `https://google.com/search?q={search_term_string}`
