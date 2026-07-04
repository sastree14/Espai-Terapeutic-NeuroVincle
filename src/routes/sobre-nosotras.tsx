import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre-nosotras")({
  head: () => ({
    meta: [
      { title: "Sobre nosotras — Neuroespai" },
      { name: "description", content: "Conoce al equipo de Neuroespai: dos neuropsicólogas y psicólogas clínicas con vocación, formación rigurosa y trato cercano." },
      { property: "og:title", content: "Sobre nosotras — Neuroespai" },
      { property: "og:description", content: "Dos profesionales con formación en neuropsicología y psicología clínica." },
    ],
  }),
  component: SobreNosotras,
});

const equipo = [
  {
    nombre: "Profesional 1",
    rol: "Neuropsicóloga · Psicóloga clínica",
    bio: "Especializada en evaluación neuropsicológica del adulto y prevención del deterioro cognitivo. Formación universitaria en Psicología y máster en Neuropsicología clínica.",
    inicial: "·",
  },
  {
    nombre: "Profesional 2",
    rol: "Neuropsicóloga · Psicóloga clínica",
    bio: "Centrada en intervención psicológica, acompañamiento en duelo y trabajo con familias de personas con Alzheimer y otras demencias.",
    inicial: "·",
  },
];

function SobreNosotras() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Sobre nosotras</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">
          Dos profesionales, una misma forma de entender la clínica.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Nos formamos en psicología y neuropsicología porque creemos que cuidar la mente exige
          escuchar antes de actuar y explicar antes de intervenir. Acompañamos cada caso con
          tiempo, evidencia y respeto.
        </p>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          {equipo.map((p, i) => (
            <article key={p.nombre} className="bg-background p-8 shadow-[0_20px_50px_-30px_rgba(40,30,20,0.25)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 font-serif text-3xl text-primary">
                {p.inicial}
              </div>
              <h2 className="mt-6 font-serif text-2xl">{p.nombre}</h2>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">{p.rol}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">Cómo trabajamos</h2>
        <div className="mt-10 space-y-8">
          {[
            ["01", "Primera visita", "Escuchamos tu motivo de consulta, recogemos antecedentes y acordamos un plan."],
            ["02", "Evaluación o intervención", "Aplicamos las pruebas o el enfoque terapéutico más adecuados a tu situación."],
            ["03", "Devolución y seguimiento", "Te explicamos los resultados con claridad y acompañamos cada paso del proceso."],
          ].map(([n, t, d]) => (
            <div key={n} className="grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-6">
              <span className="font-serif text-2xl text-primary">{n}</span>
              <div>
                <h3 className="font-serif text-xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/contacto"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Pedir primera visita
          </Link>
        </div>
      </section>
    </div>
  );
}
