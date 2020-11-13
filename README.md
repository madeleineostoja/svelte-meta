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

| Property      | Metadata Set                    |
| ------------- | ------------------------------- |
| `title`       | `<title>`, `title`, `og:title`  |
| `description` | `description`, `og:description` |
| `image`       | `og:image`                      |
| `url`         | `canonical`, `og:url`           |
| `logo`        | `JSON-LD`                       |
| `searchUrl`   | `JSON-LD`                       |

## Notes

- Twitter inherits Open Graph (`og:`) properties if `twitter:` specific metadata is not set, which is why `svelte-meta` doesn't include them
- `searchUrl` must include a query param with the name `search_term_string` e.g. `https://google.com/search?q={search_term_string}`
