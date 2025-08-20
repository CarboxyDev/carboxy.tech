'use client';

import {
  ExpressjsLogo,
  FigmaLogo,
  GitLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  SQLLogo,
  TailwindLogo,
  TypescriptLogo,
} from '@/components/Icons';
import { SectionHeading } from '@/components/Text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/vendor/tooltip';
import { cn } from '@/lib/utils';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import React from 'react';

type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design';

interface Skill {
  label: string;
  icon: React.ReactElement;
  gradient: string;
  categories: SkillCategory[];
}

const SKILLS: Skill[] = [
  {
    label: 'React.js',
    icon: <ReactLogo />,
    gradient: 'from-blue-400/20 to-cyan-400/20',
    categories: ['frontend'],
  },
  {
    label: 'Next.js',
    icon: <NextjsLogo />,
    gradient: 'from-gray-600/20 to-gray-400/20',
    categories: ['frontend'],
  },
  {
    label: 'TypeScript',
    icon: <TypescriptLogo />,
    gradient: 'from-blue-600/20 to-blue-400/20',
    categories: ['frontend', 'backend'],
  },
  {
    label: 'TailwindCSS',
    icon: <TailwindLogo />,
    gradient: 'from-cyan-400/20 to-teal-400/20',
    categories: ['frontend'],
  },
  {
    label: 'Node.js',
    icon: <NodejsLogo />,
    gradient: 'from-green-500/20 to-green-400/20',
    categories: ['backend'],
  },
  {
    label: 'Express.js',
    icon: <ExpressjsLogo />,
    gradient: 'from-gray-700/20 to-gray-500/20',
    categories: ['backend'],
  },
  {
    label: 'SQL',
    icon: <SQLLogo />,
    gradient: 'from-yellow-700/20 to-yellow-500/20',
    categories: ['backend'],
  },
  {
    label: 'Git',
    icon: <GitLogo />,
    gradient: 'from-orange-500/20 to-red-500/20',
    categories: ['tools'],
  },
  {
    label: 'Figma',
    icon: <FigmaLogo />,
    gradient: 'from-purple-500/20 to-pink-500/20',
    categories: ['design'],
  },
];

const CATEGORY_COLORS = {
  frontend: 'from-blue-500/30 to-cyan-500/30',
  backend: 'from-green-500/30 to-emerald-500/30',
  tools: 'from-orange-500/30 to-red-500/30',
  design: 'from-purple-500/30 to-pink-500/30',
};

const SkillCard = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  const cardSpring = useSpring({
    opacity: isVisible ? 1 : 0.3,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
    config: { tension: 200, friction: 25 },
  });

  const cardContent = (
    <motion.div
      whileHover={isVisible ? { scale: 1.05, y: -2 } : {}}
      whileTap={isVisible ? { scale: 0.98 } : {}}
      className={cn(
        'group relative size-20 rounded-2xl border border-zinc-700/40 backdrop-blur-sm transition-all duration-300',
        `bg-gradient-to-br ${skill.gradient}`,
        !isVisible && 'grayscale',
        isVisible ? 'hover:border-zinc-600/60 cursor-pointer' : 'cursor-default'
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-800/70" />
      
      <div className="relative flex size-full items-center justify-center">
        {React.cloneElement(skill.icon, {
          className: cn(
            'size-8 transition-all duration-300 ease-out',
            isVisible && 'group-hover:drop-shadow-lg'
          ),
        })}
      </div>
      
      <div className={cn(
        'absolute inset-0 rounded-2xl bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300',
        `${CATEGORY_COLORS[skill.categories[0]]} from-transparent`,
        isVisible && 'group-hover:opacity-100'
      )} />
    </motion.div>
  );

  return (
    <animated.div style={cardSpring}>
      {isVisible ? (
        <Tooltip delayDuration={200}>
          <TooltipTrigger>
            {cardContent}
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="border-zinc-600/50 bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 text-zinc-100 backdrop-blur-sm shadow-xl"
          >
            <div className="flex items-center gap-3 px-1 py-0.5">
              <div className={cn(
                'flex size-8 items-center justify-center rounded-lg',
                `bg-gradient-to-br ${skill.gradient}`
              )}>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-zinc-900/60 to-zinc-800/40" />
                {React.cloneElement(skill.icon, {
                  className: 'relative size-4 text-white',
                })}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{skill.label}</p>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      ) : (
        cardContent
      )}
    </animated.div>
  );
};

const SkillGrid = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const categoryGroups = React.useMemo(() => {
    const groups: Record<SkillCategory, Skill[]> = {
      frontend: [],
      backend: [],
      tools: [],
      design: [],
    };
    
    SKILLS.forEach(skill => {
      skill.categories.forEach(category => {
        groups[category].push(skill);
      });
    });
    
    return groups;
  }, []);

  const filteredSkills = React.useMemo(() => {
    if (!activeFilter) return SKILLS;
    return SKILLS.filter(skill => skill.categories.includes(activeFilter as SkillCategory));
  }, [activeFilter]);

  return (
    <div className="relative w-full">
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(null)}
          className={cn(
            'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
            activeFilter === null
              ? 'border-primary-500/50 bg-primary-500/10 text-primary-300'
              : 'border-zinc-700/40 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600/60 hover:bg-zinc-700/50'
          )}
        >
          All Skills
          <span className="text-xs text-zinc-500">({SKILLS.length})</span>
        </motion.button>
        
        {Object.entries(categoryGroups).map(([category, skills]) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(activeFilter === category ? null : category)}
            className={cn(
              'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              activeFilter === category
                ? 'border-primary-500/50 bg-primary-500/10 text-primary-300'
                : 'border-zinc-700/40 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600/60 hover:bg-zinc-700/50'
            )}
          >
            <div className={cn(
              'size-2 rounded-full',
              category === 'frontend' && 'bg-blue-500',
              category === 'backend' && 'bg-green-500',
              category === 'tools' && 'bg-orange-500',
              category === 'design' && 'bg-purple-500'
            )} />
            <span className="capitalize">{category}</span>
            <span className="text-xs text-zinc-500">({skills.length})</span>
          </motion.button>
        ))}
      </div>

      <div className="relative py-12">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>
        
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <polygon points="30,2 50,17 50,35 30,50 10,35 10,17" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="text-zinc-400" />
          </svg>
        </div>

        <motion.div 
          layout
          className="relative grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 justify-items-center max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {SKILLS.map((skill, index) => {
              const isVisible = filteredSkills.includes(skill);
              const visibleIndex = filteredSkills.indexOf(skill);
              const staggerDelay = isVisible ? visibleIndex * 0.05 : index * 0.02;
              
              return (
                <motion.div
                  key={skill.label}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0.3,
                    scale: isVisible ? 1 : 0.9,
                    y: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ 
                    duration: 0.4,
                    delay: staggerDelay,
                    ease: "easeOut",
                    layout: { duration: 0.3 }
                  }}
                >
                  <SkillCard skill={skill} isVisible={isVisible} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
};

export const SkillsSection = () => {
  const titleRef = React.useRef(null);
  const titleIsInView = useInView(titleRef, { once: true });
  const gridRef = React.useRef(null);
  const gridIsInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <div className="relative">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <SectionHeading title="What I Work With" />
      </motion.div>

      <motion.div
        ref={gridRef}
        initial={{ opacity: 0, y: 20 }}
        animate={gridIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SkillGrid />
      </motion.div>
    </div>
  );
};
