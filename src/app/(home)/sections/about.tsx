'use client';

import { AboutCard } from '@/components/about-card';
import { SectionHeading } from '@/components/home/section-heading';
import { JourneyTimeline } from '@/components/journey-timeline';
import { SkillsList } from '@/components/skills-list';
import { cn } from '@/lib/utils';
import { Code2, MapPin } from 'lucide-react';
import { useState } from 'react';

export const About = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      className={cn('pb-32 pt-20 lg:pb-40 lg:pt-32')}
      data-section="about"
    >
      <div className="space-y-16">
        <SectionHeading title="About Me" />

        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="grid gap-6 md:auto-rows-min md:grid-cols-2 md:grid-rows-[auto_auto_auto] lg:gap-8">
              <AboutCard
                id="what-i-do"
                title="What I Do"
                icon={Code2}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
                className="md:row-span-2"
              >
                <SkillsList />
              </AboutCard>
              <AboutCard
                id="my-journey"
                title="My Journey"
                icon={MapPin}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
                className="md:row-span-2"
              >
                <JourneyTimeline />
              </AboutCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
