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
    'Front-end developer with strong UI/UX skills. Proficient in building beautiful, user-friendly interfaces using React.js, Next.js, and Tailwind CSS.',
  authors: [{ name: 'CarboxyDev', url: 'https://carboxy.tech' }],
  category: 'personal',
  keywords: ['portfolio', 'personal', 'projects'],
  metadataBase: new URL('https://carboxy.tech'),
  openGraph: {
    title: 'CarboxyDev',
    description:
      'Front-end developer with strong UI/UX skills. Proficient in building beautiful, user-friendly interfaces using React.js, Next.js, and Tailwind CSS.',
    url: 'https://carboxy.tech',
    siteName: 'CarboxyDev',
    images: [
      {
        url: 'https://carboxy.tech/logo.png',
        width: 1032,
        height: 1032,
      },
    ],
    locale: 'en-US',
    type: 'website',
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
        <TooltipProvider>{children}</TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
