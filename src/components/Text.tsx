'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
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
  return (
    <div className="-mx-6 flex flex-row sm:-mx-24 md:-mx-32 lg:-mx-52 2xl:-mx-64">
      <div
        className={cn(
          'h-1 self-center bg-primary-500/10',
          'w-6 sm:w-24 md:w-32 lg:w-52 2xl:w-64'
        )}
      ></div>
      <div className={cn('relative w-fit', headingFont.className)}>
        <div className="group relative overflow-hidden rounded-lg bg-primary-500/10 px-12 py-6 md:px-25 md:py-12">
          <h2 className="text-2xl font-semibold text-primary-500 md:text-[40px]">
            {props.title}
          </h2>
          <div className="absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-[12px]">
            <div className="relative h-full w-8 bg-primary-500/5"></div>
          </div>
        </div>
      </div>
      <div className={cn('h-1 flex-1 self-center bg-primary-500/10')}></div>
    </div>
  );
};

export const HighlightText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-primary-400">{children}</span>;
};

export const SpacedAnimationText = ({
  text = 'Gradual Spacing',
}: {
  text: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="-mt-1 flex space-x-0.5 md:-mt-2">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 0.9, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="tracking-tighter text-stone-600 md:leading-[4rem]"
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};
