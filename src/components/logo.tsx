import { forwardRef, type SVGProps } from "react";

/** Símbolo de los tres círculos del logotipo oficial de NeuroVincle. */
export const Logo = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  function Logo({ className, ...props }, ref) {
    return (
      <svg
        ref={ref}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <circle cx="28" cy="16" r="15" fill="#c6b8ac" />
        <circle cx="17" cy="34" r="15" fill="#9b968b" style={{ mixBlendMode: "multiply" }} />
        <circle cx="39" cy="34" r="15" fill="#ab9989" style={{ mixBlendMode: "multiply" }} />
      </svg>
    );
  },
);

/** Versión horizontal responsive, con tipografía nítida a cualquier escala. */
export function BrandLockup() {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      <Logo className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" aria-hidden="true" />
      <span className="flex min-w-0 flex-col justify-center">
        <span className="whitespace-nowrap font-serif text-[28px] leading-[0.95] tracking-[-0.025em] text-foreground">
          NeuroVincle
        </span>
        <span className="mt-1 whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-[8px]">
          Neuropsicologia | Psicologia
        </span>
      </span>
    </span>
  );
}
