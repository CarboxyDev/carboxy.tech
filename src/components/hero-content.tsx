'use client';

import { cn } from '@/lib/utils';
import { Outfit } from 'next/font/google';
import { useEffect, useState } from 'react';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

export const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'relative z-10 text-3xl font-semibold md:text-4xl',
        headingFont.className
      )}
    >
      <h1 className="mb-3 text-zinc-100">
        Transforming Ideas into Digital Reality.
      </h1>
      <div
        className={cn(
          'bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent transition-all duration-1000 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        )}
      >
        Converting Coffee into Code
      </div>
    </div>
  );
};