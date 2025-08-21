import { AboutSection } from '@/app/(home)/about';
import { Footer } from '@/app/(home)/footer';
import { Header } from '@/app/(home)/header';
import { HeroSection } from '@/app/(home)/hero';
import { Projects } from '@/app/(home)/projects';
import { Skills } from '@/app/(home)/skills';
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
        className="animate-fade-in-up mt-16 min-h-[80vh] lg:mt-36"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <HeroSection />
      </div>
      <div
        className="animate-fade-in-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <AboutSection />
      </div>
      <div
        className="animate-fade-in-up"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        <Projects />
      </div>
      <div
        className="animate-fade-in-up mt-20"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        <Skills />
      </div>
      <div
        className="animate-fade-in-up mt-20 lg:mt-40"
        style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
      >
        <Footer />
      </div>
    </main>
  );
}
