export type OpenGraphProps = {
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

export type ImageProps = {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
};
