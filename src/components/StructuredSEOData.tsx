'use client';

import Head from 'next/head';

export const StructuredSEOData = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'CarboxyDev',
    url: 'https://carboxy.xyz',
    jobTitle: 'Full-Stack Developer',
    sameAs: ['https://github.com/carboxydev', 'https://x.com/carboxydev'],
    description:
      'Full-stack developer with strong UI/UX skills. Currently available for work.',
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};
