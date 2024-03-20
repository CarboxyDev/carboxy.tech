import { HighlightText } from '@/components/Atoms';
import { MailIcon } from '@/components/Icons';
import { CONFIG } from '@/lib/config';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

export const HeroSection = () => {
  return (
    <section className="relative mb-44 flex flex-col">
      <h3 className="mb-4 text-sm font-medium text-zinc-400 lg:absolute lg:-left-32 lg:mb-0">
        About
      </h3>
      <h1 className="text-5xl font-semibold text-zinc-50">
        Hey. I&apos;m CarboxyDev.
      </h1>
      <p className="mt-8 text-lg leading-8 text-zinc-300">
        Front-end developer with strong UI/UX skills. Proficient in building{' '}
        <HighlightText>beautiful,</HighlightText>{' '}
        <HighlightText>user-friendly</HighlightText> interfaces using React.js,
        Next.js, and Tailwind CSS.
      </p>
      <div className="mt-8 flex gap-x-5">
        <a href={CONFIG.links.email} className="group">
          <MailIcon className="h-6 w-6 text-zinc-500 group-hover:text-primary-500" />
        </a>
        <a target="_blank" href={CONFIG.links.github} className="group">
          <GitHubLogoIcon className="h-6 w-6 text-zinc-500 group-hover:text-primary-500" />
        </a>
        <a target="_blank" href={CONFIG.links.twitter} className="group">
          <TwitterLogoIcon className="h-6 w-6 text-zinc-500 group-hover:text-primary-500" />
        </a>
      </div>
    </section>
  );
};
