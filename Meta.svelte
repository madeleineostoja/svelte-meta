<!--
  Meta Component
  Metadata helper
-->
<script>
  /** Page title **/
  export let title: Optional<string> = undefined;
  /** Page description **/
  export let description: Optional<string> = undefined;
  /** Page image **/
  export let image: Optional<string> = undefined;
  /** Page url **/
  export let url: Optional<string> = undefined;
  /** Site logo **/
  export let logoUrl: string = url ? `${url}/logo.png` : undefined;
  /** Search URL **/
  export let searchUrl: Optional<string> = undefined;
  /** Sitemap URL **/
  export let sitemapUrl: string = url ? `${url}/sitemap.xml` : undefined;
  /** Twitter Options **/
  export let twitter: any = {
    card: 'summary_large_image',
    site: undefined,
    creator: undefined,
  };
  /** OpenGraph Options **/
  export let openGraph: any = {
    type: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    locale: 'en_US',
  }
  /** Facebook App ID **/
  export let facebookAppId: Optional<string> = undefined;
</script>

<svelte:head>

  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="robots" content="index,follow" />
  <meta name="googlebot" content="index,follow" />
  <link rel="sitemap" type="application/xml" href="{sitemapUrl}" />

  <meta name="twitter:card" content="{twitter.card}" />

  {#if twitter.site}
    <meta name="twitter:site" content="{twitter.site}" />
  {/if}

  {#if twitter.creator}
    <meta name="twitter:creator" content="{twitter.creator}" />
  {/if}

  {#if facebookAppId}
    <meta property="fb:app_id" content="{facebookAppId}" />
  {/if}
  
  {#if openGraph.type}
    <meta property="og:type" content="{openGraph.type}" />
  {/if}

  {#if openGraph.locale}
    <meta property="og:locale" content="{openGraph.locale}">
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

  {#if image}
    <meta property="og:image" content={image} />
  {/if}

  {#if url}
    <link rel="canonical" href={url} />
    <meta property="og:url" content={url} />

    {#if openGraph.imageWidth}
      <meta property="og:image:width" content="{openGraph.imageWidth}">
    {/if}

    {#if openGraph.imageHeight}
      <meta property="og:image:width" content="{openGraph.imageHeight}">
    {/if}
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
