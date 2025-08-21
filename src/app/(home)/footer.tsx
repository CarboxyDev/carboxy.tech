import { GithubIcon, MailIcon, TwitterIcon } from '@/components/icons/social-icons';
import { SocialButton } from '@/components/social-button';
import { LINKS } from '@/lib/config/links';
import { NotebookPen } from 'lucide-react';

export const Footer = () => {
  return (
    <footer>
      <div className="ml-auto flex gap-x-3">
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
      <div className="mt-8 font-light text-zinc-300">
        © 2025 CarboxyDev. All rights reserved.
      </div>
    </footer>
  );
};
