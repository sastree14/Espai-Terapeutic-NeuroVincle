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
        {/* Fine arcs forming a soft triangle */}
        <path
          d="M24 7A17.33 17.33 0 0 1 9 33"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-clay/70"
        />
        <path
          d="M9 33A17.33 17.33 0 0 1 39 33"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-clay/70"
        />
        <path
          d="M39 33A17.33 17.33 0 0 1 24 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-clay/70"
        />
        {/* Three earthy nodes */}
        <circle cx="24" cy="7" r="2.5" className="fill-foreground" />
        <circle cx="9" cy="33" r="2.5" className="fill-clay" />
        <circle cx="39" cy="33" r="2.5" className="fill-primary" />
      </svg>
    );
  }
);
