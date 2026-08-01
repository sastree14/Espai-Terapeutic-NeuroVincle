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
        {/* Soft arcs forming a balanced triangle */}
        <path
          d="M24 7A17.33 17.33 0 0 1 9 33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-foreground/40"
        />
        <path
          d="M9 33A17.33 17.33 0 0 1 39 33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-clay/80"
        />
        <path
          d="M39 33A17.33 17.33 0 0 1 24 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-clay/60"
        />
        {/* Three nodes */}
        <circle cx="24" cy="7" r="3.5" className="fill-foreground" />
        <circle
          cx="9"
          cy="33"
          r="3.5"
          className="fill-cream stroke-foreground/30"
          strokeWidth="1.5"
        />
        <circle cx="39" cy="33" r="3.5" className="fill-clay" />
      </svg>
    );
  }
);
