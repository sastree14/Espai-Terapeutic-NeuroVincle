import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/neuropsicologia")({
  head: () => ({
    meta: [
      { title: "Neuropsicología y prevención — Neuroespai" },
      { name: "description", content: "Reserva cognitiva, prevención del Alzheimer y enfermedades neurodegenerativas: nuestro enfoque clínico." },
      { property: "og:title", content: "Neuropsicología y prevención — Neuroespai" },
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
          Las enfermedades neurodegenerativas, como el Alzheimer, no aparecen de un día para otro.
          Su origen está años antes de los primeros síntomas. Por eso entendemos la neuropsicología
          como una disciplina clínica y, también, profundamente preventiva.
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
              d: "Detectar cambios sutiles a tiempo, ajustar hábitos y entrenar funciones cognitivas concretas permite ganar años de calidad de vida.",
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
            Y, sobre todo, te lo contamos como es. No prometemos curar lo incurable; sí podemos
            ayudarte a entender qué pasa, ganar tiempo y vivir mejor el tiempo que ganamos.
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
