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
  {
    titulo: "Evaluación neuropsicológica",
    quien: "Adultos y mayores con quejas de memoria, cambios cognitivos o sospecha de deterioro.",
    incluye: ["Entrevista clínica", "Baterías estandarizadas", "Informe escrito con devolución"],
  },
  {
    titulo: "Estimulación cognitiva",
    quien: "Personas que desean entrenar la reserva cognitiva o ralentizar un deterioro incipiente.",
    incluye: ["Plan individualizado", "Sesiones semanales", "Material para casa"],
  },
  {
    titulo: "Psicología clínica adultos",
    quien: "Ansiedad, ánimo bajo, duelo, autoestima, momentos vitales complejos.",
    incluye: ["Enfoque integrador", "Sesiones de 50 min", "Presencial u online"],
  },
  {
    titulo: "Acompañamiento familiar",
    quien: "Familias que conviven con Alzheimer u otra enfermedad neurodegenerativa.",
    incluye: ["Orientación práctica", "Pautas de comunicación", "Apoyo emocional al cuidador"],
  },
  {
    titulo: "Prevención y hábitos",
    quien: "Personas sanas que quieren cuidar su salud cerebral a largo plazo.",
    incluye: ["Evaluación de base", "Rutinas cognitivas", "Recomendaciones de estilo de vida"],
  },
  {
    titulo: "Segunda opinión",
    quien: "Si ya tienes un diagnóstico y quieres una mirada complementaria.",
    incluye: ["Revisión de informes", "Entrevista clínica", "Devolución honesta"],
  },
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
