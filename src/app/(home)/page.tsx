import { About } from '@/app/(home)/sections/about';
import { Contact } from '@/app/(home)/sections/contact';
import { Footer } from '@/app/(home)/sections/footer';
import { Hero } from '@/app/(home)/sections/hero';
import { Projects } from '@/app/(home)/sections/projects';
import { Skills } from '@/app/(home)/sections/skills';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main
      className={cn(
        'mx-auto flex max-w-screen-2xl flex-col px-6 py-16 sm:px-24 md:px-32 lg:px-52 xl:px-36'
      )}
    >
      <section
        className="animate-fade-in-up min-h-[80vh] pt-8 lg:pt-16 2xl:pt-28"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        <Hero />
      </section>

      <section
        className="animate-fade-in-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <Projects />
      </section>

      <section
        className="animate-fade-in-up"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        <About />
      </section>

      <section
        className="animate-fade-in-up mt-20"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        <Skills />
      </section>

      <section
        className="animate-fade-in-up mt-20"
        style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
      >
        <Contact />
      </section>

      <section
        className="animate-fade-in-up mt-20 lg:mt-40"
        style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
      >
        <Footer />
      </section>
    </main>
  );
}
