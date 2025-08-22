'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { MailIcon, TwitterIcon } from '@/components/icons/social-icons';
import { Button } from '@/components/vendor/button';
import { LINKS } from '@/lib/config/links';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="pb-32 pt-20 lg:pb-40 lg:pt-32" data-section="contact">
      <div className="space-y-16">
        <SectionHeading title="Let's Work Together" />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                  Let's build something great together
                </h3>
                <p className="text-balance text-sm leading-relaxed text-zinc-300">
                  I'm always interested in collaborating on exciting projects
                  and exploring partnership opportunities. Whether you're
                  building the next big thing, need a technical engineer, or
                  want to work together on great products, I'd love to hear
                  about your vision and how I can help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2">
                    <MailIcon className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Contact Me</p>
                    <p className="text-sm text-zinc-400">carboxy17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2">
                    <Calendar className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Collaboration Focus
                    </p>
                    <p className="text-sm text-zinc-400">
                      Exploring partnerships and exciting projects
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2">
                    <MessageCircle className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Schedule a Call</p>
                    <p className="text-sm text-zinc-400">
                      I'm always available for a quick chat
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex h-full flex-col rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5"
            >
              <div className="flex-1 space-y-8">
                <div className="text-center">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Get In Touch
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Choose the method that works best for you
                  </p>
                </div>

                <div className="space-y-4">
                  <a href={LINKS.email} className="group/button block w-full">
                    <Button className="group/button h-14 w-full gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-primary-700 hover:to-primary-800 hover:shadow-xl hover:shadow-primary-500/20 active:scale-[0.98]">
                      <span className="font-semibold">Let's connect</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </Button>
                  </a>

                  <a
                    href={LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="h-12 w-full gap-3 border border-zinc-700/70 bg-zinc-800/50 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-zinc-500 hover:bg-zinc-700/50 hover:text-white active:scale-[0.98]"
                    >
                      <TwitterIcon className="h-4 w-4" />
                      <span>Message on X</span>
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-lg border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/10 p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 p-2">
                      <div className="relative">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-emerald-300">
                      Open to collaboration
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                      Looking for partnerships and exciting projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
