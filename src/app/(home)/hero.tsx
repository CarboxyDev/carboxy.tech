import { GithubIcon } from '@/components/Icons';
import { HighlightText } from '@/components/Text';
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
        <h1 className="text-zinc-100">Turning Visions into Reality.</h1>
        <h1 className="text-stone-600">Building Extraordinary Webapps.</h1>
      </div>
      <div className="mt-7 text-zinc-200 sm:w-[540px] sm:text-lg md:w-[580px] lg:w-[720px]">
        Full-stack developer with powerful UI/UX skills. Proficient in creating{' '}
        <HighlightText>beautiful, cohesive</HighlightText> interfaces using
        technologies like React.js, Next.js and Node.js
      </div>
      <div className="mt-6">
        <a href={LINKS.github} target="_blank">
          <Button className="group h-15 select-none gap-x-3 overflow-hidden bg-primary-500/10 px-7 py-4 text-primary-500 hover:bg-primary-500/15">
            <GithubIcon className="h-7 w-7" />
            <span className="text-xl font-medium">Github</span>
          </Button>
        </a>
      </div>
    </section>
  );
};
