import { GithubIcon, TwitterIcon } from '@/components/Icons';
import { SocialButton } from '@/components/SocialButton';
import { LINKS } from '@/lib/config/links';
import { MailIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer>
      <div className="ml-auto flex gap-x-3">
        <SocialButton site="Email" url={LINKS.email}>
          <MailIcon className="h-[18px] w-[18px] text-zinc-400" />
        </SocialButton>
        <SocialButton site="Twitter/X" url={LINKS.twitter}>
          <TwitterIcon className="h-4 w-4 text-zinc-400" />
        </SocialButton>
        <SocialButton site="Github" url={LINKS.github}>
          <GithubIcon className="h-4 w-4 text-zinc-400" />
        </SocialButton>
      </div>
      <div className="mt-8 font-light text-zinc-300">
        © 2024 CarboxyDev. All rights reserved.
      </div>
    </footer>
  );
};
