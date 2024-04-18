import { Button } from '@/components/vendor/button';
import { cn } from '@/lib/utils';
import { GlobeIcon } from '@radix-ui/react-icons';
import { DM_Mono } from 'next/font/google';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  href: string;
  tags: string[];
  images: string[];
  align: 'left' | 'right';
}

export const Project = (props: Props) => {
  const { href, title, description, tags, images, align } = props;

  return (
    <section
      className={cn(
        'flex flex-col gap-x-6',
        align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse' // For desktop
      )}
    >
      <div className={cn('', align === 'left' ? 'lg:mr-auto' : 'lg:ml-auto')}>
        <h3 className="link link-underline link-underline-primary inline text-3xl font-semibold  hover:text-primary-400">
          <a href={href} target="_blank">
            {title}
          </a>
        </h3>
        <p className="mt-7 w-80 text-base leading-7 text-zinc-300 xl:w-100">
          {description}
        </p>
        <div className="mt-9 flex gap-x-[6px]">
          {tags.map((tag, index) => {
            return <ProjectTag key={index} label={tag} />;
          })}
        </div>
        <div className="mt-8">
          <a href={href} target="_blank">
            <Button className="h-12 gap-x-2 rounded">
              <GlobeIcon className="h-6 w-6" />
              <span className="font-medium">Visit Project</span>
            </Button>
          </a>
        </div>
      </div>
      <div
        className={cn(
          'mt-12 lg:mt-0',
          align === 'left' ? 'lg:ml-auto' : 'lg:mr-auto'
        )}
      >
        <Image
          src={'/' + images[0]}
          alt={images[0]}
          height={305}
          width={540}
          className="rounded-lg border border-zinc-800"
        />
      </div>
    </section>
  );
};

const badgeFont = DM_Mono({
  weight: ['500'],
  subsets: ['latin'],
});

const ProjectTag = (props: { label: string }) => {
  const { label } = props;
  return (
    <span
      className={cn(
        'rounded bg-primary-500/10 px-3 py-2 text-sm font-medium text-primary-500',
        badgeFont.className
      )}
    >
      {label}
    </span>
  );
};
