
import { MailIcon, TwitterIcon } from '@/components/icons/social-icons';
import { SocialButton } from '@/components/social-button';
import { LINKS } from '@/lib/config/links';
import { GithubIcon, NotebookPen } from 'lucide-react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between py-3 sm:py-4">
      <div className="flex flex-row items-center gap-x-3 sm:gap-x-6">
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
          <div className="flex items-center gap-x-2">
            <div className="text-lg font-medium text-zinc-100">CarboxyDev</div>
          </div>
          <div className="text-sm text-zinc-400">Full-stack Developer</div>
        </div>
      </div>

      <div className="flex gap-x-3">
        <SocialButton site="X (Formerly Twitter)" url={LINKS.twitter}>
          <TwitterIcon className="size-4 text-zinc-400" />
        </SocialButton>
        <SocialButton site="Github" url={LINKS.github}>
          <GithubIcon className="size-[18px] text-zinc-400" />
        </SocialButton>
        <SocialButton site="Email" url={LINKS.email}>
          <MailIcon className="size-[18px] text-zinc-400" />
        </SocialButton>
        <SocialButton site="Blog" url={LINKS.blog}>
          <NotebookPen className="size-[18px] text-zinc-400" />
        </SocialButton>
      </div>
    </div>
  );
};
