import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sureodds.com',
      lastModified: new Date(),
    },
    {
      url: 'https://sureodds.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://sureodds.com/blog',
      lastModified: new Date(),
    },
  ];
}
