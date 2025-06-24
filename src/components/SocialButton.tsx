import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/vendor/tooltip';

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
          className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/50 bg-zinc-800/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:border-zinc-600/50 hover:bg-zinc-700/40 hover:shadow-lg hover:shadow-zinc-900/20"
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Icon content */}
          <div className="relative z-10">{props.children}</div>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{props.site}</p>
      </TooltipContent>
    </Tooltip>
  );
};
