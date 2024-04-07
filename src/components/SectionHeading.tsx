import { cn } from '@/lib/utils';
import { Outfit } from 'next/font/google';

const headingFont = Outfit({
  weight: ['600'],
  subsets: ['latin'],
});

interface Props {
  title: string;
}

export const SectionHeading = (props: Props) => {
  return (
    <div className="-mx-6 flex flex-row sm:-mx-24 md:-mx-32 lg:-mx-50 2xl:-mx-64">
      <div
        className={cn(
          'h-1 self-center bg-primary-500/10',
          'w-6 sm:w-24 md:w-32 lg:w-50 2xl:w-64'
        )}
      ></div>
      <div className={cn('relative w-fit', headingFont.className)}>
        <div className="rounded-lg bg-primary-500/10 px-12 py-6 md:px-25 md:py-12">
          <h2 className="text-2xl font-semibold text-primary-500 md:text-4xl">
            {props.title}
          </h2>
        </div>
      </div>
      <div className={cn('h-1 flex-1 self-center bg-primary-500/10')}></div>
    </div>
  );
};
