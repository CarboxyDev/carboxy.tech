import { HeroSection } from '@/app/(home)/hero';
import { Navbar } from '@/app/(home)/navbar';
import { ProjectSection } from '@/app/(home)/projects';
import { QuizSection } from '@/app/(home)/quiz';
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
        <Navbar />
      </div>
      <div
        className="animate-fade-in-up mt-36"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <HeroSection />
      </div>
      <div
        className="animate-fade-in-up mt-64"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <ProjectSection />
      </div>
      <div
        className="animate-fade-in-up mt-56"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        <SkillsSection />
      </div>
      <div
        className="animate-fade-in-up mt-56"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        <QuizSection />
      </div>
      <div
        className="animate-fade-in-up mt-48"
        style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
      >
        <Footer />
      </div>
    </main>
  );
}
