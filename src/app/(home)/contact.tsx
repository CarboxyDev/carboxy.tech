'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { MailIcon, TwitterIcon } from '@/components/icons/social-icons';
import { PrimaryButton } from '@/components/ui/primary-button';
import { Button } from '@/components/vendor/button';
import { LINKS } from '@/lib/config/links';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="pb-32 pt-20 lg:pb-40 lg:pt-32" data-section="contact">
      <div className="space-y-16">
        <SectionHeading title="Let's Work Together" />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 via-zinc-900/30 to-zinc-900/50 p-12 backdrop-blur-sm lg:p-16"
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative space-y-10">
              <div className="space-y-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-sm"
                >
                  <div className="relative flex items-center">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-40" />
                  </div>
                  <span className="text-xs font-medium tracking-wide text-emerald-300">
                    AVAILABLE FOR PROJECTS
                  </span>
                </motion.div>

                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  Have a project in mind?
                </h3>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-300 lg:text-lg">
                  I work with teams and founders to build products that matter.
                  If you have something interesting, let's talk.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <PrimaryButton
                    href={LINKS.email}
                    className="w-full px-8 sm:w-auto"
                  >
                    <MailIcon className="h-4 w-4" />
                    <span>Send me an email</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </PrimaryButton>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <a
                    href={LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="h-12 w-full gap-2.5 border border-zinc-700/60 bg-zinc-800/40 px-8 font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/60 hover:text-white sm:w-auto"
                    >
                      <TwitterIcon className="h-4 w-4" />
                      <span>DM on X</span>
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
