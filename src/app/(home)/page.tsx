import { HeroSection } from '@/app/(home)/hero';
import { Navbar } from '@/app/(home)/navbar';
import { ProjectSection } from '@/app/(home)/projects';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-6 py-16 sm:px-24 md:px-32 lg:px-50 xl:px-64'
      )}
    >
      <Navbar />
      <HeroSection />
      <div className="mt-36">
        <ProjectSection />
      </div>
    </main>
  );
}
