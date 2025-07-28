import {
  BackgroundEffects,
  ParticleEffect,
} from '@/components/BackgroundEffects';
import { StructuredSEOData } from '@/components/StructuredSEOData';
import { TooltipProvider } from '@/components/vendor/tooltip';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const textFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CarboxyDev',
  description:
    'Full-stack developer with strong UI/UX skills. Currently available for freelance and contract work. Experienced in React.js, Next.js, Node.js, and Tailwind CSS.',
  authors: [{ name: 'CarboxyDev', url: 'https://carboxy.xyz' }],
  category: 'Personal Portfolio',
  keywords: [
    'CarboxyDev',
    'full-stack developer',
    'freelance web developer',
    'React developer',
    'Next.js developer',
    'UI/UX developer',
    'available for work',
    'open for freelance',
    'available developer',
  ],
  metadataBase: new URL('https://carboxy.xyz'),
  openGraph: {
    title: 'CarboxyDev',
    description:
      'Currently open for work and contract projects. I build stunning full-stack web applications using React, Next.js, and Node.js.',
    url: 'https://carboxy.xyz',
    siteName: 'CarboxyDev',
    images: [
      {
        url: 'https://carboxy.xyz/logo.png',
        width: 1032,
        height: 1032,
        alt: 'CarboxyDev Logo',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarboxyDev',
    description:
      'Full-stack developer with a passion for clean UI and scalable backend. Currently open to work and remote opportunities.',
    images: ['https://carboxy.xyz/logo.png'],
    creator: '@carboxydev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          textFont.className,
          process.env.NODE_ENV == 'development' && 'debug-screens',
          'bg-[#141416] text-white antialiased'
        )}
      >
        <StructuredSEOData />
        <BackgroundEffects />
        <ParticleEffect />
        <TooltipProvider>{children}</TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
