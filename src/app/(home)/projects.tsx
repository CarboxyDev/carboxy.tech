import Project from '@/components/Project';
import { CONFIG } from '@/lib/config';

export const ProjectSection = () => {
  return (
    <section className="relative mb-32 flex flex-col sm:mb-44">
      <h3 className="mb-6 text-sm font-medium text-zinc-400 lg:absolute lg:-left-32 lg:mb-0">
        Projects
      </h3>
      <div className="flex flex-col gap-y-20 sm:gap-y-32">
        {CONFIG.projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
};