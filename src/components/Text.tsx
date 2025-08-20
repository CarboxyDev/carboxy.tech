'use client';

import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { Outfit } from 'next/font/google';
import * as React from 'react';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

interface Props {
  title: string;
}

export const SectionHeading = (props: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative flex flex-col items-center mb-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="relative text-center"
      >
        <h2
          className={cn(
            'text-3xl font-semibold tracking-tight text-zinc-100 md:text-5xl',
            headingFont.className
          )}
        >
          {props.title}
        </h2>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export const HighlightText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary-400">{children}</span>;
};

export const SpacedAnimationText = ({ text }: { text: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.06,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 0.9,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <div className="relative -mt-1 md:-mt-2">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="flex space-x-0.5"
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className="inline-block tracking-tighter text-stone-600 md:leading-[4rem]"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary-400/40"
            initial={{
              x: Math.random() * 200,
              y: Math.random() * 50,
              opacity: 0,
              scale: 0,
            }}
            animate={
              isInView
                ? {
                    x: Math.random() * 300,
                    y: Math.random() * 60,
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: 1.2 + i * 0.3,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
