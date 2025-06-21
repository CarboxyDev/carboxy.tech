'use client';

import { HighlightText } from '@/components/Text';
import { Button } from '@/components/vendor/button';
import { cn } from '@/lib/utils';
import { ArrowBigDownDash } from 'lucide-react';
import { Outfit } from 'next/font/google';
import { useEffect, useState } from 'react';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

const dynamicHeadings = [
  'Building Extraordinary Webapps.',
  'Crafting Digital Experiences.',
  'Creating Stunning Web Solutions.',
  'Crafting Beautiful Interfaces.',
  'Engineering Modern Applications.',
  'Developing Cutting-Edge Products.',
  'Creating Seamless Products.',
];

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentHeading, setCurrentHeading] = useState(dynamicHeadings[0]);

  useEffect(() => {
    // Choose a random heading when mounting
    const randomHeading =
      dynamicHeadings[Math.floor(Math.random() * dynamicHeadings.length)];
    setCurrentHeading(randomHeading);

    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col">
      <div
        className={cn(
          'text-3xl font-semibold md:text-4xl',
          headingFont.className
        )}
      >
        <h1 className="mb-3 text-zinc-100">
          Transforming{' '}
          <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Ideas
          </span>{' '}
          into Digital Reality.
        </h1>
        <div
          className={cn(
            'bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent transition-all duration-1000 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          {currentHeading}
        </div>
      </div>

      <div className="mt-8 leading-relaxed text-zinc-200 sm:w-[540px] sm:text-lg md:w-[580px] lg:w-[720px]">
        Full-stack developer with powerful UI/UX skills. Proficient in creating{' '}
        <HighlightText>beautiful, cohesive</HighlightText> interfaces using
        technologies like React.js, Next.js and Node.js
      </div>

      <div className="mt-8">
        <LearnMoreButton />
      </div>

      <div className="absolute -left-2 -top-2 h-4 w-4 animate-pulse-slow rounded-full bg-violet-500/20 blur-sm" />
      <div
        className="absolute -right-4 top-8 h-2 w-2 animate-pulse-slow rounded-full bg-cyan-500/20 blur-sm"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

const LearnMoreButton = () => {
  return (
    <Button
      onClick={() => {
        const elem = document.getElementById('projects');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }}
      className="group h-15 select-none gap-x-3 overflow-hidden bg-primary-500/10 px-7 py-4 text-primary-500 hover:bg-primary-500/15"
    >
      <ArrowBigDownDash className="h-5 w-5 transition-all duration-300 ease-in-out group-hover:-rotate-45" />
      <span className="text-[16px] font-medium">Explore my work</span>
    </Button>
  );
};
