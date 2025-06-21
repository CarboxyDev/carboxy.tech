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
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 hover:cursor-pointer"
        >
          {props.children}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs">{props.site}</p>
      </TooltipContent>
    </Tooltip>
  );
};
