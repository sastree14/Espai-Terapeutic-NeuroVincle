import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Neuroespai" },
      { name: "description", content: "Evaluación neuropsicológica, estimulación cognitiva, psicología clínica y acompañamiento familiar. Presencial y online." },
      { property: "og:title", content: "Servicios — Neuroespai" },
      { property: "og:description", content: "Servicios de neuropsicología y psicología clínica." },
    ],
  }),
  component: Servicios,
});

const items = [
  "Evaluación neuropsicológica",
  "Estimulación cognitiva",
  "Psicología clínica adultos",
  "Acompañamiento familiar",
  "Prevención y hábitos",
  "Segunda opinión",
];

function Servicios() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Servicios</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">
          Lo que podemos hacer juntas.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Cada servicio parte de la misma idea: comprender bien antes de proponer. Te explicamos qué
          incluye y para quién está pensado.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {items.map((s) => (
            <article key={s.titulo} className="flex h-full items-center bg-background p-8">
              <h2 className="font-serif text-2xl">{s.titulo}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            ¿No sabes qué servicio encaja contigo?
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Escríbenos o reserva una primera visita. La usamos para orientarte sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/neuroespai/primera-visita"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Reservar primera visita
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
