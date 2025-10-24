'use client';

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border border-zinc-600/50 bg-zinc-800/80 p-4 shadow-xl backdrop-blur-md',
          title: 'text-sm font-medium text-zinc-100',
          description: 'text-xs text-zinc-400',
          actionButton:
            'rounded-lg bg-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:bg-zinc-600',
          cancelButton:
            'rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-700',
          closeButton:
            'absolute right-2 top-2 rounded-md p-1 text-zinc-400 transition-colors hover:text-zinc-100',
          success: 'border-blue-500/50 bg-blue-600/20 [&_svg]:text-blue-400',
          error: 'border-red-500/50 bg-red-600/20 [&_svg]:text-red-400',
          warning: 'border-amber-500/50 bg-amber-600/20 [&_svg]:text-amber-400',
          info: 'border-blue-500/50 bg-blue-600/20 [&_svg]:text-blue-400',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
