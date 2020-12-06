/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

import { ImageProps, TwitterCardProps, OpenGraphProps } from './interfaces';

export interface MetaProps {
  title?: string;

  description?: string;

  image?: string | ImageProps;

  url?: string;

  logoUrl?: string;

  searchUrl?: string;

  sitemapUrl?: string;

  /**
   * @default {}
   */
  twitter?: TwitterCardProps;

  /**
   * @default { title, description, ...(url ? { url } : {}), locale: 'en_US' }
   */
  openGraph?: OpenGraphProps;

  /**
   * @default 'index,follow'
   */
  robots?: string;
}

export default class Meta extends SvelteComponentTyped<MetaProps, {}, {}> {}
