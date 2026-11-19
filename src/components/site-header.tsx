import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandLockup } from "./logo";
import { LanguageSwitch, useT } from "../lib/i18n";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotras", label: "Sobre nosotras" },
  { to: "/neuropsicologia", label: "Neuropsicología" },
  { to: "/terapia-psicologica", label: "Terapia psicológica" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <BrandLockup />
        </Link>
        <nav aria-label={t("Navegación principal")} className="hidden items-center gap-4 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {t(item.label)}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="inline-flex shrink-0 items-center rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
          >
            {t("Pedir cita")}
          </Link>
          <LanguageSwitch />
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitch />
          <button
            type="button"
            aria-label={open ? t("Cerrar menú") : t("Abrir menú")}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background xl:hidden">
          <nav id="menu-movil" aria-label={t("Navegación principal")} className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm text-foreground last:border-none"
              >
                {t(item.label)}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground"
            >
              {t("Pedir cita")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
