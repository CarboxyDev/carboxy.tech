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
    <div className="flex size-16 cursor-pointer items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
      {React.cloneElement(icon, { className: 'size-7' })}
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <div>
      <SectionHeading title="Technical Skills" />
      <div className="mt-28">
        <h3 className="font-medium text-stone-600">FRONTEND</h3>
      </div>
      <div className="mt-6 flex w-80 flex-wrap gap-3 sm:w-140 md:w-160">
        <SkillBlock label="React.js" icon={<ReactLogo />} />
        <SkillBlock label="Next.js" icon={<NextjsLogo />} />
        <SkillBlock label="Typescript" icon={<TypescriptLogo />} />
        <SkillBlock label="Javascript" icon={<JavascriptLogo />} />
        <SkillBlock label="TailwindCSS" icon={<TailwindLogo />} />
        <SkillBlock label="HTML" icon={<HTMLLogo />} />
        <SkillBlock label="CSS" icon={<CSSLogo />} />
      </div>
      <div className="mt-16">
        <h3 className="font-medium text-stone-600">BACKEND</h3>
      </div>
      <div className="mt-6 flex w-80 flex-wrap gap-2 sm:w-140 md:w-160">
        <SkillBlock label="Node.js" icon={<NodejsLogo />} />
        <SkillBlock label="Express.js" icon={<ExpressjsLogo />} />
        <SkillBlock label="REST API" icon={<RestAPILogo />} />
        <SkillBlock label="GraphQL" icon={<GraphQLLogo />} />
        <SkillBlock label="SQL" icon={<SQLLogo />} />
      </div>
    </div>
  );
};
