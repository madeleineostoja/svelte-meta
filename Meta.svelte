<!--
  Meta Component
  Metadata helper
-->
<script lang="ts">
  type TwitterCardProps = {
    title?: string;
    description?: string;
    image?: string;
    'image:alt'?: string;
    card?: string;
    site?: string;
    'site:id'?: string;
    creator?: string;
    'creator:id'?: string;
    player?: string;
    'player:width'?: string;
    'player:height'?: string;
    'player:stream'?: string;
    'app:name:iphone'?: string;
    'app:id:iphone'?: string;
    'app:url:iphone'?: string;
    'app:name:ipad'?: string;
    'app:id:ipad'?: string;
    'app:url:ipad'?: string;
    'app:name:googleplay'?: string;
    'app:id:googleplay'?: string;
    'app:url:googleplay'?: string;
  };

  type OpenGraphProps = {
    /* Basic */
    title?: string;
    url?: string;
    type?: string;
    description?: string;
    determiner?: string;
    locale?: string;
    'locale:alternate'?: string;
    site_name?: string;
    /* Image */
    image?: string;
    'image:url'?: string;
    'image:secure_url'?: string;
    'image:type'?: string;
    'image:width'?: string;
    'image:height'?: string;
    'image:alt'?: string;
    /* Video */
    video?: string;
    'video:url'?: string;
    'video:secure_url'?: string;
    'video:type'?: string;
    'video:width'?: string;
    'video:height'?: string;
    'video:alt'?: string;
    /* Audio */
    audio?: string;
    'audio:secure_url'?: string;
    'audio:type'?: string;
  };

  type ImageProps = {
    url?: string;
    width?: string;
    height?: string;
    alt?: string;
  };

  /** Page title */
  export let title: Optional<string> = undefined;
  /** Page description **/
  export let description: Optional<string> = undefined;
  /** Page image **/
  export let image: string | ImageProps;
  /** Page url **/
  export let url: Optional<string> = undefined;
  /** Site logo **/
  export let logoUrl: Optional<string> = undefined;
  /** Search URL **/
  export let searchUrl: Optional<string> = undefined;
  /** Sitemap URL **/
  export let sitemapUrl: Optional<string> = undefined;
  /** Twitter Options **/
  export let twitter: TwitterCardProps = {};
  /** OpenGraph Options **/
  export let openGraph: OpenGraphProps = {
    title,
    description,
    ...(url ? { url } : {}),
    locale: 'en_US'
  };
  /** Robots **/
  export let robots: Optional<string> = 'index,follow';

  const jsonLd = (content: object) =>
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
