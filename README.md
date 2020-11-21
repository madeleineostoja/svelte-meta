# Svelte Meta

Easily generate SEO metadata for Svelte.

## Features

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

### Properties

| Property      | Type                                                                                                             | Metadata Set                                                             |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `title`       | `string`                                                                                                         | `<title>`, `title`, `og:title`                                           |
| `description` | `string`                                                                                                         | `description`, `og:description`                                          |
| `image`       | `string`                                                                                                         | `{ url: string; width: number; height: number; alt: string}`, `og:image` |
| `url`         | `string`                                                                                                         | `canonical`, `og:url`                                                    |
| `logoUrl`     | `string`                                                                                                         | `JSON-LD`                                                                |
| `searchUrl`   | `string`                                                                                                         | `JSON-LD`                                                                |
| `sitemapUrl`  | `string`                                                                                                         | `sitemap`                                                                |
| `twitter`     | `{ title: string; description: string; card: string, site: string, creator: string }`                            | `twitter:`                                                               |
| `openGraph`   | `{ type: string; imageWidth: number; imageHeight: number; imageAlt: string; locale: string; site_name: string }` | `og:`                                                                    |

### Notes

- Twitter inherits Open Graph (`og:`) properties if `twitter:` specific metadata is not set, which is why `svelte-meta` doesn't include them
- `searchUrl` must include a query param with the name `search_term_string` e.g. `https://google.com/search?q={search_term_string}`
- For an overview of `twitter` properties, visit [the Twitter Developer docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)
- For an overview of `openGraph` properties, visit [the OpenGraph website](https://ogp.me/)