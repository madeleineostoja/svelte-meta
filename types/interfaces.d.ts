export type TwitterCardProps = {
  title?: string;
  description?: string;
  image?: string;
  'image:alt'?: string;
  card?: string;
  site?: string;
  creator?: string;
};

export type OpenGraphProps = {
  title?: string;
  description?: string;
  image?: string;
  'image:alt'?: string;
  'image:width'?: string;
  'image:height'?: string;
  url?: string;
  type?: string;
  locale?: string;
  site_name?: string;
};

export type ImageProps = {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
};
