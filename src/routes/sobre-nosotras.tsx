import { createFileRoute, Link } from "@tanstack/react-router";
import { useT } from "../lib/i18n";

export const Route = createFileRoute("/sobre-nosotras")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://neurovincle.es/sobre-nosotras" }],
    meta: [
      { property: "og:url", content: "https://neurovincle.es/sobre-nosotras" },
      { title: "Sobre nosotras — NeuroVincle" },
      { name: "description", content: "Conoce al equipo de NeuroVincle: una neuropsicóloga y una psicóloga general sanitaria, con formación rigurosa y trato cercano." },
      { property: "og:title", content: "Sobre nosotras — NeuroVincle" },
      { property: "og:description", content: "Una neuropsicóloga y una psicóloga general sanitaria acompañan personas y familias con vocación y rigor." },
    ],
  }),
  component: SobreNosotras,
});

const equipo = [
  {
    nombre: "Jana Oró",
    rol: "Neuropsicóloga",
    bio: "Soy neuropsicóloga y mi trabajo se centra en la evaluación neuropsicológica, la estimulación cognitiva y la rehabilitación, siempre desde un enfoque cercano, individualizado y basado en la evidencia científica.\n\nAcompaño a personas que presentan alteraciones cognitivas derivadas de ictus, traumatismos craneoencefálicos, enfermedades neurodegenerativas u otras condiciones neurológicas, diseñando programas de intervención adaptados a las necesidades de cada persona. Asimismo, considero fundamental el acompañamiento y la orientación a las familias, proporcionando herramientas que favorezcan la comprensión del proceso y la participación activa en la intervención.",
    imagen: "/jana-oro-original-optimizada.webp",
    inicial: "J",
  },
  {
    nombre: "Ariadna Golsa Muñoz",
    rol: "Psicóloga General Sanitaria",
    bio: "Soy Psicóloga General Sanitaria, especializada en psicoterapia infantojuvenil y de adultos. Trabajo desde un enfoque integrador, cercano y basado en la evidencia científica, y cuento con formación específica en el abordaje de los trastornos del estado de ánimo.\n\nEntiendo la terapia como un espacio de confianza, escucha y acompañamiento, donde cada persona pueda expresarse con libertad, comprender lo que le ocurre y encontrar herramientas para afrontar sus dificultades. Mi objetivo es ofrecer una atención personalizada, adaptando cada proceso a las necesidades y circunstancias de cada persona.",
    imagen: null,
    inicial: "A",
  },
];

function SobreNosotras() {
  const t = useT();
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t("Sobre nosotras")}</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">{t("Cada historia importa.")}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("Detrás de cada consulta hay una experiencia única. Por eso trabajamos desde la cercanía, la escucha y la evidencia científica, acompañando a cada persona según sus necesidades y su propio ritmo.")}</p>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          {equipo.map((p) => (
            <article key={p.nombre} className="flex h-full min-w-0 flex-col bg-background p-7 shadow-[0_20px_50px_-30px_rgba(40,30,20,0.25)] sm:p-8">
              {p.imagen ? (
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border bg-background">
                  <img
                    src={p.imagen}
                    alt={`${t("Foto de")} ${p.nombre}`}
                    width={128}
                    height={128}
                    className="h-full w-full object-contain object-center"
                    
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-serif text-4xl text-clay">
                  {p.inicial}
                </div>
              )}
              <h2 className="mt-6 font-serif text-2xl">{p.nombre}</h2>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">{t(p.rol)}</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground md:hyphens-auto md:text-justify">
                {t(p.bio).split("\n\n").map((parrafo, idx) => (
                  <p key={idx}>{parrafo}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">{t("Cómo trabajamos")}</h2>
        <div className="mt-10 space-y-8">
          {[
            ["01", "Primera visita", "Escuchamos tu motivo de consulta, recogemos antecedentes y acordamos un plan."],
            ["02", "Evaluación o intervención", "Aplicamos las pruebas o el enfoque terapéutico más adecuados a tu situación."],
            ["03", "Devolución y seguimiento", "Te explicamos los resultados con claridad y acompañamos cada paso del proceso."],
          ].map(([n, title, description]) => (
            <div key={n} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-6">
              <span className="font-serif text-2xl text-primary">{n}</span>
              <div>
                <h3 className="font-serif text-xl">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(description)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/contacto"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >{t("Pedir primera visita")}</Link>
        </div>
      </section>
    </div>
  );
}
