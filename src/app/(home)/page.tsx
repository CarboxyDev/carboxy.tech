import { HeroSection } from '@/app/(home)/hero';
import { ProjectSection } from '@/app/(home)/projects';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-6 py-36 sm:px-24 sm:py-40 md:px-32 md:py-48 lg:px-64 xl:px-96'
      )}
    >
      <HeroSection />
      <div className="mt-36">
        <ProjectSection />
      </div>
    </main>
  );
}
