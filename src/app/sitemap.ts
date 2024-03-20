import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://carboxy.tech',
      lastModified: new Date(),
    },
  ];
}
