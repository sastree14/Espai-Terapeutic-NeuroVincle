import { Link } from "@tanstack/react-router";
import { BrandLockup } from "./logo";
import { siteConfig } from "../lib/site-config";
import { useT } from "../lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center">
            <BrandLockup />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t("Atención de neuropsicología y psicología. Acompañamos a personas y familias con honestidad, rigor y vocación.")}</p>
        </div>

        <div>
          <h4 className="font-serif text-base">{t("Navegación")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">{t("Inicio")}</Link></li>
            <li><Link to="/sobre-nosotras" className="hover:text-foreground">{t("Sobre nosotras")}</Link></li>
            <li><Link to="/neuropsicologia" className="hover:text-foreground">{t("Neuropsicología")}</Link></li>
            <li><Link to="/terapia-psicologica" className="hover:text-foreground">{t("Terapia psicológica")}</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">{t("Contacto")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base">{t("Contacto")}</h4>
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
              >{t("Reservar primera visita")}</a>
            </li>
            <li>{t("Consulta presencial y online")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} NeuroVincle. {t("Todos los derechos reservados.")}</span>
          <span>{t("Neuropsicología y psicología · Atención centrada en las personas.")}</span>
        </div>
      </div>
    </footer>
  );
}
