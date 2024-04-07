import { HeroSection } from '@/app/(home)/hero';
import { Navbar } from '@/app/(home)/navbar';
import { ProjectSection } from '@/app/(home)/projects-section';
import { SkillsSection } from '@/app/(home)/skills';
import { Footer } from '@/components/Footer';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      className={cn(
        'mx-auto flex flex-col px-6 py-16 sm:px-24 md:px-32 lg:px-52 2xl:px-64'
      )}
    >
      <Navbar />
      <div className="mt-36">
        <HeroSection />
      </div>
      <div className="mt-64">
        <ProjectSection />
      </div>
      <div className="mt-56">
        <SkillsSection />
      </div>
      <div className="mt-48">
        <Footer />
      </div>
    </main>
  );
}
