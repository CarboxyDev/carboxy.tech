import { Badge } from '@/components/Atoms';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/vendor/carousel';
import Image from 'next/image';

type ProjectProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  images: string[];
};

const Project = (props: ProjectProps) => {
  const { href, title, description, tags, images } = props;

  return (
    <section className="flex flex-col">
      <a target="_blank" href={href} className="group mb-5 flex w-fit">
        <h2 className="text-3xl font-semibold text-zinc-50 underline-offset-4 group-hover:underline">
          {title}
        </h2>
        <span className="ml-2 -rotate-45">-{'>'}</span>
      </a>
      <p className="mb-6 text-lg leading-8 text-zinc-400">{description}</p>
      <div className="mb-9 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <Badge key={tag} text={tag} />
        ))}
      </div>
      <Carousel>
        <CarouselContent>
          {images.map((image, i) => (
            <CarouselItem key={i}>
              <Image
                className="select-none rounded-xl border border-zinc-800"
                src={`/${image}.png`}
                alt={image}
                width={800}
                height={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <p className="mt-2 animate-pulse text-right text-zinc-500 sm:hidden">
          Swipe
        </p>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Project;
