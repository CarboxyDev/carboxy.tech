'use client';

import {
  CSSLogo,
  ExpressjsLogo,
  GraphQLLogo,
  HTMLLogo,
  JavascriptLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  RestAPILogo,
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
import { motion, useInView } from 'framer-motion';
import React from 'react';

interface SkillItem {
  label: string;
  icon: React.ReactElement;
  color: string;
}

const SKILLS_FRONTEND: SkillItem[] = [
  {
    label: 'React.js',
    icon: <ReactLogo />,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    label: 'Next.js',
    icon: <NextjsLogo />,
    color: 'from-gray-800 to-gray-600',
  },
  {
    label: 'Typescript',
    icon: <TypescriptLogo />,
    color: 'from-blue-600 to-blue-400',
  },
  {
    label: 'Javascript',
    icon: <JavascriptLogo />,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    label: 'TailwindCSS',
    icon: <TailwindLogo />,
    color: 'from-cyan-400 to-teal-400',
  },
  { label: 'HTML', icon: <HTMLLogo />, color: 'from-orange-500 to-red-500' },
  { label: 'CSS', icon: <CSSLogo />, color: 'from-blue-500 to-cyan-500' },
];

const SKILLS_BACKEND: SkillItem[] = [
  {
    label: 'Node.js',
    icon: <NodejsLogo />,
    color: 'from-green-500 to-green-600',
  },
  {
    label: 'Express.js',
    icon: <ExpressjsLogo />,
    color: 'from-gray-700 to-gray-500',
  },
  {
    label: 'REST API',
    icon: <RestAPILogo />,
    color: 'from-blue-500 to-sky-600',
  },
  {
    label: 'GraphQL',
    icon: <GraphQLLogo />,
    color: 'from-pink-500 to-purple-600',
  },
  { label: 'SQL', icon: <SQLLogo />, color: 'from-amber-500 to-yellow-600' },
];

const SkillBlock = (props: SkillItem & { index: number }) => {
  const { label, icon, color, index } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Tooltip delayDuration={300}>
        <TooltipTrigger>
          <div
            className={`group relative size-20 cursor-pointer rounded-xl border border-zinc-700/50 bg-gradient-to-br ${color} p-[1px] transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-800/50`}
          >
            <div className="flex size-full items-center justify-center rounded-xl bg-zinc-900/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-800/90">
              {React.cloneElement(icon, {
                className:
                  'size-8 transition-all duration-300 ease-out group-hover:size-9 group-hover:drop-shadow-sm',
              })}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="border-zinc-700 bg-zinc-800 text-zinc-100"
        >
          <p className="text-sm font-medium">{label}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};

const SkillCategory = ({
  title,
  skills,
  direction,
}: {
  title: string;
  skills: SkillItem[];
  direction: 'left' | 'right';
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === 'left' ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <motion.div
          className={`h-px flex-1 bg-gradient-to-r ${direction === 'left' ? 'from-transparent to-zinc-700' : 'from-zinc-700 to-transparent'}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h3
          className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className={`h-px flex-1 bg-gradient-to-r ${direction === 'left' ? 'from-zinc-700 to-transparent' : 'from-transparent to-zinc-700'}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {skills.map((skill, index) => (
          <SkillBlock
            key={skill.label}
            label={skill.label}
            icon={skill.icon}
            color={skill.color}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const titleRef = React.useRef(null);
  const titleIsInView = useInView(titleRef, { once: true });

  return (
    <div className="relative">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <SectionHeading title="Technical Skills" />
      </motion.div>

      <div className="space-y-20">
        <SkillCategory
          title="Frontend Development"
          skills={SKILLS_FRONTEND}
          direction="left"
        />

        <SkillCategory
          title="Backend Development"
          skills={SKILLS_BACKEND}
          direction="right"
        />
      </div>
      <motion.div
        className="absolute -top-20 left-1/4 size-40 rounded-full bg-blue-500/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 size-40 rounded-full bg-purple-500/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
};
