'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { PROJECTS } from '@/lib/config/projects';
import { motion } from 'framer-motion';

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
          <h3 className="group text-3xl font-bold text-white">
            <a
              href={href}
              target="_blank"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-primary-400"
            >
              {title}
              <ExternalLink className="h-5 w-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
          </h3>
        </div>

        <p className="max-w-lg text-lg leading-relaxed text-zinc-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <ProjectTag key={index} label={tag} />
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <a href={href} target="_blank">
            <Button className="h-12 gap-2 bg-primary-600 px-6 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-700 hover:shadow-xl">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          </a>
          {github && (
            <a href={github} target="_blank">
              <Button
                variant="outline"
                className="h-12 gap-2 border-zinc-700 px-6 font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:text-white"
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="max-w-2xl flex-1">
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
                align="left"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
