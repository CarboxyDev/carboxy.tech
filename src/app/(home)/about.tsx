import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/Text"

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
            
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    What I Do
                  </h3>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      Frontend Development
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                      Backend Development
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                      API Design & Integration
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                      Database Architecture
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Currently Working On
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="leading-relaxed">
                      I'm currently working on an AI-powered quiz app that allows users to create quizzes and share them with others.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I started programming back in 2015 when I needed to create a website for my minecraft server. 
                    That was the start of my journey in tech and I've been coding ever since with a few breaks in between.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Beyond Code
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    When I'm not coding, I enjoy playing video games, browsing Reddit & X, listening to music, and hitting the gym.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}