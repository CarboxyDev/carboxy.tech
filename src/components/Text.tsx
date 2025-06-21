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
    <div className="relative flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 80,
          damping: 20,
        }}
        className="relative"
      >
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-16 bg-gradient-to-r from-transparent to-primary-500/40 sm:w-24 lg:w-32"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute inset-0 rounded-xl bg-primary-500/5 blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 via-transparent to-primary-500/20 p-[1px]">
                <div className="size-full rounded-xl bg-zinc-900/90" />
              </div>

              <div className="relative px-6 py-4 md:px-10 md:py-6">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className={cn(
                    'bg-gradient-to-r from-zinc-100 via-primary-300 to-zinc-100 bg-clip-text text-2xl font-semibold tracking-wide text-transparent md:text-4xl',
                    headingFont.className
                  )}
                >
                  {props.title}
                </motion.h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-16 bg-gradient-to-l from-transparent to-primary-500/40 sm:w-24 lg:w-32"
          />
        </div>
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
