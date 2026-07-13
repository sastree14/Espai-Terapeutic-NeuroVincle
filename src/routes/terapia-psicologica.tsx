import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terapia-psicologica")({
  head: () => ({
    meta: [
      { title: "Terapia psicológica — Neuroespai" },
      { name: "description", content: "Psicoterapia infantojuvenil y de adultos con un enfoque integrador, cercano y basado en la evidencia científica." },
      { property: "og:title", content: "Terapia psicológica — Neuroespai" },
      { property: "og:description", content: "Acompañamiento terapéutico personalizado para niños, adolescentes y adultos." },
    ],
  }),
  component: TerapiaPsicologica,
});

function TerapiaPsicologica() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Terapia psicológica</p>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl">
          Un espacio de confianza para crecer y sentirse mejor.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          La terapia es un proceso de escucha, comprensión y acompañamiento. Ofrecemos un lugar
          donde cada persona pueda expresarse con libertad, comprender lo que le ocurre y encontrar
          herramientas para afrontar sus dificultades.
        </p>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            {
              t: "Infantojuvenil",
              d: "Acompañamos a niños y adolescentes en momentos de dificultad emocional, cambios de comportamiento, ansiedad o baja autoestima, trabajando también con la familia cuando es necesario.",
            },
            {
              t: "Adultos",
              d: "Atendemos problemas de ansiedad, estado de ánimo, estrés, duelo, crisis vitales o falta de bienestar emocional, desde un enfoque integrador y adaptado a cada persona.",
            },
            {
              t: "Familia",
              d: "Cuando la dificultad afecta a varios miembros, ofrecemos orientación y pautas para mejorar la comunicación, el vínculo y el manejo conjunto de la situación.",
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
            Trabajamos desde una perspectiva integradora, cercana y basada en la evidencia científica.
            Cada proceso se adapta a la persona, a sus necesidades, a su contexto y a su momento vital.
          </p>
          <p>
            Entendemos la terapia como un espacio de confianza, escucha y acompañamiento. Buscamos
            que cada persona se sienta comprendida, que pueda nombrar lo que le pasa y que construya,
            junto a la terapeuta, un camino hacia el bienestar.
          </p>
          <p>
            Contamos con formación específica en el abordaje de los trastornos del estado de ánimo y
            en psicoterapia infantojuvenil y de adultos. Nuestro objetivo es ofrecer una atención
            personalizada, rigurosa y sensible, acompañando con respeto a lo largo de todo el proceso.
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
