import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-zinc-700/40',
        className
      )}
    />
  );
};

interface ImageSkeletonProps {
  className?: string;
  height?: number;
  width?: number;
}

export const ImageSkeleton = ({ className, height = 400, width = 640 }: ImageSkeletonProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border-4 border-zinc-700/80 bg-zinc-900/50 shadow-2xl',
        className
      )}
      style={{ height, width: '100%', maxWidth: width }}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/20 to-transparent" />
      <div className="h-full w-full animate-pulse bg-gradient-to-r from-zinc-700/40 via-zinc-600/40 to-zinc-700/40 bg-[length:200%_100%]" 
           style={{
             animation: 'shimmer 2s infinite',
           }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-40">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-500 border-t-transparent" />
          <span className="text-xs text-zinc-500">Loading...</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
};