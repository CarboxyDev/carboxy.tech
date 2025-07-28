"use client"

import { Project } from '@/components/Project';
import { SectionHeading } from '@/components/Text';
import { PROJECTS } from '@/lib/config/projects';
import { motion } from 'framer-motion';

export const ProjectSection = () => {
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
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Project
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
