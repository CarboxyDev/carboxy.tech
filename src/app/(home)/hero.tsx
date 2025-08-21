import { FloatingParticles } from '@/components/home/floating-particles';
import { LearnMoreButton } from '@/components/home/learn-more-button';
import { cn } from '@/lib/utils';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

export const HeroSection = () => {
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
        <div className="animate-fade-in-up bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
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
