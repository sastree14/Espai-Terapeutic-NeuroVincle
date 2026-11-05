import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/neuropsicologia")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://neurovincle.es/neuropsicologia" }],
    meta: [
      { property: "og:url", content: "https://neurovincle.es/neuropsicologia" },
      { title: "Neuropsicología y prevención — NeuroVincle" },
      { name: "description", content: "Evaluación neuropsicológica, estimulación cognitiva, rehabilitación y orientación a familias." },
      { property: "og:title", content: "Neuropsicología y prevención — NeuroVincle" },
      { property: "og:description", content: "Por qué la prevención y la estimulación cognitiva importan, y cómo trabajamos con ellas." },
    ],
  }),
  component: Neuropsicologia,
});

function Neuropsicologia() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Neuropsicología</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">
          Cuidar el cerebro es un trabajo de años, no de semanas.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Los cambios cognitivos pueden tener causas muy diferentes. La valoración profesional permite
          comprender las necesidades de cada persona, orientar el seguimiento y proponer apoyos
          adaptados a su situación.
        </p>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            {
              t: "Reserva cognitiva",
              d: "Es la capacidad del cerebro de seguir funcionando bien pese al paso del tiempo o al daño. Se construye con educación, vínculos, actividad mental y estilo de vida.",
            },
            {
              t: "Prevención",
              d: "La evaluación temprana de cambios cognitivos puede ayudar a orientar el seguimiento, adaptar hábitos y valorar apoyos adecuados para cada persona.",
            },
            {
              t: "Intervención",
              d: "Cuando ya hay un diagnóstico, ofrecemos estimulación cognitiva, orientación familiar y un acompañamiento honesto sobre qué esperar.",
            },
          ].map((b) => (
            <div key={b.t} className="border-t border-foreground/20 pt-6">
              <h2 className="font-serif text-xl">{b.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">Nuestro enfoque</h2>
        <div className="mt-10 space-y-10 text-base leading-relaxed text-muted-foreground">
          <p>
            Trabajamos desde una mirada integradora. Combinamos la evaluación neuropsicológica con
            la perspectiva clínica psicológica: las personas no son solo un perfil cognitivo, son
            también historia, vínculos y emociones.
          </p>
          <p>
            En cada caso valoramos qué áreas cognitivas conviene entrenar (memoria, atención,
            lenguaje, funciones ejecutivas), qué hábitos pueden ajustarse (sueño, ejercicio,
            actividad social) y qué apoyos necesita la familia para sostener el proceso.
          </p>
          <p>
            Y, sobre todo, te lo contamos como es. No prometemos resultados imposibles; buscamos ayudarte a comprender qué sucede y
            encontrar estrategias realistas para favorecer tu bienestar.
          </p>
        </div>

        <div className="mt-12">
          <Link
            to="/contacto"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Hablemos de tu caso
          </Link>
        </div>
      </section>
    </div>
  );
}
