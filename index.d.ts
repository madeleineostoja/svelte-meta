/// <reference types="svelte" />
import { SvelteComponentTyped } from 'svelte';

import {
  ImageProps,
  TwitterCardProps,
  OpenGraphProps
} from './@types/interfaces';

export interface MetaProps {
  title?: string;
  description?: string;
  image?: string | ImageProps;
  url?: string;
  logoUrl?: string;
  searchUrl?: string;
  sitemapUrl?: string;
  twitter?: TwitterCardProps;
  openGraph?: OpenGraphProps;
  robots?: string;
}

export default class Meta extends SvelteComponentTyped<MetaProps, {}, {}> {}
