/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

import { ImageProps, OpenGraphProps } from './@types/interfaces';

export interface MetaProps {
  title?: string;
  description?: string;
  image?: string | ImageProps;
  url?: string;
  siteUrl?: string;
  logo?: string;
  search?: string;
  sitemap?: string;
  openGraph?: OpenGraphProps;
  robots?: string;
}

export default class Meta extends SvelteComponentTyped<MetaProps, {}, {}> {}
