'use client';

import { ImageSkeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  priority?: boolean;
  containerClassName?: string;
}

export const ImageWithSkeleton = ({
  src,
  alt,
  height,
  width,
  className,
  priority = false,
  containerClassName,
}: ImageWithSkeletonProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={cn('relative', containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton height={height} width={width} />
        </div>
      )}
      
      {hasError ? (
        <div 
          className="hover:shadow-3xl group relative overflow-hidden rounded-xl border-4 border-zinc-700/80 bg-zinc-900/50 shadow-2xl hover:scale-105 hover:border-zinc-600/80"
          style={{
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          <div className="flex h-full items-center justify-center" style={{ height }}>
            <div className="flex flex-col items-center gap-2 opacity-60">
              <div className="h-12 w-12 rounded-full bg-zinc-700/50 flex items-center justify-center">
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <span className="text-sm text-zinc-400">Failed to load image</span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      ) : (
        <div 
          className={cn(
            'hover:shadow-3xl group relative overflow-hidden rounded-xl border-4 border-zinc-700/80 bg-zinc-900/50 shadow-2xl hover:scale-105 hover:border-zinc-600/80',
            isLoading && 'opacity-0',
            !isLoading && 'opacity-100 transition-opacity duration-300'
          )}
          style={{
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/20 to-transparent" />
          <Image
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={cn('h-auto w-full object-cover', className)}
            priority={priority}
            onLoad={handleLoad}
            onError={handleError}
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      )}
    </div>
  );
};