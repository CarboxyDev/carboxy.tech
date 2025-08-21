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
          className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 hover:border-zinc-600/60 hover:from-zinc-700/60 hover:to-zinc-800/60 hover:shadow-xl hover:shadow-zinc-900/50 active:scale-95"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10 ${
            props.site === 'X (Formerly Twitter)' ? 'bg-gradient-to-br from-sky-400 to-sky-600' :
            props.site === 'Github' ? 'bg-gradient-to-br from-gray-600 to-gray-800' :
            props.site === 'Email' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
            props.site === 'Blog' ? 'bg-gradient-to-br from-orange-500 to-orange-700' :
            'bg-gradient-to-br from-zinc-600 to-zinc-800'
          }`} />
          
          <div className="relative z-10">
            {React.cloneElement(props.children as React.ReactElement<any>, {
              className: `${(props.children as React.ReactElement<any>).props.className} transition-all duration-300 group-hover:scale-110 ${
                props.site === 'X (Formerly Twitter)' ? 'group-hover:text-sky-300' :
                props.site === 'Github' ? 'group-hover:text-gray-100' :
                props.site === 'Email' ? 'group-hover:text-blue-300' :
                props.site === 'Blog' ? 'group-hover:text-orange-300' :
                'group-hover:text-zinc-100'
              }`,
            })}
          </div>
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
