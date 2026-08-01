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
        {/* Soft triangle arcs connecting three nodes */}
        <path
          d="M24 8A16 16 0 0 1 10.14 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-foreground/40"
        />
        <path
          d="M10.14 32A16 16 0 0 1 37.86 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-clay/80"
        />
        <path
          d="M37.86 32A16 16 0 0 1 24 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-clay/60"
        />
        {/* Three nodes */}
        <circle cx="24" cy="8" r="4.5" className="fill-foreground" />
        <circle
          cx="10.14"
          cy="32"
          r="4.5"
          className="fill-cream stroke-foreground/30"
          strokeWidth="1.5"
        />
        <circle cx="37.86" cy="32" r="4.5" className="fill-clay" />
      </svg>
    );
  }
);
