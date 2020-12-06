<!--
  Meta Component
  Metadata helper
-->
<script>
  /** @type {string} */
  export let title = undefined;

  /** @type {string} */
  export let description = undefined;

  /** @type {string|ImageProps} */
  export let image = undefined;

  /** @type {string} */
  export let url = undefined;

  /** @type {string} */
  export let logoUrl = undefined;

  /** @type {string} */
  export let searchUrl = undefined;

  /**  @type {string} */
  export let sitemapUrl = undefined;

  /** @type {TwitterCardProps} */
  export let twitter = {};

  /** @type {OpenGraphProps} */
  export let openGraph = {
    title,
    description,
    ...(url ? { url } : {}),
    locale: 'en_US'
  };

  /** @type {string} */
  export let robots = 'index,follow';

  const jsonLd = (content) =>
    `<${'script'} type="application/ld+json">${JSON.stringify(
      content
    )}</${'script'}>`;

  $: {
    if (!!image && typeof image === 'string') {
      openGraph = { image, ...openGraph };
      twitter = { image, ...twitter };
    }

    if (typeof image === 'object') {
      openGraph = {
        image: image.url,
        'image:width': image.width,
        'image:height': image.height,
        'image:alt': image.alt || title,
        ...openGraph
      };

      twitter = {
        image: image.url,
        'image:alt': image.alt || title
      };
    }
  }
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="robots" content={robots} />

  {#if title}
    <title>{title}</title>
    <meta name="title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}

  {#if url}
    <link rel="canonical" href={url} />
  {/if}

  {#if sitemapUrl}
    <link rel="sitemap" type="application/xml" href={sitemapUrl} />
  {/if}

  {#each Object.keys(twitter) as tag}
    <meta property="og:{tag}" content={twitter[tag]} />
  {/each}

  {#each Object.keys(openGraph) as tag}
    <meta property="og:{tag}" content={openGraph[tag]} />
  {/each}

  {#if url && logoUrl}
    {@html jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: url,
      logo: logoUrl
    })}
  {/if}

  {#if url && searchUrl}
    {@html jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: url,
      potentialAction: {
        '@type': 'SearchAction',
        target: { searchUrl },
        'query-input': 'required name=search_term_string'
      }
    })}
  {/if}
</svelte:head>
