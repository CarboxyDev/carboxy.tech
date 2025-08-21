import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/vendor/tooltip';
import React from 'react';

interface Props {
  site: string;
  url: string;
  children: React.ReactElement;
}

export const SocialButton = (props: Props) => {
  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <a
          href={props.url}
          target="_blank"
          about={props.site + ' social link'}
          title={props.site}
          className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700/50 bg-zinc-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-700/50 hover:scale-110 hover:border-zinc-600/70"
        >
          {props.children}
        </a>
      </TooltipTrigger>
      <TooltipContent 
        side="top"
        className="border-zinc-600/50 bg-gradient-to-br from-zinc-800/95 to-zinc-900/95 text-zinc-100 shadow-xl backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 px-1 py-0.5">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-zinc-700/50">
            {React.cloneElement(props.children as React.ReactElement<any>, {
              className: 'h-3 w-3 text-zinc-300',
            })}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {props.site === 'X (Formerly Twitter)' ? 'Follow on X' :
               props.site === 'Github' ? 'View my code' :
               props.site === 'Email' ? 'Get in touch' :
               props.site === 'Blog' ? 'Read my thoughts' :
               props.site}
            </span>
            <span className="text-xs text-zinc-400">
              {props.site === 'X (Formerly Twitter)' ? '@CarboxyDev' :
               props.site === 'Github' ? 'github.com/CarboxyDev' :
               props.site === 'Email' ? 'carboxy17@gmail.com' :
               props.site === 'Blog' ? 'carboxy.substack.com' :
               'Click to open'}
            </span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
