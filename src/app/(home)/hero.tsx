'use client';

import { Button } from '@/components/vendor/button';
import { cn } from '@/lib/utils';
import { ArrowBigDownDash } from 'lucide-react';
import { Outfit } from 'next/font/google';
import { useEffect, useState } from 'react';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="animate-float-magical absolute rounded-full bg-gradient-to-r from-violet-400/20 to-purple-400/20 blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col">
      <FloatingParticles />

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

      <div className="relative z-10 mt-8 leading-relaxed text-zinc-200 sm:w-[540px] sm:text-lg md:w-[580px] lg:w-[680px] xl:w-[620px]">
        Full-stack developer with powerful design skills. Proficient in creating
        beautiful, cohesive interfaces that work end-to-end.
      </div>

      <div className="relative z-10 mt-8">
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
