import { FloatingParticles } from '@/components/floating-particles';
import { HeroContent } from '@/components/hero-content';
import { LearnMoreButton } from '@/components/learn-more-button';

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col">
      <FloatingParticles />
      <HeroContent />
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
