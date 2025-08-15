import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/Text"
import { Code2, Zap, MapPin, TrendingUp, Users, Gamepad2, Sparkles } from "lucide-react"

export const AboutSection = () => {
  return (
    <section className={cn("pt-20 pb-32 lg:pt-32 lg:pb-40")}>
      <div className="space-y-16">
        <SectionHeading title="About Me" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                I'm a full-stack developer passionate about building impactful digital products. 
                With expertise spanning modern web technologies, I create web applications that 
                deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8 md:grid-rows-[auto_auto_auto] md:auto-rows-min">
              <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary-400" />
                  What I Do
                </h3>
                <div className="grid gap-2">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    Frontend Development
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                    Backend Development
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                    API Design & Integration
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full flex-shrink-0" />
                    UI/UX Design
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                    Deployment & Infra
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                    Applied AI Integration
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm md:row-span-2">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I started programming back in 2015 when I needed to create a website for my Minecraft server. 
                  That was the start of my journey in the field of web development. 
                  <br /><br />
                  By 2018, I was using Python to create Discord bots and other small projects involving image manipulation and automation.
                  <br /><br />
                  Around 2020, I started working on backend and data processing projects.
                  <br /><br />
                  In 2022, I started taking frontend development more seriously and learning modern technologies like React, Next.js and Tailwind CSS.
                  <br /><br />
                  By 2024, I could confidently create products from 0 to 1. I also started incorporating AI more and more into my workflow. 

                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-primary-400" />
                  Beyond Code
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy playing video games, browsing Reddit & X, listening to music, and hitting the gym.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                  Learning & Growth
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always exploring new technologies and experimenting with new tools. I'm currently diving deeper into AI-related technologies and exploring great ways to apply AI for providing value and increasing efficiency.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-400" />
                  Work Style
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I thrive in environments where I can learn and grow intensely solving real world problems. I try to incorporate AI in my workflow as much as possible.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm md:col-span-2">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary-400" />
                  Hope for the Future
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm excited about the potential of technology, especially AI, to solve meaningful problems. My mission is to build digital products that meaningfully help others in their work and lives. I am hopeful for a world where AI is used for improving everyone's lives, whether it be through education, healthcare, or simply making life easier to live.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}