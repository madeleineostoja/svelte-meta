# Svelte Meta

Easily generate SEO metadata for Svelte.

## Features

- Automatically set relevant social meta tags common attributes like `title` and `description`

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

#### Svelte-preprocess

`svelte-meta` is written in Typescript, and requires Svelte preprocessing to be enabled. If you're using [Sapper](https://sapper.svelte.dev/) this comes enabled by default.

To enable preprocessing, install `svelte-preprocess` and include it in the svelte config in your `rollup.config.js` or `webpack.config.js`

```sh
npm i svelte-preprocess
```

```js
import autoPreprocess from 'svelte-preprocess';

svelte({
  preprocess: autoPreprocess()
});
```

See the [svelte-preprocess docs](https://github.com/sveltejs/svelte-preprocess) for more.

## Properties

| Property         | Type    | Metadata Set                    | Default                                                                                                                                       |
| -------------    | ------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`          | string  | `<title>`, `title`, `og:title`  | undefined                                                                                                                                     |
| `description`    | string  | `description`, `og:description` | undefined                                                                                                                                     |
| `image`          | object  | `og:image`,                     | { url: undefined, width: undefined, height: undefined, alt: undefined }                                                                       |
| `url`            | string  | `canonical`, `og:url`           | undefined                                                                                                                                     |
| `logoUrl`        | string  | `JSON-LD`                       | undefined                                                                                                                                     |
| `searchUrl`      | string  | `JSON-LD`                       | undefined                                                                                                                                     |
| `sitemapUrl`     | string  | `sitemap`                       | undefined                                                                                                                                     |
| `twitter`        | object  | `twitter:`                      | { card: undefined, site: undefined, creator: undefined }                                                                                      |
| `openGraph`      | object  | `og:`                           | { type: undefined, imageWidth: undefined, imageHeight: undefined, imageAlt: `title` || undefined, locale: `en_US`, site_name: undefined }     |

## Notes

- Twitter inherits Open Graph (`og:`) properties if `twitter:` specific metadata is not set, which is why `svelte-meta` doesn't include them
- `searchUrl` must include a query param with the name `search_term_string` e.g. `https://google.com/search?q={search_term_string}`
