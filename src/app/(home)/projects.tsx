import { Project } from '@/components/Project';
import { SectionHeading } from '@/components/Text';
import { PROJECTS } from '@/lib/config/projects';

export const ProjectSection = () => {
  return (
    <section className="flex flex-col sm:mb-44">
      <SectionHeading title="Featured Projects" />
      <div className="mt-50">
        <div className="flex flex-col gap-y-32 lg:gap-y-40">
          {PROJECTS.map((project, index) => {
            const align = index % 2 == 0 ? 'left' : 'right';

            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                href={project.href}
                tags={project.tags}
                images={project.images}
                align={align}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
