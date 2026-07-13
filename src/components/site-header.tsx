import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotras", label: "Sobre nosotras" },
  { to: "/servicios", label: "Servicios" },
  { to: "/neuropsicologia", label: "Neuropsicología" },
  { to: "/terapia-psicologica", label: "Terapia psicológica" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 font-serif text-lg text-primary">
            N
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg text-foreground">Neuroespai</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Neuropsicología · Psicología
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
          >
            Pedir cita
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm text-foreground last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground"
            >
              Pedir cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
