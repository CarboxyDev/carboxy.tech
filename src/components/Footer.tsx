import { GithubIcon, MailIcon, TwitterIcon } from '@/components/Icons';
import { SocialButton } from '@/components/SocialButton';
import { LINKS } from '@/lib/config/links';
import { PenTool } from 'lucide-react';

export const Footer = () => {
  return (
    <footer>
      <div className="ml-auto flex gap-x-3">
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
      <div className="mt-8 font-light text-zinc-300">
        © 2025 CarboxyDev. All rights reserved. Made with ❤️
      </div>
    </footer>
  );
};
