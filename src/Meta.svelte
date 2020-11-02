<!--
  Meta Component
  Metadata helper
-->
<script>
  /** Page title */
  export let title: Optional<string> = undefined;
  /** Page description */
  export let description: Optional<string> = undefined;
  /** Page image */
  export let image: Optional<string> = undefined;
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  {#if image}
    <meta property="og:image" content={image} />
    <meta name="twitter:image" content={image} />
  {/if}
</svelte:head>
