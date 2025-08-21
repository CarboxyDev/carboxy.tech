'use client';

import { Button } from '@/components/vendor/button';
import { ArrowBigDownDash } from 'lucide-react';

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