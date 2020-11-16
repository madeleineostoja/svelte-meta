# Svelte Meta

Easily generate SEO metadata for Svelte.

### Features

- Automatically set relevant social meta tags common attributes like `title` and `description`

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

| Property      | Metadata Set                    |
| ------------- | ------------------------------- |
| `title`       | `<title>`, `title`, `og:title`  |
| `description` | `description`, `og:description` |
| `image`       | `og:image`                      |

> **Note:** Twitter inherits Open Graph (`og:`) properties if `twitter:` specific metadata is not set, which is why `svelte-meta` doesn't include them
