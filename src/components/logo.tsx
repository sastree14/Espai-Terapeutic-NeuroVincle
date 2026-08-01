import { forwardRef, type SVGProps } from "react";

export const Logo = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  function Logo({ className, ...props }, ref) {
    return (
      <svg
        ref={ref}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        {/* Fine arcs connecting the three nodes */}
        <path
          d="M24 6Q14 15 8 34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-foreground/50"
        />
        <path
          d="M24 6Q34 15 40 34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-clay/70"
        />
        <path
          d="M8 34Q24 24 40 34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-clay/90"
        />
        {/* Three earthy nodes */}
        <circle cx="24" cy="6" r="3" className="fill-foreground" />
        <circle cx="8" cy="34" r="3" className="fill-clay" />
        <circle cx="40" cy="34" r="3" className="fill-primary" />
      </svg>
    );
  }
);
