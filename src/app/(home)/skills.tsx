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
}

const SKILLS_FRONTEND: SkillItem[] = [
  { label: 'React.js', icon: <ReactLogo /> },
  { label: 'Next.js', icon: <NextjsLogo /> },
  { label: 'Typescript', icon: <TypescriptLogo /> },
  { label: 'Javascript', icon: <JavascriptLogo /> },
  { label: 'TailwindCSS', icon: <TailwindLogo /> },
  { label: 'HTML', icon: <HTMLLogo /> },
  { label: 'CSS', icon: <CSSLogo /> },
];

const SKILLS_BACKEND: SkillItem[] = [
  { label: 'Node.js', icon: <NodejsLogo /> },
  { label: 'Express.js', icon: <ExpressjsLogo /> },
  { label: 'REST API', icon: <RestAPILogo /> },
  { label: 'GraphQL', icon: <GraphQLLogo /> },
  { label: 'SQL', icon: <SQLLogo /> },
];

const SkillBlock = (props: SkillItem) => {
  const { label, icon } = props;

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger>
        <div className="group flex size-16 cursor-pointer items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
          {React.cloneElement(icon, {
            className:
              'size-7 group-hover:size-9 transition-all duration-300 ease-in-out',
          })}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const SkillsSection = () => {
  const frontendRef = React.useRef(null);
  const backendRef = React.useRef(null);

  const frontendIsInView = useInView(frontendRef, { once: true });
  const backendIsInView = useInView(backendRef, { once: true });

  return (
    <div>
      <SectionHeading title="Technical Skills" />
      <div className="mt-28">
        <h3 className="font-medium text-stone-600">FRONTEND</h3>
      </div>
      <motion.div
        ref={frontendRef}
        initial={{
          x: -100,
          opacity: 0.75,
        }}
        animate={frontendIsInView ? { x: 0, opacity: 1.0 } : {}}
        transition={{
          bounce: 0.5,
          duration: 0.75,
        }}
        className="mt-10 flex w-80 flex-wrap gap-3 sm:w-140 md:w-160"
      >
        {SKILLS_FRONTEND.map((skill, index) => {
          return (
            <SkillBlock key={index} label={skill.label} icon={skill.icon} />
          );
        })}
      </motion.div>
      <div className="mt-16">
        <h3 className="font-medium text-stone-600">BACKEND</h3>
      </div>
      <motion.div
        ref={backendRef}
        initial={{
          x: 100,
          opacity: 0.75,
        }}
        animate={backendIsInView ? { x: 0, opacity: 1.0 } : {}}
        transition={{
          bounce: 0.5,
          duration: 0.75,
        }}
        className="mt-10 flex w-80 flex-wrap gap-2 sm:w-140 md:w-160"
      >
        {SKILLS_BACKEND.map((skill, index) => {
          return (
            <SkillBlock key={index} label={skill.label} icon={skill.icon} />
          );
        })}
      </motion.div>
    </div>
  );
};
