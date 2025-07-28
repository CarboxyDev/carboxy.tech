import { Header } from '@/app/(home)/header';
import { HeroSection } from '@/app/(home)/hero';
import { ProjectSection } from '@/app/(home)/projects';
import { SkillsSection } from '@/app/(home)/skills';
import { Footer } from '@/components/Footer';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      className={cn(
        'mx-auto flex max-w-screen-2xl flex-col px-6 py-16 sm:px-24 md:px-32 lg:px-52 xl:px-36'
      )}
    >
      <div className="animate-fade-in-up">
        <Header />
      </div>
      <div
        className="animate-fade-in-up mt-16 lg:mt-36 min-h-[80vh]"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <HeroSection />
      </div>
      <div
        className="animate-fade-in-up mt-8 xl:mt-0"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <ProjectSection />
      </div>
      <div
        className="animate-fade-in-up mt-20"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        <SkillsSection />
      </div>
      <div
        className="animate-fade-in-up mt-20"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        <Footer />
      </div>
    </main>
  );
}
