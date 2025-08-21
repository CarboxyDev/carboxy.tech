'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { PROJECTS } from '@/lib/config/projects';
import { motion } from 'framer-motion';

const ENABLE_CAROUSEL = false;

import { Button } from '@/components/vendor/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/vendor/carousel';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
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

const ProjectCard = (props: Props) => {
  const { href, title, description, tags, images, align, github } = props;

  return (
    <section
      className={cn(
        'flex flex-col gap-8 lg:gap-12',
        align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      )}
    >
      <div
        className={cn(
          'flex-1 space-y-6',
          align === 'left' ? 'lg:mr-8' : 'lg:ml-8'
        )}
      >
        <div>
          <h3 className="group text-3xl font-bold text-white lg:text-4xl">
            <a
              href={href}
              target="_blank"
              className="inline-flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-primary-400"
            >
              {title}
              <ExternalLink className="h-6 w-6 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
            </a>
          </h3>
        </div>

        <p className="max-w-lg leading-relaxed text-zinc-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <ProjectTag key={index} label={tag} />
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <a href={href} target="_blank">
            <Button className="group h-12 gap-2 bg-gradient-to-r from-primary-600 to-primary-700 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary-700 hover:to-primary-800 hover:shadow-xl active:scale-95">
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>View Project</span>
            </Button>
          </a>
          {github && (
            <a href={github} target="_blank">
              <Button
                variant="outline"
                className="group h-12 gap-2 border border-zinc-700/70 bg-zinc-800/50 px-6 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-700/50 hover:text-white active:scale-95"
              >
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View Code</span>
              </Button>
            </a>
          )}
        </div>
      </div>

      <div className="max-w-2xl flex-1">
        {ENABLE_CAROUSEL && images.length > 1 ? (
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, imageIndex) => (
                <CarouselItem key={imageIndex}>
                  <div className="hover:shadow-3xl group relative overflow-hidden rounded-xl border-4 border-zinc-700/80 bg-zinc-900/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-zinc-600/80">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/20 to-transparent" />
                    <Image
                      src={'/' + image}
                      alt={`${title} preview ${imageIndex + 1}`}
                      height={400}
                      width={640}
                      className="h-auto w-full object-cover"
                      priority={imageIndex === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="hover:shadow-3xl group relative overflow-hidden rounded-xl border-4 border-zinc-700/80 bg-zinc-900/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-zinc-600/80">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/20 to-transparent" />
            <Image
              src={'/' + images[0]}
              alt={`${title} preview`}
              height={400}
              width={640}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        )}
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
        'inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-sm font-medium text-primary-400 transition-colors hover:border-primary-500/30 hover:bg-primary-500/20',
        badgeFont.className
      )}
    >
      {label}
    </span>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col sm:mb-44">
      <SectionHeading title="Featured Projects" />
      <motion.div
        className="mt-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col gap-y-24 sm:gap-y-32 lg:gap-y-40">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                href={project.href}
                tags={project.tags}
                images={project.images}
                align={index % 2 === 0 ? 'left' : 'right'}
                github={project.github ?? undefined}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
