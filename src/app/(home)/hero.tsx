'use client';

import { HighlightText } from '@/components/Text';
import { Button } from '@/components/vendor/button';
import { cn } from '@/lib/utils';
import { ArrowBigDownDash } from 'lucide-react';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

export const HeroSection = () => {
  return (
    <section className="flex flex-col">
      <div
        className={cn(
          'text-3xl font-semibold md:text-4xl',
          headingFont.className
        )}
      >
        <h1 className="text-zinc-100">Turning Visions into Reality.</h1>
        <h1 className="text-stone-600">Building Extraordinary Webapps.</h1>
      </div>
      <div className="mt-7 text-zinc-200 sm:w-[540px] sm:text-lg md:w-[580px] lg:w-[720px]">
        Full-stack developer with powerful UI/UX skills. Proficient in creating{' '}
        <HighlightText>beautiful, cohesive</HighlightText> interfaces using
        technologies like React.js, Next.js and Node.js
      </div>
      <div className="mt-6">
        <Button
          onClick={() => {
            const elem = document.getElementById('projects');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group h-15 select-none gap-x-3 overflow-hidden bg-primary-500/10 px-7 py-4 text-primary-500 hover:bg-primary-500/15"
        >
          <ArrowBigDownDash className="h-5 w-5 transition-all duration-300 ease-in-out group-hover:-rotate-45" />
          <span className="text-[16px] font-medium">Learn more</span>
        </Button>
      </div>
    </section>
  );
};
