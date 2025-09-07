'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { getFeaturedProjects } from '@/lib/config/projects';
import { motion } from 'framer-motion';

const ENABLE_CAROUSEL = false;

import { GithubIcon } from '@/components/icons/social-icons';
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
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

interface Props {
  title: string;
  description: string;
  href: string;
  github?: string;
  techStack: string[];
  images: string[];
  align: 'left' | 'right';
}

const ProjectCard = (props: Props) => {
  const { href, title, description, techStack, images, align, github } = props;

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
          {techStack.map((tech, index) => (
            <ProjectTag key={index} label={tech} />
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
                <GithubIcon className="size-5" />
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
                  <ImageWithSkeleton
                    src={'/' + image}
                    alt={`${title} preview ${imageIndex + 1}`}
                    height={400}
                    width={640}
                    priority={imageIndex === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <ImageWithSkeleton
            src={'/' + images[0]}
            alt={`${title} preview`}
            height={400}
            width={640}
            priority
          />
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
          {getFeaturedProjects().map((project, index) => (
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
                techStack={project.techStack}
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
