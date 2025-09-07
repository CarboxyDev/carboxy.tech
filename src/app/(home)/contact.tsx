'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { MailIcon, TwitterIcon } from '@/components/icons/social-icons';
import { Button } from '@/components/vendor/button';
import { PrimaryButton } from '@/components/ui/primary-button';
import { LINKS } from '@/lib/config/links';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="pb-32 pt-20 lg:pb-40 lg:pt-32" data-section="contact">
      <div className="space-y-16">
        <SectionHeading title="Let's Work Together" />

        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white lg:text-2xl">
                Ready to build something amazing?
              </h3>
              <p className="text-lg leading-relaxed text-zinc-300">
                Let's discuss your next project and bring your vision to life.
                <br />
                I'm currently open to new opportunities. Feel free to reach out
                to me.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <PrimaryButton
                  href={LINKS.email}
                  className="px-8"
                >
                  <MailIcon className="h-4 w-4" />
                  <span>Get in touch</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </PrimaryButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a
                  href={LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="h-12 gap-3 border border-zinc-700/70 bg-zinc-800/50 px-8 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-700/50 hover:text-white active:scale-[0.98]"
                  >
                    <TwitterIcon className="h-4 w-4" />
                    <span>Message on X</span>
                  </Button>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" />
              </div>
              <span className="text-sm font-medium text-emerald-300">
                Open for collaboration
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
