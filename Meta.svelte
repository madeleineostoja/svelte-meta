<!--
  Meta Component
  Metadata helper
-->
<script lang="ts">

  interface TwitterCardProps {
    title?: string,
    description?: string,
    image?: string,
    'image:alt'?: string,
    card?: string,
    site?: string,
    creator?: string,
  }

  interface OpenGraphProps {
    title?: string,
    description?: string,
    image?: string,
    'image:alt'?: string,
    'image:width'?: string,
    'image:height'?: string,
    url?: string,
    type?: string,
    locale?: string,
    site_name?: string,
  }

  interface ImageProps {
    url?: string,
    width?: string,
    height?: string,
    alt?: string,
  }

  /** Page title */
  export let title: Optional<string> = undefined;
  /** Page description **/
  export let description: Optional<string> = undefined;
  /** Page image **/
  export let image: ImageProps = {
    alt: title,
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
    image: image ? image.url : undefined,
    'image:alt': image ? image.alt : undefined,
  };
  /** OpenGraph Options **/
  export let openGraph: OpenGraphProps = {
    title,
    description,
    url,
    image: image ? image.url : undefined,
    'image:width': image ? image.width : undefined,
    'image:height': image ? image.height : undefined,
    'image:alt': image ? image.alt : undefined,
    locale: 'en_US',
  }
  /** Robots **/
  export let robots: Optional<string> = 'index,follow';
</script>

<svelte:head>

  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  {#if robots}
    <meta name="robots" content="{robots}" />
  {/if}

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
    <link rel="sitemap" type="application/xml" href="{sitemapUrl}" />
  {/if}

  {#each Object.keys(twitter) as tag}
    <meta property="og:{tag}" content="{twitter[tag]}" />
  {/each}
  
  {#each Object.keys(openGraph) as tag}
    <meta property="og:{tag}" content="{openGraph[tag]}" />
  {/each}
  
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
