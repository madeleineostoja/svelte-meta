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
  export let siteUrl = undefined;
  /** @type {string} */
  export let logo = undefined;
  /** @type {string} */
  export let search = undefined;
  /**  @type {string} */
  export let sitemap = undefined;
  /** @type {OpenGraphProps} */
  export let openGraph = {
    title,
    description,
    ...(url ? { url } : {})
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
    }

    if (typeof image === 'object') {
      openGraph = {
        image: image.url,
        'image:width': image.width,
        'image:height': image.height,
        'image:alt': image.alt || title,
        ...openGraph
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

  {#each Object.keys(openGraph) as tag}
    <meta property="og:{tag}" content={openGraph[tag]} />
  {/each}

  {#if !!url}
    <link rel="canonical" href={url} />
  {/if}

  {#if sitemap}
    <link rel="sitemap" type="application/xml" href={sitemap} />
  {/if}

  {#if !!siteUrl}
    {@html jsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: siteUrl,
      logo: logo || ''
    })}

    {@html jsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      ...(!!search
        ? {
            potentialAction: {
              '@type': 'SearchAction',
              target: { searchUrl: `${search}?q={search_term_string}` },
              'query-input': 'required name=search_term_string'
            }
          }
        : {})
    })}
  {/if}
</svelte:head>
