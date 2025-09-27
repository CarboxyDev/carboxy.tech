'use client';

import { SectionHeading } from '@/components/home/section-heading';
import { cn } from '@/lib/utils';
import { Code2, Gamepad2, MapPin, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  return (
    <section
      className={cn('pb-32 pt-20 lg:pb-40 lg:pt-32')}
      data-section="about"
    >
      <div className="space-y-16">
        <SectionHeading title="About Me" />

        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="grid gap-6 md:auto-rows-min md:grid-cols-2 md:grid-rows-[auto_auto_auto] lg:gap-8">
              <div
                className={cn(
                  'group rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5',
                  hoveredCard && hoveredCard !== 'what-i-do'
                    ? 'opacity-50'
                    : 'opacity-100'
                )}
                onMouseEnter={() => setHoveredCard('what-i-do')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <h3 className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-primary-200">
                    <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2 transition-all duration-300 group-hover:border-primary-400/50 group-hover:from-primary-400/30 group-hover:to-primary-500/20">
                      <Code2 className="h-5 w-5 text-primary-400" />
                    </div>
                    What I Do
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                      <span className="font-medium">Frontend Development</span>
                    </div>
                    <p className="ml-5 text-sm text-gray-400">
                      Building responsive, interactive user interfaces with
                      React, Next.js, and modern web technologies
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                      <span className="font-medium">Backend Development</span>
                    </div>
                    <p className="ml-5 text-sm text-gray-400">
                      Creating robust APIs, databases, and server-side logic
                      that form the backbone of web applications
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-fuchsia-400" />
                      <span className="font-medium">UI/UX Design</span>
                    </div>
                    <p className="ml-5 text-sm text-gray-400">
                      Crafting intuitive interfaces and seamless user
                      experiences that are delightful to use
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span className="font-medium">
                        Deployment & Infrastructure
                      </span>
                    </div>
                    <p className="ml-5 text-sm text-gray-400">
                      Working with GCP, Vercel and CI/CD pipelines for
                      production apps
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                      <span className="font-medium">AI/ML Integration</span>
                    </div>
                    <p className="ml-5 text-sm text-gray-400">
                      Incorporating AI-powered features and automations to
                      enhance user experiences and workflows
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span className="font-medium">
                        Developer Tooling & CLI
                      </span>
                    </div>
                    <p className="ml-5 text-sm text-gray-400">
                      Building command-line tools and development utilities that
                      are useful
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  'group rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5 md:row-span-2',
                  hoveredCard && hoveredCard !== 'my-journey'
                    ? 'opacity-50'
                    : 'opacity-100'
                )}
                onMouseEnter={() => setHoveredCard('my-journey')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <h3 className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-primary-200">
                    <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2 transition-all duration-300 group-hover:border-primary-400/50 group-hover:from-primary-400/30 group-hover:to-primary-500/20">
                      <MapPin className="h-5 w-5 text-primary-400" />
                    </div>
                    My Journey
                  </h3>
                </div>
                <div className="relative">
                  <div
                    className="absolute left-[7px] top-1 w-0.5 bg-primary-400/30"
                    style={{ height: 'calc(100% - 80px)' }}
                  ></div>

                  <div className="space-y-8">
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-400">
                          2015 - The Beginning
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          Started programming to create a website for my
                          Minecraft server - it was a very basic HTML page with
                          simple design.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-400">
                          2018 - Python & Automation
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          Dove into Python, creating Discord bots and automation
                          tools for image manipulation and workflow
                          optimization.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-400">
                          2020 - Backend Focus
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          Shifted focus to backend development and data
                          processing, building backends and realtime web-socket
                          applications.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-400">
                          2022 - Modern Frontend
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          Embraced modern frontend development with React,
                          Next.js, and Tailwind CSS.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-400">
                          2024 - Product Mastery
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          Achieved confidence in building complete products from
                          concept to deployment across the entire development
                          lifecycle.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-[#141416] bg-primary-400"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-primary-400">
                          2025 - AI-Enhanced Development
                        </div>
                        <p className="mt-1 text-sm text-gray-300">
                          Now fully embracing AI as my development partner -
                          using Claude Code and Cursor to assist me in building
                          faster.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  'group rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5',
                  hoveredCard && hoveredCard !== 'work-style'
                    ? 'opacity-50'
                    : 'opacity-100'
                )}
                onMouseEnter={() => setHoveredCard('work-style')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <h3 className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-primary-200">
                    <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2 transition-all duration-300 group-hover:border-primary-400/50 group-hover:from-primary-400/30 group-hover:to-primary-500/20">
                      <Users className="h-5 w-5 text-primary-400" />
                    </div>
                    Work Style
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="leading-relaxed text-gray-300">
                    I thrive in environments where I can learn and grow while
                    solving real-world problems. I believe in rapid iteration,
                    continuous learning, and leveraging AI to amplify
                    productivity.
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  'group rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5',
                  hoveredCard && hoveredCard !== 'learning-growth'
                    ? 'opacity-50'
                    : 'opacity-100'
                )}
                onMouseEnter={() => setHoveredCard('learning-growth')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <h3 className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-primary-200">
                    <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2 transition-all duration-300 group-hover:border-primary-400/50 group-hover:from-primary-400/30 group-hover:to-primary-500/20">
                      <TrendingUp className="h-5 w-5 text-primary-400" />
                    </div>
                    Learning & Growth
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="leading-relaxed text-gray-300">
                    I'm constantly exploring emerging technologies and
                    experimenting with cutting-edge tools. Currently diving deep
                    into AI/ML technologies, exploring innovative ways to create
                    value and boost development efficiency.
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  'group rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 hover:shadow-xl hover:shadow-primary-400/5',
                  hoveredCard && hoveredCard !== 'beyond-code'
                    ? 'opacity-50'
                    : 'opacity-100'
                )}
                onMouseEnter={() => setHoveredCard('beyond-code')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <h3 className="flex items-center gap-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-white group-hover:to-primary-200">
                    <div className="rounded-lg border border-primary-400/30 bg-gradient-to-br from-primary-400/20 to-primary-500/10 p-2 transition-all duration-300 group-hover:border-primary-400/50 group-hover:from-primary-400/30 group-hover:to-primary-500/20">
                      <Gamepad2 className="h-5 w-5 text-primary-400" />
                    </div>
                    Beyond Code
                  </h3>
                </div>
                <p className="leading-relaxed text-gray-300">
                  When I'm not coding, I enjoy playing video games, browsing
                  Reddit & X, listening to music, and hitting the gym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
