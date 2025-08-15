'use client';

import {
  ExpressjsLogo,
  FigmaLogo,
  GitLogo,
  JavascriptLogo,
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
import { motion, useInView } from 'framer-motion';
import React from 'react';

interface SkillConstellation {
  label: string;
  icon: React.ReactElement;
  gradient: string;
  x: number;
  y: number;
  scale: number;
}

const SKILL_CONSTELLATION: SkillConstellation[] = [
  {
    label: 'React.js',
    icon: <ReactLogo />,
    gradient: 'from-blue-400/20 to-cyan-400/20',
    x: 15,
    y: 20,
    scale: 1.0,
  },
  {
    label: 'Next.js',
    icon: <NextjsLogo />,
    gradient: 'from-gray-600/20 to-gray-400/20',
    x: 75,
    y: 15,
    scale: 1.0,
  },
  {
    label: 'TypeScript',
    icon: <TypescriptLogo />,
    gradient: 'from-blue-600/20 to-blue-400/20',
    x: 45,
    y: 25,
    scale: 1.0,
  },
  {
    label: 'Node.js',
    icon: <NodejsLogo />,
    gradient: 'from-green-500/20 to-green-400/20',
    x: 20,
    y: 55,
    scale: 1.0,
  },
  {
    label: 'TailwindCSS',
    icon: <TailwindLogo />,
    gradient: 'from-cyan-400/20 to-teal-400/20',
    x: 85,
    y: 45,
    scale: 1.0,
  },
  {
    label: 'Express.js',
    icon: <ExpressjsLogo />,
    gradient: 'from-gray-700/20 to-gray-500/20',
    x: 10,
    y: 80,
    scale: 1.0,
  },
  {
    label: 'JavaScript',
    icon: <JavascriptLogo />,
    gradient: 'from-yellow-400/20 to-yellow-600/20',
    x: 80,
    y: 75,
    scale: 1.0,
  },
  {
    label: 'SQL',
    icon: <SQLLogo />,
    gradient: 'from-yellow-700/20 to-yellow-500/20',
    x: 50,
    y: 65,
    scale: 1.0,
  },
  {
    label: 'Git',
    icon: <GitLogo />,
    gradient: 'from-orange-500/20 to-red-500/20',
    x: 25,
    y: 85,
    scale: 1.0,
  },
  {
    label: 'Figma',
    icon: <FigmaLogo />,
    gradient: 'from-purple-500/20 to-pink-500/20',
    x: 65,
    y: 85,
    scale: 1.0,
  },
];

const FloatingSkillCard = (props: SkillConstellation & { mousePosition: { x: number; y: number } }) => {
  const { label, icon, gradient, mousePosition } = props;
  
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [cardPosition, setCardPosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - cardCenterX, 2) + 
      Math.pow(mousePosition.y - cardCenterY, 2)
    );
    
    const maxDistance = 200;
    const influence = Math.max(0, 1 - distance / maxDistance);
    const moveDistance = influence * 15;
    
    const angle = Math.atan2(mousePosition.y - cardCenterY, mousePosition.x - cardCenterX);
    const repelX = -Math.cos(angle) * moveDistance;
    const repelY = -Math.sin(angle) * moveDistance;
    
    setCardPosition({ x: repelX, y: repelY });
  }, [mousePosition]);


  return (
    <motion.div
      ref={cardRef}
      className="cursor-pointer"
      animate={{
        x: cardPosition.x,
        y: cardPosition.y,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Tooltip delayDuration={200}>
        <TooltipTrigger>
          <div
            className={cn(
              'group relative size-14 rounded-2xl border border-zinc-700/30 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600/50 ring-1 ring-primary-500/20 sm:size-16',
              `bg-gradient-to-br ${gradient}`
            )}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/60" />
            
            <div className="relative flex size-full items-center justify-center">
              {React.cloneElement(icon, {
                className: 'size-6 transition-all duration-300 ease-out group-hover:drop-shadow-lg sm:size-7',
              })}
            </div>
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="border-zinc-700 bg-zinc-800/90 text-zinc-100 backdrop-blur-sm"
        >
          <p className="text-sm font-medium">{label}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};

const SkillConstellation = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div 
      ref={containerRef}
      className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-700/30 bg-gradient-to-br from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm sm:h-[500px] lg:h-[600px]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-900/10" />
      
      <div className="absolute inset-4">
        {SKILL_CONSTELLATION.map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              x: '50%',
              y: '50%',
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: 'spring',
              stiffness: 120,
              damping: 20,
            }}
            style={{
              position: 'absolute',
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <FloatingSkillCard
              {...skill}
              mousePosition={mousePosition}
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute -bottom-20 -left-20 size-40 rounded-full bg-primary-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute -right-20 -top-20 size-40 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      />
    </div>
  );
};

export const SkillsSection = () => {
  const titleRef = React.useRef(null);
  const titleIsInView = useInView(titleRef, { once: true });
  const constellationRef = React.useRef(null);
  const constellationIsInView = useInView(constellationRef, { once: true, amount: 0.1 });

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

      <motion.div
        ref={constellationRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={constellationIsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SkillConstellation />
      </motion.div>

    </div>
  );
};
