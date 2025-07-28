import { Button } from '@/components/vendor/button';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { DM_Mono } from 'next/font/google';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  href: string;
  github?: string;
  tags: string[];
  images: string[];
  align: 'left' | 'right';
}

export const Project = (props: Props) => {
  const { href, title, description, tags, images, align, github } = props;

  return (
    <section
      className={cn(
        'flex flex-col gap-8 lg:gap-12',
        align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      )}
    >
      <div className={cn('flex-1 space-y-6', align === 'left' ? 'lg:mr-8' : 'lg:ml-8')}>
        <div>
          <h3 className="text-3xl font-bold text-white group">
            <a 
              href={href} 
              target="_blank"
              className="hover:text-primary-400 transition-colors duration-200 inline-flex items-center gap-2"
            >
              {title}
              <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </h3>
        </div>
        
        <p className="text-lg leading-relaxed text-zinc-300 max-w-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <ProjectTag key={index} label={tag} />
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          <a href={href} target="_blank">
            <Button className="h-12 px-6 gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </a>
          {github && (
            <a href={github} target="_blank">
              <Button variant="outline" className="h-12 px-6 gap-2 border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium transition-all duration-200">
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="flex-1 max-w-2xl">
        <div className="relative group rounded-xl border-4 border-zinc-700/80 bg-zinc-900/50 shadow-2xl transition-all duration-300 hover:border-zinc-600/80 hover:shadow-3xl hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent z-10" />
          <Image
            src={'/' + images[0]}
            alt={`${title} preview`}
            height={400}
            width={640}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
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
        'inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-500/20 hover:border-primary-500/30',
        badgeFont.className
      )}
    >
      {label}
    </span>
  );
};
