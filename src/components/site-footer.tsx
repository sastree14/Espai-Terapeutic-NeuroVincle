import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { siteConfig } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-9 w-9 text-primary" aria-hidden="true" />
            <span className="font-serif text-lg tracking-tight">NeuroVincle</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Atención de neuropsicología y psicología. Acompañamos a personas y familias con
            honestidad, rigor y vocación.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><Link to="/sobre-nosotras" className="hover:text-foreground">Sobre nosotras</Link></li>
            <li><Link to="/neuropsicologia" className="hover:text-foreground">Neuropsicología</Link></li>
            <li><Link to="/terapia-psicologica" className="hover:text-foreground">Terapia psicológica</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-foreground">
                {siteConfig.contactEmail}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Reservar primera visita
              </a>
            </li>
            <li>Consulta presencial y online</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} NeuroVincle. Todos los derechos reservados.</span>
          <span>Neuropsicología y psicología · Atención centrada en las personas.</span>
        </div>
      </div>
    </footer>
  );
}
