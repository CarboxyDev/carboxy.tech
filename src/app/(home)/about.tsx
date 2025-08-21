import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/Text"
import { Code2, MapPin, TrendingUp, Users, Gamepad2 } from "lucide-react"

export const AboutSection = () => {
  return (
    <section className={cn("pt-20 pb-32 lg:pt-32 lg:pb-40")}>
      <div className="space-y-16">
        <SectionHeading title="About Me" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8 md:grid-rows-[auto_auto_auto] md:auto-rows-min">
              <div className="group p-6 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-400/5 transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30">
                <div className="mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-3 group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-400/20 to-primary-500/10 border border-primary-400/30 group-hover:from-primary-400/30 group-hover:to-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300">
                      <Code2 className="w-5 h-5 text-primary-400" />
                    </div>
                    What I Do
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="font-medium">Frontend Development</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-5">Building responsive, interactive user interfaces with React, Next.js, and modern web technologies</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      <span className="font-medium">Backend Development</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-5">Creating robust APIs, databases, and server-side logic that form the backbone of web applications</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full flex-shrink-0" />
                      <span className="font-medium">UI/UX Design</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-5">Crafting intuitive interfaces and seamless user experiences that are delightful to use</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                      <span className="font-medium">Deployment & Infrastructure</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-5">Working with GCP, Vercel and CI/CD pipelines for production apps</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                      <span className="font-medium">AI/ML Integration</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-5">Incorporating AI-powered features and automations to enhance user experiences and workflows</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="font-medium">Developer Tooling & CLI</span>
                    </div>
                    <p className="text-sm text-gray-400 ml-5">Building command-line tools and development utilities that are useful</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-400/5 transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30 md:row-span-2">
                <div className="mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-3 group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-400/20 to-primary-500/10 border border-primary-400/30 group-hover:from-primary-400/30 group-hover:to-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-primary-400" />
                    </div>
                    My Journey
                  </h3>
                </div>
                <div className="relative">
                  <div className="absolute left-[7px] top-1 w-0.5 bg-primary-400/30" style={{height: 'calc(100% - 80px)'}}></div>
                  
                  <div className="space-y-8">
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 w-4 h-4 bg-primary-400 rounded-full border-2 border-[#141416] flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-400 font-medium">2015 - The Beginning</div>
                        <p className="text-gray-300 text-sm mt-1">Started programming to create a website for my Minecraft server - it was a very basic HTML page with simple design.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 w-4 h-4 bg-primary-400 rounded-full border-2 border-[#141416] flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-400 font-medium">2018 - Python & Automation</div>
                        <p className="text-gray-300 text-sm mt-1">Dove into Python, creating Discord bots and automation tools for image manipulation and workflow optimization.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 w-4 h-4 bg-primary-400 rounded-full border-2 border-[#141416] flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-400 font-medium">2020 - Backend Focus</div>
                        <p className="text-gray-300 text-sm mt-1">Shifted focus to backend development and data processing, building backends and realtime web-socket applications.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 w-4 h-4 bg-primary-400 rounded-full border-2 border-[#141416] flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-400 font-medium">2022 - Modern Frontend</div>
                        <p className="text-gray-300 text-sm mt-1">Embraced modern frontend development with React, Next.js, and Tailwind CSS.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 w-4 h-4 bg-primary-400 rounded-full border-2 border-[#141416] flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-400 font-medium">2024 - Product Mastery</div>
                        <p className="text-gray-300 text-sm mt-1">Achieved confidence in building complete products from concept to deployment across the entire development lifecycle.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 w-4 h-4 bg-primary-400 rounded-full border-2 border-[#141416] flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-400 font-medium">2025 - AI-Enhanced Development</div>
                        <p className="text-gray-300 text-sm mt-1">Now fully embracing AI as my development partner - using Claude Code and Cursor to assist me in building faster.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-400/5 transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30">
                <div className="mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-3 group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-400/20 to-primary-500/10 border border-primary-400/30 group-hover:from-primary-400/30 group-hover:to-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300">
                      <Users className="w-5 h-5 text-primary-400" />
                    </div>
                    Work Style
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed">
                    I thrive in environments where I can learn and grow while solving real-world problems. I believe in rapid iteration, continuous learning, and leveraging AI to amplify productivity.
                  </p>

                </div>
              </div>
              

              
              <div className="group p-6 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-400/5 transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30">
                <div className="mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-3 group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-400/20 to-primary-500/10 border border-primary-400/30 group-hover:from-primary-400/30 group-hover:to-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300">
                      <TrendingUp className="w-5 h-5 text-primary-400" />
                    </div>
                    Learning & Growth
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed">
                    I'm constantly exploring emerging technologies and experimenting with cutting-edge tools. Currently diving deep into AI/ML technologies, exploring innovative ways to create value and boost development efficiency.
                  </p>
                </div>
              </div>
              
              <div className="group p-6 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-zinc-900/20 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary-400/5 transition-all duration-300 hover:border-zinc-700/80 hover:bg-gradient-to-br hover:from-zinc-900/50 hover:to-zinc-900/30">
                <div className="mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center gap-3 group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-400/20 to-primary-500/10 border border-primary-400/30 group-hover:from-primary-400/30 group-hover:to-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300">
                      <Gamepad2 className="w-5 h-5 text-primary-400" />
                    </div>
                    Beyond Code
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy playing video games, browsing Reddit & X, listening to music, and hitting the gym.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}