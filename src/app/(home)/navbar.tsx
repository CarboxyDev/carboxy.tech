import { MailIcon, TwitterIcon } from '@/components/Icons';
import { SocialButton } from '@/components/SocialButton';
import { LINKS } from '@/lib/config/links';
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
      <SocialButton site="Email" url={LINKS.email}>
        <MailIcon className="h-[18px] w-[18px] text-zinc-500" />
      </SocialButton>
      <SocialButton site="Twitter/X" url={LINKS.twitter}>
        <TwitterIcon className="h-4 w-4 text-zinc-500" />
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
