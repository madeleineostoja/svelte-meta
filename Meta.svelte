<!--
  Meta Component
  Metadata helper
-->
<script>

  interface TwitterCardProps {
    card: Optional<string>,
    site: Optional<string>,
    creator: Optional<string>,
  }

  interface OpenGraphProps {
    type: Optional<string>,
    locale: Optional<string>,
    siteName: Optional<string>,
  }

  /** Page title **/
  export let title: Optional<string> = undefined;
  /** Page description **/
  export let description: Optional<string> = undefined;
  /** Page image **/
  export let image: any = {
    url: undefined,
    width: undefined,
    height: undefined,
    alt: title || undefined,
  };
  /** Page url **/
  export let url: Optional<string> = undefined;
  /** Site logo **/
  export let logoUrl: Optional<string> = undefined;
  /** Search URL **/
  export let searchUrl: Optional<string> = undefined;
  /** Sitemap URL **/
  export let sitemapUrl: Optional<string> = undefined;
  /** Twitter Options **/
  export let twitter: TwitterCardProps = {
    card: undefined,
    site: undefined,
    creator: undefined,
  };
  /** OpenGraph Options **/
  export let openGraph: OpenGraphProps = {
    type: undefined,
    locale: 'en_US',
    siteName: undefined,
  }
</script>

<svelte:head>

  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="robots" content="index,follow" />
  <meta name="googlebot" content="index,follow" />

  {#if sitemapUrl}
    <link rel="sitemap" type="application/xml" href="{sitemapUrl}" />
  {/if}

  {#if twitter.card}
    <meta name="twitter:card" content="{twitter.card}" />
  {/if}

  {#if twitter.site}
    <meta name="twitter:site" content="{twitter.site}" />
  {/if}

  {#if twitter.creator}
    <meta name="twitter:creator" content="{twitter.creator}" />
  {/if}
  
  {#if openGraph.type}
    <meta property="og:type" content="{openGraph.type}" />
  {/if}

  {#if openGraph.locale}
    <meta property="og:locale" content="{openGraph.locale}">
  {/if}

  {#if openGraph.siteName}
    <meta property="og:site_name" content="{openGraph.siteName}">
  {/if}

  {#if title}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  {/if}

  {#if image.url}
    <meta property="og:image" content={image.url} />

    {#if image.width}
      <meta property="og:image:width" content="{image.width}">
    {/if}

    {#if image.height}
      <meta property="og:image:width" content="{image.height}">
    {/if}

    {#if image.alt}
      <meta property="og:image:alt" content="{image.alt}">
    {/if}
  {/if}

  {#if url}
    <link rel="canonical" href={url} />
    <meta property="og:url" content={url} />
  {/if}
  
  {#if url && logoUrl}
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": url,
        "logo": logoUrl
      }
    </script>
  {/if}
  
  {#if url && searchUrl}
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": url,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {searchUrl},
          "query-input": "required name=search_term_string"
        }
      }
    </script>
  {/if}

  <slot />

</svelte:head>
