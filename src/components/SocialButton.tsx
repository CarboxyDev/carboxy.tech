interface Props {
  site: string;
  url: string;
  children: React.ReactElement;
}

export const SocialButton = (props: Props) => {
  return (
    <a href={props.url} about={props.site + ' social link'}>
      <button
        title={props.site}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 hover:cursor-pointer"
      >
        {props.children}
      </button>
    </a>
  );
};
