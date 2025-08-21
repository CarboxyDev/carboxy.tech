'use client';

import { AboutMeButton, LearnMoreButton } from '@/components/home/cta-buttons';
import { FloatingParticles } from '@/components/home/floating-particles';
import { cn } from '@/lib/utils';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center text-center">
      <FloatingParticles />

      <div
        className={cn(
          'relative z-10 text-4xl font-semibold md:text-5xl lg:text-6xl',
          headingFont.className
        )}
      >
        <h1 className="mb-4 text-zinc-100">
          Transforming Ideas into Digital Reality.
        </h1>
        <div className="animate-fade-in-up bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text pb-2 text-3xl font-semibold text-transparent md:text-4xl lg:text-5xl">
          Converting Coffee into Code
        </div>
      </div>

      <div className="relative z-10 mt-12 max-w-2xl text-lg leading-relaxed text-zinc-200 sm:text-xl">
        Full-stack developer with powerful design skills. Proficient in creating
        beautiful, cohesive interfaces that work end-to-end.
      </div>

      <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
        <LearnMoreButton />
        <AboutMeButton />
      </div>
      <div className="absolute -left-2 -top-2 h-4 w-4 animate-pulse-slow rounded-full bg-violet-500/20 blur-sm" />
      <div
        className="absolute -right-4 top-8 h-2 w-2 animate-pulse-slow rounded-full bg-cyan-500/20 blur-sm"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};
