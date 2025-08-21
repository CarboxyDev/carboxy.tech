'use client';

import { Button } from '@/components/vendor/button';
import { ArrowBigDownDash, ArrowRight } from 'lucide-react';

export const LearnMoreButton = () => {
  return (
    <Button
      onClick={() => {
        const elem = document.getElementById('projects');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }}
      className="group relative h-15 select-none gap-x-3 overflow-hidden border border-primary-500/20 bg-primary-500/10 px-7 py-4 text-primary-500 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:border-primary-400/40 hover:bg-primary-500/15 hover:shadow-xl hover:shadow-primary-500/20 active:scale-[0.98]"
    >
      <div className="via-primary-500/8 absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <ArrowBigDownDash className="relative z-10 h-5 w-5 transition-all duration-300 ease-in-out group-hover:translate-y-0.5 group-hover:text-primary-400" />
      <span className="relative z-10 text-[16px] font-medium transition-all duration-300 group-hover:text-primary-400">
        Explore my work
      </span>

      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-transparent via-primary-400/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
};

export const AboutMeButton = () => {
  return (
    <button
      onClick={() => {
        const elem =
          document.querySelector('[data-section="about"]') ||
          document.querySelector('section:nth-child(3)');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }}
      className="group relative h-15 select-none overflow-hidden rounded-lg border border-zinc-600/50 bg-gradient-to-r from-zinc-800/40 to-zinc-800/20 px-7 py-4 text-zinc-200 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:border-zinc-500/70 hover:from-zinc-700/50 hover:to-zinc-700/30 hover:text-white hover:shadow-xl hover:shadow-zinc-900/30 active:scale-[0.98]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-400/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-3 text-[16px] font-medium">
        Learn about me
        <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-100" />
      </span>

      <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-transparent via-zinc-400/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
};