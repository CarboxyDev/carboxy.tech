import { GithubIcon, MailIcon, TwitterIcon } from '@/components/Icons';
import { SocialButton } from '@/components/SocialButton';
import { LINKS } from '@/lib/config/links';
import { PenTool } from 'lucide-react';
import Image from 'next/image';

const Details = () => {
  return (
    <div className="mr-auto flex flex-row items-center gap-x-3 sm:gap-x-6">
      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"></div>
        <div className="relative">
          <Image
            src={'/logo.png'}
            alt={'Logo'}
            height={48}
            width={48}
            className="rounded-full transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="flex flex-col text-sm sm:text-base">
        <div className="font-medium text-zinc-100">CarboxyDev</div>
        <div className="text-zinc-400">Full-stack Developer</div>
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="ml-auto flex gap-x-2">
      <SocialButton site="Twitter/X" url={LINKS.twitter}>
        <TwitterIcon className="size-4 text-zinc-400" />
      </SocialButton>
      <SocialButton site="Github" url={LINKS.github}>
        <GithubIcon className="size-[18px] text-zinc-400" />
      </SocialButton>
      <SocialButton site="Email" url={LINKS.email}>
        <MailIcon className="size-[18px] text-zinc-400" />
      </SocialButton>
      <SocialButton site="Blog" url={LINKS.blog}>
        <PenTool className="size-[18px] text-zinc-400" />
      </SocialButton>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="flex flex-row py-3 sm:py-4">
      <Details />
      <Socials />
    </div>
  );
};
