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
        {/* Connecting arcs */}
        <path
          d="M24 10c-8 0-15 6-17 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-clay/60"
        />
        <path
          d="M24 10c8 0 15 6 17 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-foreground/40"
        />
        <path
          d="M7 24c0 9 8 17 17 17s17-8 17-17"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-clay/80"
        />
        {/* Three dots */}
        <circle cx="24" cy="10" r="4.5" className="fill-foreground" />
        <circle
          cx="9"
          cy="24"
          r="4.5"
          className="fill-cream stroke-foreground/30"
          strokeWidth="1.5"
        />
        <circle cx="39" cy="24" r="4.5" className="fill-clay" />
      </svg>
    );
  }
);
