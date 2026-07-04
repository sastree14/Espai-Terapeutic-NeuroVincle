import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-consulta.jpg";
import cognitiveImg from "../assets/cognitive.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neuroespai — Neuropsicología y Psicología Clínica" },
      { name: "description", content: "Consulta de neuropsicología y psicología clínica. Evaluación, prevención y terapia con honestidad, transparencia y vocación." },
      { property: "og:title", content: "Neuroespai — Neuropsicología y Psicología Clínica" },
      { property: "og:description", content: "Evaluación cognitiva, prevención del deterioro y acompañamiento terapéutico. Presencial y online." },
    ],
  }),
  component: Home,
});

const valores = [
  {
    titulo: "Honestidad",
    texto: "Te explicamos qué vemos, qué no, y por qué. Sin promesas vacías ni diagnósticos apresurados.",
  },
  {
    titulo: "Transparencia",
    texto: "Procesos, tiempos y honorarios claros desde la primera visita. Tú decides cada paso.",
  },
  {
    titulo: "Vocación",
    texto: "Acompañamos cada caso con la dedicación de quien eligió esta profesión por convicción.",
  },
];

const servicios = [
  {
    titulo: "Evaluación neuropsicológica",
    texto: "Exploración estructurada de memoria, atención, lenguaje y funciones ejecutivas.",
  },
  {
    titulo: "Estimulación cognitiva",
    texto: "Programas individualizados para mantener y entrenar la reserva cognitiva.",
  },
  {
    titulo: "Psicología clínica",
    texto: "Terapia individual para ansiedad, duelo, estado de ánimo y acompañamiento vital.",
  },
  {
    titulo: "Acompañamiento familiar",
    texto: "Orientación a familias que conviven con deterioro cognitivo o Alzheimer.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Neuropsicología · Psicología clínica
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
              Cuidar la mente <em className="text-primary not-italic">hoy</em>, para sostenerla mañana.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg whitespace-pre-line">
              Un espacio de atención psicológica especializada para niños, adolescentes y adultos, orientado a promover el bienestar emocional y mejorar la calidad de vida. Ofrecemos evaluación e intervención personalizada para afrontar dificultades emocionales, problemas de conducta y los retos que pueden surgir en las diferentes etapas de la vida.{"\n\n\n\n"}
              Además, contamos con un servicio de neuropsicología centrado en la evaluación y la rehabilitación neuropsicológica, dirigido a personas con alteraciones cognitivas derivadas de daño cerebral, enfermedades neurológicas o trastornos del neurodesarrollo, con el objetivo de favorecer su autonomía y funcionamiento en la vida diaria.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://calendly.com/neuroespai/primera-visita"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Reservar primera visita
              </a>
              <Link
                to="/servicios"
                className="inline-flex items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                Ver servicios →
              </Link>
            </div>
          </div>

          <figure className="relative">
            <img
              src={heroImg}
              alt="Consulta de neuropsicología con luz natural"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_30px_60px_-30px_rgba(40,30,20,0.35)]"
            />
            <figcaption className="mt-3 text-xs italic text-muted-foreground">
              Un espacio sereno para escuchar y pensar contigo.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Nuestros valores</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Una práctica clínica sin atajos.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {valores.map((v) => (
              <div key={v.titulo} className="border-t border-foreground/20 pt-6">
                <h3 className="font-serif text-xl">{v.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Servicios</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Acompañamos cada etapa, desde la prevención hasta el tratamiento.
            </h2>
          </div>
          <Link
            to="/servicios"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Ver todos los servicios →
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {servicios.map((s) => (
            <article key={s.titulo} className="bg-background p-8">
              <h3 className="font-serif text-xl">{s.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Reserva cognitiva */}
      <section className="bg-primary/5">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <img
            src={cognitiveImg}
            alt="Ejercicio cognitivo con piezas de madera"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Prevención y reserva cognitiva
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              El cerebro también se entrena. Empezar pronto importa.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Las enfermedades neurodegenerativas, como el Alzheimer, comienzan años antes de los
              primeros síntomas. La estimulación cognitiva sostenida, los hábitos de vida y un
              seguimiento clínico permiten ampliar la reserva cognitiva y retrasar su impacto.
            </p>
            <Link
              to="/neuropsicologia"
              className="mt-8 inline-flex items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Conoce nuestro enfoque →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          ¿Quieres hablar con nosotras?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          La primera visita es un espacio para escucharte, entender tu situación y plantearte un
          camino claro. Sin compromiso.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://calendly.com/neuroespai/primera-visita"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Reservar primera visita
          </a>
          <a
            href="mailto:hola@neuroespai.com"
            className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-foreground hover:text-background"
          >
            Escribir por email
          </a>
        </div>
      </section>
    </div>
  );
}
