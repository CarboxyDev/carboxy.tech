import { HighlightText } from '@/components/Atoms';
import { GithubIcon } from '@/components/Icons';
import { Button } from '@/components/vendor/button';
import { LINKS } from '@/lib/config/links';
import { cn } from '@/lib/utils';
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
        <h1 className="text-zinc-50">Turning Visions into Reality.</h1>
        <h1 className="text-stone-500">Building Extraordinary Websites.</h1>
      </div>
      <div className="mt-7 text-zinc-200 sm:w-[540px] sm:text-lg md:w-[580px] lg:w-[640px]">
        Full-stack developer with powerful UI/UX skills. Proficient in creating{' '}
        <HighlightText>beautiful, responsive</HighlightText> interfaces using
        technologies like React.js, Next.js.
      </div>
      <div className="mt-6">
        <a href={LINKS.github} target="_blank">
          <Button className="group relative h-15 select-none gap-x-3 overflow-hidden bg-primary-500/10 px-7 py-4 text-primary-500 hover:bg-primary-500/15 ">
            <GithubIcon className="h-7 w-7" />
            <span className="text-xl font-medium">Github</span>
            <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
              <div className="relative h-full w-8 bg-primary-500/5"></div>
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
};
