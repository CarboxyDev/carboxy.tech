import { cn } from '@/lib/utils';

type IconProps = {
  className: string;
};

export const CheckIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0c1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263c-12.512-12.496-32.768-12.496-45.28 0"
      ></path>
    </svg>
  );
};

export const BusyIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
    >
      <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
        <path d="M4 13a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"></path>
        <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></path>
      </g>
    </svg>
  );
};

export const MailIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="currentColor">
        <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"></path>
        <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a2.999 2.999 0 0 1 2.354-1.42L5 4z"></path>
      </g>
    </svg>
  );
};

export const LinkedinIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  );
};

export const GithubIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      ></path>
    </svg>
  );
};

export const TwitterIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-current', className)}
    >
      <g clip-path="url(#clip0_2050_712)">
        <g mask="url(#mask0_2050_712)">
          <path
            d="M12.6 0.749725H15.0537L9.69372 6.89144L16 15.2503H11.0629L7.19314 10.1817L2.77029 15.2503H0.314286L6.04686 8.67887L0 0.750868H5.06286L8.55543 5.38287L12.6 0.749725ZM11.7371 13.7783H13.0971L4.32 2.14515H2.86171L11.7371 13.7783Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2050_712">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const NextjsLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
      ></path>
    </svg>
  );
};

export const ReactLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <g fill="#61dafb">
        <circle cx={64} cy={64} r={11.4}></circle>
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"></path>
      </g>
    </svg>
  );
};

export const TailwindLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <path
        fill="#38bdf8"
        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
      ></path>
    </svg>
  );
};

export const TypescriptLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#007acc" rx={60}></rect>
        <path
          fill="#09090b"
          d="m56.611 128.849l-.081 10.484h33.32v94.679h23.57v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"
        ></path>
      </g>
    </svg>
  );
};

export const JavascriptLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#f0db4f" rx={60}></rect>
        <path
          fill="#323330"
          d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
        ></path>
      </g>
    </svg>
  );
};

export const PrismaLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21.807 18.285L13.553.757a1.324 1.324 0 0 0-1.129-.755a1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145m-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.325.713"
      ></path>
    </svg>
  );
};

export const NextAuthLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M8.6343 9.51691C13.335 8.13331 20.6015 5.96604 23.3769 5.1375C24.1149 4.91717 24.8957 4.91313 25.6349 5.12944C28.2981 5.90876 35.1388 7.91899 40.276 9.50277C41.1119 9.76049 41.6815 10.5526 41.6643 11.4272C41.1766 36.2674 28.5102 41.9425 25.2609 42.9912C24.768 43.1503 24.2455 43.1506 23.7521 42.9928C20.4864 41.9486 7.71605 36.2842 7.21511 11.4553C7.19719 10.5673 7.78225 9.76771 8.6343 9.51691Z"
        fill="#D9D9D9"
      ></path>
      <mask
        id="mask0_11995_65555"
        maskUnits="userSpaceOnUse"
        x="7"
        y="4"
        width="35"
        height="40"
      >
        <path
          d="M8.6343 9.51691C13.335 8.13331 20.6015 5.96604 23.3769 5.1375C24.1149 4.91717 24.8957 4.91313 25.6349 5.12944C28.2981 5.90876 35.1388 7.91899 40.276 9.50277C41.1119 9.76049 41.6815 10.5526 41.6643 11.4272C41.1766 36.2674 28.5102 41.9425 25.2609 42.9912C24.768 43.1503 24.2455 43.1506 23.7521 42.9928C20.4864 41.9486 7.71605 36.2842 7.21511 11.4553C7.19719 10.5673 7.78225 9.76771 8.6343 9.51691Z"
          fill="#D9D9D9"
        ></path>
      </mask>
      <g mask="url(#mask0_11995_65555)">
        <path
          d="M24.507 23.4592L24.2366 4.12395L42.7605 9.12676L24.507 23.4592Z"
          fill="url(#paint0_linear_11995_65555)"
        ></path>
        <path
          d="M24.5068 23.4592V4.8L6.79415 9.5324L4.36035 21.0254L12.0674 33.0592L24.5068 23.4592Z"
          fill="url(#paint1_linear_11995_65555)"
        ></path>
        <path
          d="M42.2197 9.53239L11.7971 33.0592V43.7408H41.814L42.2197 9.53239Z"
          fill="url(#paint2_linear_11995_65555)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_11995_65555"
          x1="24.507"
          y1="4.8"
          x2="37.4873"
          y2="13.3183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#19AAE8"></stop>
          <stop offset="1" stopColor="#1EA5F1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_11995_65555"
          x1="7.335"
          y1="9.93803"
          x2="24.5068"
          y2="23.1887"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2BE2B8"></stop>
          <stop offset="1" stopColor="#19B9E3"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_11995_65555"
          x1="41.5436"
          y1="9.66761"
          x2="19.0985"
          y2="40.7662"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#925CDF"></stop>
          <stop offset="1" stopColor="#CC42E5"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ReactQueryLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 230"
    >
      <path
        fill="#00435b"
        d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151z"
      ></path>
      <path
        fill="#002b3b"
        d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082"
      ></path>
      <path
        fill="#ff4154"
        d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687M78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618m124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295zM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459m108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013M77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59"
      ></path>
      <path
        fill="#ffd94c"
        d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475m26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47m-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866m-46.509 5.732h10.32"
      ></path>
    </svg>
  );
};

export const DrizzleLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5.353 11.823a1.036 1.036 0 0 0-.395-1.422a1.063 1.063 0 0 0-1.437.399L.138 16.702a1.035 1.035 0 0 0 .395 1.422a1.063 1.063 0 0 0 1.437-.398zm11.216 0a1.036 1.036 0 0 0-.394-1.422a1.064 1.064 0 0 0-1.438.399l-3.382 5.902a1.036 1.036 0 0 0 .394 1.422c.506.283 1.15.104 1.438-.398zm7.293-4.525a1.036 1.036 0 0 0-.395-1.422a1.062 1.062 0 0 0-1.437.399l-3.383 5.902a1.036 1.036 0 0 0 .395 1.422a1.063 1.063 0 0 0 1.437-.399zm-11.219 0a1.035 1.035 0 0 0-.394-1.422a1.064 1.064 0 0 0-1.438.398l-3.382 5.903a1.036 1.036 0 0 0 .394 1.422c.506.282 1.15.104 1.438-.399z"
      ></path>
    </svg>
  );
};

export const HTMLLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#e14e1d" rx={60}></rect>
        <path
          fill="#fff"
          d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"
        ></path>
        <path
          fill="#ebebeb"
          d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"
        ></path>
      </g>
    </svg>
  );
};

export const CSSLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect width={256} height={256} fill="#0277bd" rx={60}></rect>
        <path
          fill="#ebebeb"
          d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"
        ></path>
        <path
          fill="#fff"
          d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
        ></path>
      </g>
    </svg>
  );
};

export const NodejsLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2050_687)">
        <path
          d="M12.5547 0.154743C12.3824 0.0560657 12.1874 0.00415039 11.9889 0.00415039C11.7904 0.00415039 11.5953 0.0560657 11.4231 0.154743L2.08186 5.58006C1.72654 5.78106 1.52686 6.16037 1.52686 6.56256V17.4353C1.52686 17.8371 1.74867 18.2166 2.08148 18.4178L11.4227 23.8429C11.595 23.9416 11.7901 23.9936 11.9886 23.9936C12.1871 23.9936 12.3822 23.9416 12.5545 23.8429L21.8957 18.4176C22.2509 18.2166 22.4504 17.8371 22.4504 17.4351V6.56256C22.4504 6.16056 22.2285 5.78124 21.8957 5.58006L12.5547 0.154743Z"
          fill="url(#paint0_linear_2050_687)"
        />
        <path
          d="M21.9184 5.58009L12.5329 0.154775C12.4407 0.107935 12.344 0.0705562 12.2443 0.0432129L1.72705 18.1497C1.81404 18.2567 1.91921 18.3474 2.03774 18.4178L11.4234 23.843C11.6897 23.9992 12.0002 24.044 12.2887 23.9545L22.1625 5.78109C22.0977 5.6962 22.0141 5.62741 21.9184 5.58009Z"
          fill="url(#paint1_linear_2050_687)"
        />
        <path
          d="M21.9184 18.417C22.1847 18.2608 22.3843 17.9929 22.473 17.7026L12.1999 0.0200544C11.9337 -0.0245706 11.6451 -0.00225812 11.4012 0.154117L2.08203 5.55712L12.1332 23.9987C12.2663 23.9762 12.4219 23.9316 12.555 23.8646L21.9184 18.417Z"
          fill="url(#paint2_linear_2050_687)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2050_687"
          x1="15.793"
          y1="4.19491"
          x2="7.26197"
          y2="21.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3F873F" />
          <stop offset="0.33" stop-color="#3F8B3D" />
          <stop offset="0.637" stop-color="#3E9638" />
          <stop offset="0.934" stop-color="#3DA92E" />
          <stop offset="1" stop-color="#3DAE2B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2050_687"
          x1="10.5697"
          y1="13.2687"
          x2="34.372"
          y2="-4.20963"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.138" stop-color="#3F873F" />
          <stop offset="0.402" stop-color="#52A044" />
          <stop offset="0.713" stop-color="#64B749" />
          <stop offset="0.908" stop-color="#6ABF4B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2050_687"
          x1="1.18497"
          y1="11.995"
          x2="22.8"
          y2="11.995"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.092" stop-color="#6ABF4B" />
          <stop offset="0.287" stop-color="#64B749" />
          <stop offset="0.598" stop-color="#52A044" />
          <stop offset="0.862" stop-color="#3F873F" />
        </linearGradient>
        <clipPath id="clip0_2050_687">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ExpressjsLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2050_693)">
        <path
          d="M24 18.588C23.6507 18.7201 23.2651 18.7198 22.916 18.5872C22.5669 18.4546 22.2785 18.1988 22.105 17.868L18.655 13.097L18.155 12.43L14.152 17.874C13.989 18.1909 13.7162 18.4375 13.3845 18.5678C13.0529 18.6981 12.6851 18.7032 12.35 18.582L17.508 11.662L12.71 5.41102C13.055 5.2867 13.4323 5.28505 13.7784 5.40636C14.1244 5.52766 14.4181 5.76451 14.61 6.07702L18.186 10.907L21.782 6.09702C21.9463 5.78581 22.2192 5.54581 22.5488 5.42265C22.8785 5.29949 23.2419 5.30176 23.57 5.42902L21.708 7.90002L19.186 11.183C19.116 11.2455 19.0599 11.3221 19.0216 11.4077C18.9832 11.4934 18.9633 11.5862 18.9633 11.68C18.9633 11.7739 18.9832 11.8667 19.0216 11.9523C19.0599 12.038 19.116 12.1145 19.186 12.177L23.99 18.589L24 18.588ZM0.002012 11.576L0.422012 9.50102C1.57601 5.39802 6.28001 3.69102 9.51601 6.23102C11.411 7.72002 11.884 9.82802 11.791 12.204H1.11601C0.943012 16.447 4.00501 19.009 7.92001 17.7C8.55467 17.4716 9.12275 17.0893 9.57337 16.5873C10.024 16.0854 10.3431 15.4796 10.502 14.824C10.709 14.158 11.05 14.044 11.676 14.236C11.5717 15.0484 11.2845 15.8266 10.8361 16.5119C10.3876 17.1973 9.78963 17.7721 9.08701 18.193C7.92643 18.8279 6.59484 19.0795 5.28264 18.9119C3.97043 18.7443 2.74481 18.1661 1.78101 17.26C0.828041 16.1874 0.252088 14.8325 0.141012 13.402C0.141012 13.167 0.061012 12.947 0.007012 12.736C0.00214403 12.3497 -0.000189357 11.9634 1.19963e-05 11.577L0.002012 11.576ZM1.12901 11.29H10.783C10.723 8.21402 8.78201 6.03202 6.19301 6.01202C3.31101 5.97202 1.24901 8.10602 1.12201 11.276L1.12901 11.29Z"
          fill="#EF4444"
        />
      </g>
      <defs>
        <clipPath id="clip0_2050_693">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const RestAPILogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 14L10 12L12 10L14 12L12 14ZM9.875 8.125L7.375 5.625L12 1L16.625 5.625L14.125 8.125L12 6L9.875 8.125ZM5.625 16.625L1 12L5.625 7.375L8.125 9.875L6 12L8.125 14.125L5.625 16.625ZM18.375 16.625L15.875 14.125L18 12L15.875 9.875L18.375 7.375L23 12L18.375 16.625ZM12 23L7.375 18.375L9.875 15.875L12 18L14.125 15.875L16.625 18.375L12 23Z"
        fill="#0EA5E9"
      />
    </svg>
  );
};

export const GraphQLLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2050_708)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3035 2.74692L19.8485 5.59275C20.0086 5.44219 20.1923 5.31296 20.3939 5.20908C21.5438 4.62142 23.0107 4.97033 23.6786 5.99258C24.3398 7.01483 23.9472 8.31858 22.7972 8.91233C22.5971 9.01478 22.3814 9.09112 22.1568 9.139V14.8328C22.3789 14.8807 22.5922 14.9565 22.7903 15.0579C23.9472 15.6517 24.3398 16.9555 23.6718 17.9778C23.0107 18.9999 21.537 19.3488 20.387 18.7613C20.1642 18.6476 19.9635 18.5028 19.7926 18.3323L14.2814 21.1607C14.3621 21.3779 14.4031 21.6052 14.4028 21.834C14.4028 23.0093 13.3286 23.9703 11.9995 23.9703C10.6704 23.9703 9.59625 23.0153 9.59625 21.834C9.59625 21.624 9.63019 21.4212 9.69347 21.2296L4.15004 18.3846C3.99171 18.5322 3.81058 18.659 3.6121 18.7613C2.45522 19.3488 0.988411 18.9999 0.327286 17.9778C-0.333745 16.9555 0.0587859 15.6517 1.20872 15.0579C1.40683 14.9565 1.62015 14.8807 1.84229 14.8327V9.139C1.6177 9.09112 1.40202 9.01478 1.20188 8.91233C0.0518484 8.32475 -0.340683 7.01483 0.320442 5.99258C0.981567 4.97033 2.45513 4.62142 3.60516 5.20908C3.8057 5.31241 3.9885 5.4408 4.14797 5.59033L9.6945 2.74375C9.62912 2.54649 9.59603 2.34189 9.59625 2.13625C9.59625 0.955 10.6704 0 11.9995 0C13.3286 0 14.4028 0.954917 14.4028 2.13625C14.4028 2.34858 14.3681 2.5535 14.3035 2.74692ZM13.7258 3.62375L19.284 6.47625C19.1955 6.75125 19.1701 7.03927 19.2094 7.32317C19.2486 7.60707 19.3517 7.88106 19.5125 8.12883C19.8508 8.652 20.402 8.99883 21.0137 9.134V14.8348C20.9825 14.8416 20.9514 14.849 20.9206 14.8568L13.6613 3.68083C13.6832 3.66217 13.7048 3.64308 13.7258 3.62375ZM10.3393 3.68217L3.08007 14.858C3.04868 14.8499 3.01711 14.8424 2.98538 14.8355V9.13408C3.5971 8.99892 4.14825 8.65208 4.4866 8.12892C4.6477 7.88067 4.75087 7.60611 4.78997 7.32163C4.82906 7.03715 4.80327 6.74859 4.71413 6.47317L10.2707 3.6215C10.2931 3.64208 10.316 3.66242 10.3393 3.68217ZM12.6711 4.18833L19.9286 15.3617C19.7624 15.5027 19.6199 15.6643 19.5055 15.8414C19.3915 16.0175 19.3062 16.2071 19.2522 16.4046H4.74704C4.69301 16.2071 4.60765 16.0175 4.49354 15.8414C4.37879 15.6655 4.23656 15.5049 4.0711 15.3644L11.3301 4.18883C11.5477 4.24453 11.7731 4.2727 11.9995 4.2725C12.2327 4.2725 12.458 4.24317 12.6711 4.18833ZM13.7768 20.3948L19.2989 17.5608C19.2824 17.5146 19.2676 17.4678 19.2546 17.4207H4.74394C4.73625 17.4484 4.72793 17.4759 4.719 17.5033L10.2681 20.3513C10.4922 20.1441 10.7611 19.9795 11.0586 19.8671C11.3562 19.7548 11.6763 19.6972 11.9995 19.6978C12.3341 19.6972 12.6651 19.759 12.9712 19.879C13.2773 19.9991 13.5517 20.1748 13.7768 20.3948Z"
          fill="#E535AB"
        />
      </g>
      <defs>
        <clipPath id="clip0_2050_708">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SQLLogo = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.42158 11.4419C8.21259 12.0714 10.102 12.3745 12.0001 12.3367C13.8982 12.3742 15.7876 12.0709 17.5786 11.4412C18.9766 10.8959 19.4723 10.2899 19.4723 9.94115V7.2749C18.9836 7.60222 18.4592 7.87295 17.9093 8.0819C16.0144 8.76043 14.0126 9.09124 12.0001 9.0584C9.98778 9.09062 7.98612 8.76035 6.09083 8.0834C5.54068 7.87444 5.01627 7.60317 4.52783 7.2749V9.9374C4.52783 10.2929 5.02508 10.8959 6.42158 11.4419ZM6.42158 16.4707C7.05429 16.7119 7.70673 16.8979 8.37158 17.0264C9.56711 17.2577 10.7824 17.3715 12.0001 17.3662C13.2177 17.3717 14.433 17.2582 15.6286 17.0272C16.2934 16.8986 16.9459 16.7127 17.5786 16.4714C18.9766 15.9262 19.4723 15.3202 19.4723 14.9714V12.4289C19.0683 12.672 18.6437 12.8791 18.2033 13.0477C16.2127 13.7525 14.1115 14.0936 12.0001 14.0549C9.88845 14.0924 7.78727 13.75 5.79683 13.0439C5.35667 12.8749 4.93207 12.6678 4.52783 12.4252V14.9699C4.52783 15.3194 5.02508 15.9232 6.42158 16.4707ZM12.0001 22.4999C16.1251 22.4999 19.4723 21.1919 19.4723 19.5794V17.4517C19.1048 17.6732 18.7198 17.8643 18.3211 18.0232L18.2033 18.0704C16.213 18.7773 14.1119 19.1205 12.0001 19.0837C9.88823 19.1216 7.78685 18.7783 5.79683 18.0704C5.75633 18.0554 5.71733 18.0382 5.67908 18.0232C5.2804 17.8643 4.89537 17.6732 4.52783 17.4517V19.5794C4.52783 21.1919 7.87508 22.4999 12.0001 22.4999Z"
        fill="#FFDA44"
      />
      <path
        d="M12.0001 7.341C16.1269 7.341 19.4723 6.03345 19.4723 4.4205C19.4723 2.80755 16.1269 1.5 12.0001 1.5C7.87327 1.5 4.52783 2.80755 4.52783 4.4205C4.52783 6.03345 7.87327 7.341 12.0001 7.341Z"
        fill="#FFDA44"
      />
    </svg>
  );
};

export const MoreIcon = (props: IconProps) => {
  const { className } = props;

  return (
    <svg
      className={cn('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 13.5C18.6022 13.5 18.2206 13.342 17.9393 13.0607C17.658 12.7794 17.5 12.3978 17.5 12C17.5 11.6022 17.658 11.2206 17.9393 10.9393C18.2206 10.658 18.6022 10.5 19 10.5C19.3978 10.5 19.7794 10.658 20.0607 10.9393C20.342 11.2206 20.5 11.6022 20.5 12C20.5 12.3978 20.342 12.7794 20.0607 13.0607C19.7794 13.342 19.3978 13.5 19 13.5ZM14 13.5C13.6022 13.5 13.2206 13.342 12.9393 13.0607C12.658 12.7794 12.5 12.3978 12.5 12C12.5 11.6022 12.658 11.2206 12.9393 10.9393C13.2206 10.658 13.6022 10.5 14 10.5C14.3978 10.5 14.7794 10.658 15.0607 10.9393C15.342 11.2206 15.5 11.6022 15.5 12C15.5 12.3978 15.342 12.7794 15.0607 13.0607C14.7794 13.342 14.3978 13.5 14 13.5ZM9 13.5C8.60218 13.5 8.22064 13.342 7.93934 13.0607C7.65804 12.7794 7.5 12.3978 7.5 12C7.5 11.6022 7.65804 11.2206 7.93934 10.9393C8.22064 10.658 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.658 10.0607 10.9393C10.342 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.342 12.7794 10.0607 13.0607C9.77936 13.342 9.39782 13.5 9 13.5ZM22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.37 21 7.06 21H22C22.5304 21 23.0391 20.7893 23.4142 20.4142C23.7893 20.0391 24 19.5304 24 19V5C24 4.46957 23.7893 3.96086 23.4142 3.58579C23.0391 3.21071 22.5304 3 22 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
