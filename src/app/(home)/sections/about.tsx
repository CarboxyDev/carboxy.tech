'use client';

import { AboutCard } from '@/components/about-card';
import { SectionHeading } from '@/components/home/section-heading';
import { JourneyTimeline } from '@/components/journey-timeline';
import { SkillsList } from '@/components/skills-list';
import { journeyEvents, skills } from '@/lib/config/about';
import { cn } from '@/lib/utils';
import { Code2, Gamepad2, MapPin, TrendingUp, Users } from 'lucide-react';
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
              >
                <SkillsList skills={skills} />
              </AboutCard>

              <AboutCard
                id="my-journey"
                title="My Journey"
                icon={MapPin}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
                className="md:row-span-2"
              >
                <JourneyTimeline events={journeyEvents} />
              </AboutCard>

              <AboutCard
                id="work-style"
                title="Work Style"
                icon={Users}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
              >
                <p className="text-sm leading-relaxed text-zinc-300">
                  I thrive in environments where I can learn and grow while
                  solving real-world problems. I believe in rapid iteration,
                  continuous learning, and leveraging AI to amplify
                  productivity.
                </p>
              </AboutCard>

              <AboutCard
                id="learning-growth"
                title="Learning & Growth"
                icon={TrendingUp}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
              >
                <p className="text-sm leading-relaxed text-zinc-300">
                  I'm constantly exploring emerging technologies and
                  experimenting with cutting-edge tools. Currently diving deep
                  into AI/ML technologies, exploring innovative ways to create
                  value and boost development efficiency.
                </p>
              </AboutCard>

              <AboutCard
                id="beyond-code"
                title="Beyond Code"
                icon={Gamepad2}
                hoveredCard={hoveredCard}
                onHover={setHoveredCard}
              >
                <p className="text-sm leading-relaxed text-zinc-300">
                  When I'm not coding, I enjoy playing video games, browsing
                  Reddit & X, listening to music, and hitting the gym.
                </p>
              </AboutCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
