import type { IconProps } from "@/components/icons/types";
import { cn } from "@/lib/utils";


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
      <g clipPath="url(#clip0_2050_712)">
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