import {
  CSSLogo,
  ExpressjsLogo,
  GraphQLLogo,
  HTMLLogo,
  JavascriptLogo,
  MoreIcon,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  RestAPILogo,
  SQLLogo,
  TailwindLogo,
  TypescriptLogo,
} from '@/components/Icons';
import { SectionHeading } from '@/components/SectionHeading';

interface TechBadgeProps {
  label: string;
  icon: React.ReactElement; // Technology stack icon
}

const TechBadge = (props: TechBadgeProps) => {
  const { label, icon } = props;

  return (
    <span className="flex w-fit items-center gap-x-3 rounded-md bg-zinc-800 px-5 py-[14px]">
      {icon} <span className="text-sm font-medium">{label}</span>
    </span>
  );
};

const MoreBadge = () => {
  return (
    <span className="flex w-fit items-center gap-x-3 rounded-md bg-primary-500/10 px-5 py-[14px] text-primary-500">
      <MoreIcon className="" />{' '}
      <span className="text-sm font-medium">More</span>
    </span>
  );
};

export const SkillsSection = () => {
  return (
    <div>
      <SectionHeading title="Technical Skills" />
      <div className="mt-40">
        <h3 className="text-2xl font-semibold text-primary-500 lg:text-4xl">
          Frontend
        </h3>
      </div>
      <div className="mt-9 flex w-80 flex-wrap gap-2 sm:w-140 md:w-160">
        <TechBadge label="React.js" icon={<ReactLogo className="h-6 w-6" />} />
        <TechBadge label="Next.js" icon={<NextjsLogo className="h-6 w-6" />} />
        <TechBadge
          label="Typescript"
          icon={<TypescriptLogo className="h-6 w-6" />}
        />
        <TechBadge
          label="Javascript"
          icon={<JavascriptLogo className="h-6 w-6" />}
        />
        <TechBadge
          label="TailwindCSS"
          icon={<TailwindLogo className="h-6 w-6" />}
        />
        <TechBadge label="HTML" icon={<HTMLLogo className="h-6 w-6" />} />
        <TechBadge label="CSS" icon={<CSSLogo className="h-6 w-6" />} />
        <MoreBadge />
      </div>
      <div className="mt-30">
        <h3 className="text-2xl font-semibold text-primary-500 lg:text-4xl">
          Backend
        </h3>
      </div>
      <div className="mt-9 flex w-80 flex-wrap gap-2 sm:w-140 md:w-160">
        <TechBadge label="Node.js" icon={<NodejsLogo className="h-6 w-6" />} />
        <TechBadge
          label="Express.js"
          icon={<ExpressjsLogo className="h-6 w-6" />}
        />
        <TechBadge
          label="REST API"
          icon={<RestAPILogo className="h-6 w-6" />}
        />
        <TechBadge label="GraphQL" icon={<GraphQLLogo className="h-6 w-6" />} />
        <TechBadge label="SQL" icon={<SQLLogo className="h-6 w-6" />} />
        <MoreBadge />
      </div>
    </div>
  );
};
