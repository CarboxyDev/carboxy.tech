import { GithubIcon, MailIcon, TwitterIcon } from '@/components/Icons';
import { SocialButton } from '@/components/SocialButton';
import { LINKS } from '@/lib/config/links';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';

const Details = () => {
  return (
    <div className="mr-auto flex flex-row gap-x-3 sm:gap-x-6">
      <div className="mr-auto">
        <Image
          src={'/logo.png'}
          alt={'Logo'}
          height={48}
          width={48}
          className="rounded-full"
        />
      </div>
      <div className="ml-auto flex flex-col text-sm sm:text-base">
        <div className="font-medium">CarboxyDev</div>
        <div className="text-zinc-500">Full-stack Developer</div>
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="ml-auto flex gap-x-3">
      <SocialButton site="Blog" url={LINKS.blog}>
        <BookOpen className="size-[18px] text-zinc-400" />
      </SocialButton>
      <SocialButton site="Email" url={LINKS.email}>
        <MailIcon className="size-[18px] text-zinc-400" />
      </SocialButton>
      <SocialButton site="Twitter/X" url={LINKS.twitter}>
        <TwitterIcon className="size-4 text-zinc-400" />
      </SocialButton>
      <SocialButton site="Github" url={LINKS.github}>
        <GithubIcon className="size-[18px] text-zinc-400" />
      </SocialButton>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="flex flex-row">
      <Details />
      <Socials />
    </div>
  );
};
